function divelemdrag(draggableElement) {
  // 创建旋转手柄
  const rotateHandle = document.createElement('div');
  rotateHandle.classList.add('rotate-handle');
  rotateHandle.style.position = 'absolute';
  rotateHandle.style.width = '20px';
  rotateHandle.style.height = '20px';
  rotateHandle.style.backgroundColor = 'red';
  rotateHandle.style.borderRadius = '50%';
  rotateHandle.style.cursor = 'grab';
  rotateHandle.style.zIndex = '10';
  rotateHandle.style.pointerEvents = 'auto';
  rotateHandle.style.display = 'none';
  document.body.appendChild(rotateHandle);

  let currentAngle = 0;
  let offsetX = 0, offsetY = 0;

  draggableElement.addEventListener('click', function (e) {
    e.stopPropagation();
    hideAllRotateHandles();
    rotateHandle.style.display = 'block';
    updatePosition();
  });

  interact(draggableElement).draggable({
    listeners: {
      move(event) {
        offsetX += event.dx;
        offsetY += event.dy;
        applyTransform();
        updatePosition();
      }
    }
  });

  interact(draggableElement).resizable({
    edges: { left: true, right: true, bottom: true, top: true },
    listeners: {
      move(event) {
        draggableElement.style.width = `${event.rect.width}px`;
        draggableElement.style.height = `${event.rect.height}px`;
        applyTransform();
        updatePosition();
      }
    }
  });

  interact(rotateHandle).draggable({
    onstart: () => {
      const transform = window.getComputedStyle(draggableElement).transform;
      if (transform && transform !== 'none') {
        currentAngle = parseFloat(draggableElement.getAttribute('data-rotate')) || 0;
      }
    },
    onmove: (event) => {
      const rect = draggableElement.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const angleRad = Math.atan2(event.clientY - centerY, event.clientX - centerX);
      currentAngle = angleRad * (180 / Math.PI);
      draggableElement.setAttribute('data-rotate', currentAngle);
      applyTransform();
      updatePosition();
    }
  });

  function applyTransform() {
    draggableElement.style.transform = `
      translate(${offsetX}px, ${offsetY}px)
      rotate(${currentAngle}deg)
    `;
  }

  function updatePosition() {
    const rect = draggableElement.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const x = rect.left + window.scrollX;
    const y = rect.top + window.scrollY;

    const handleOffset = 10;
    let relHandleX = width/2-20 + handleOffset;
    let relHandleY = -20;

    const centerX = x + width / 2;
    const centerY = y + height / 2;
    const angleRad = (currentAngle || 0) * Math.PI / 180;

    const cos = Math.cos(angleRad);
    const sin = Math.sin(angleRad);

    let relX = relHandleX - width / 2;
    let relY = relHandleY - height / 2;

    const rotatedX = relX * cos - relY * sin;
    const rotatedY = relX * sin + relY * cos;

    const finalX = centerX + rotatedX;
    const finalY = centerY + rotatedY;

    rotateHandle.style.left = `${finalX}px`;
    rotateHandle.style.top = `${finalY}px`;
  }

  function hideAllRotateHandles() {
    document.querySelectorAll('.rotate-handle').forEach(h => h.style.display = 'none');
  }

  document.addEventListener('click', function () {
    if (rotateHandle.style.display === 'block') {
      rotateHandle.style.display = 'none';
    }
  });

  updatePosition();
}