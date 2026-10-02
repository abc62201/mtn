import os

def search_content_in_files(directory, target_content):
    for root, dirs, files in os.walk(directory):
        for file in files:
            # 确保文件是.php文件
            if file.endswith('.js'):
                file_path = os.path.join(root, file)
                with open(file_path, 'r', encoding='utf-8') as f:
                    content = f.read()
                    if target_content in content:
                        print(f"找到匹配内容在文件: {file_path}")

# 使用示例
search_dir = r'E:\MTN\html\blockly'
target_content = "粘贴"
search_content_in_files(search_dir, target_content)
print("搜索完成.")
