# 梦童年 (MTN)

梦童年（MTN）是一款专为怀旧游戏玩家设计的游戏前端管理软件，支持多种经典游戏机型的模拟器集成和游戏管理。

## 项目简介

梦童年是一款 Windows 平台的游戏管理前端，集合了游戏库管理、模拟器集成、可视化编程等功能。通过简洁的图形界面，玩家可以轻松管理自己的怀旧游戏收藏，并使用内置的 Blockly 可视化编程工具创建游戏辅助脚本。

## 主要特性

### 🎮 游戏管理
- 支持多种经典游戏机型：NES/FC、SNES/超级任天堂、N64、GameCube、Genesis/Mega Drive、PS1 等
- 游戏分类管理功能
- 收藏夹与标签系统
- 游戏介绍和元数据管理

### 🖥️ 模拟器集成
内置支持多种模拟器核心：
- **FCEUX** - NES/FC 游戏模拟器
- **Dolphin** - GameCube & Wii 模拟器
- **Genesis Plus GX** - Genesis/Mega Drive 模拟器
- **Mupen64Plus** - N64 模拟器
- **PCSX2** - PS2 模拟器（需额外配置）
- 以及其他多种 libretro 核心

### 🧩 Blockly 可视化编程
内置 Blockly 可视化编程环境，支持：
- 拖拽式编程
- JavaScript 代码生成
- 游戏辅助脚本编写
- 自定义游戏逻辑

### 💾 数据存储
- 支持 SQLite 本地数据库
- 支持 MySQL 远程数据库（需配置）
- 游戏数据本地缓存

## 系统要求

- Windows 7 或更高版本
- .NET Framework 4.5+
- 建议配置：
  - 4GB 及以上内存
  - 支持 DirectX 11 的显卡
  - 足够存储游戏文件的硬盘空间

## 安装说明

1. 下载并解压 MTN 安装包
2. 运行 `MTN.exe` 启动程序
3. 首次运行会自动初始化数据库
4. 根据需要配置模拟器路径

## 目录结构

```
MTN/
├── MTN.exe              # 主程序
├── database.db          # SQLite 数据库
├── DLL/                 # 依赖库
├── emu/                 # 模拟器目录
│   ├── cores/           # libretro 核心
│   ├── fceuxy260/       # FCEUX 模拟器
│   └── emu_img/         # 模拟器图标
├── html/                # Web 前端
│   ├── blockly/         # Blockly 编程环境
│   └── bootstrap/       # Bootstrap 框架
└── GPUCache/            # GPU 缓存
```

## 使用指南

### 添加游戏
1. 点击"添加游戏"按钮
2. 选择游戏分类
3. 导入游戏 ROM 文件
4. 填写游戏相关信息

### 运行游戏
1. 在游戏库中选择目标游戏
2. 双击或点击"运行"按钮
3. 选择要使用的模拟器
4. 开始游戏

### 使用 Blockly 编程
1. 打开编程界面
2. 从左侧工具箱拖拽代码块
3. 组合逻辑构建脚本
4. 导出或运行生成代码

## 技术栈

- **前端框架**: CefSharp (Chromium Embedded)
- **UI 框架**: WinForms
- **数据库**: SQLite / MySQL
- **计算机视觉**: Emgu CV
- **PDF 处理**: Spire.Pdf
- **可视化编程**: Blockly

## 注意事项

1. 游戏 ROM 需要自行准备
2. 部分模拟器需要额外配置
3. 首次运行请确保网络连接正常
4. 建议将游戏文件存放在固态硬盘以获得更好体验

## 许可证

本项目仅供学习交流使用，请勿用于商业用途。游戏中涉及的所有版权内容归原版权方所有。

## 参与贡献

1. Fork 本仓库
2. 新建 Feat_xxx 分支
3. 提交代码
4. 新建 Pull Request