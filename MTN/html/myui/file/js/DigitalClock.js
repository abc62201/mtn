        class DigitalClock {
            constructor(containerId, options = {}) {
                this.container = document.getElementById(containerId);
                if (!this.container) {
                    console.error(`❌ 错误: 找不到 ID 为 "${containerId}" 的元素。请检查 HTML 中是否有该 ID。`);
                    return;
                }
                console.log(`✅ 正在初始化时钟: ${containerId}`);

                this.config = {
                    color: options.color || '#00ffcc',
                    bgColor: options.bgColor || '',
                    showDate: options.showDate !== false,
                    fontRatio: options.fontRatio || 0.5
                };

                this.timeEl = null;
                this.dateEl = null;
                this.timer = null;
                this.init();
            }

            init() {
                // 设置容器基础样式
                const s = this.container.style;
                s.position = 'relative';
                s.display = 'flex';
                s.justifyContent = 'center';
                s.alignItems = 'center';
                s.overflow = 'hidden';
                //if (!s.width) s.width = '300px';
                //if (!s.height) s.height = '150px';

                // 创建内部包装器
                const wrapper = document.createElement('div');
                wrapper.style.cssText = `
                    background-color: ${this.config.bgColor};
                   
   
                    width: 100%; height: 100%;
                    box-sizing: border-box;
                    display: flex; flex-direction: column;
                    justify-content: center; align-items: center;
                    font-family: "Courier New", Courier, monospace;
                    user-select: none;
                `;

                // 创建时间显示
                this.timeEl = document.createElement('div');
                this.timeEl.style.cssText = `
                    color: ${this.config.color};
                    font-weight: bold;
                    text-shadow: 0 0 15px ${this.config.color};
                    line-height: 1;
                    letter-spacing: 0.05em;
                    white-space: nowrap;
                `;

                // 创建日期显示
                if (this.config.showDate) {
                    this.dateEl = document.createElement('div');
                    this.dateEl.style.cssText = `
                        color: ${this.config.color};
                        font-size: 1em;
                        margin-top: 0.1em;
                        text-transform: uppercase;
                        letter-spacing: 0.1em;
                        opacity: 0.8;
                    `;
                    wrapper.appendChild(this.dateEl);
                }

                wrapper.appendChild(this.timeEl);
                this.container.appendChild(wrapper);

                // 启动
                this.update();
                this.timer = setInterval(() => this.update(), 1000);
                
                // 监听大小变化
                window.addEventListener('resize', () => this.adjustFontSize());
                setTimeout(() => this.adjustFontSize(), 50); // 稍微延迟确保渲染完成
            }

            adjustFontSize() {
                if (!this.container || !this.timeEl) return;
                const width = this.container.offsetWidth;
                const height = this.container.offsetHeight;
                const baseSize = Math.min(width, height) * this.config.fontRatio;
                const finalSize = Math.max(12, Math.min(baseSize, 150));
                
                this.timeEl.style.fontSize = `${finalSize}px`;
                if (this.dateEl) {
                    this.dateEl.style.fontSize = `${finalSize * 0.25}px`;
                }
            }

            update() {
                const now = new Date();
                const h = String(now.getHours()).padStart(2, '0');
                const m = String(now.getMinutes()).padStart(2, '0');
                const s = String(now.getSeconds()).padStart(2, '0');
                
                if (this.timeEl) this.timeEl.textContent = `${h}:${m}:${s}`;

                if (this.dateEl && this.config.showDate) {
                    const weeks = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
                    this.dateEl.textContent = `${now.getFullYear()}-${now.getMonth()+1}-${now.getDate()} ${weeks[now.getDay()]}`;
                }
            }
            
            destroy() {
                if (this.timer) clearInterval(this.timer);
                if (this.container) this.container.innerHTML = '';
            }
        }