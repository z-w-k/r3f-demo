 # R3F Demo - React Three Fiber 演示项目

一个基于 React Three Fiber 的现代 3D Web 应用演示项目，展示了如何使用现代前端技术栈构建交互式 3D 体验。

## 🚀 技术栈

### 核心框架
- **React 18** - 前端框架
- **TypeScript** - 类型安全
- **Vite** - 构建工具

### 3D 渲染
- **React Three Fiber** - React 的 Three.js 渲染器
- **@react-three/drei** - R3F 组件库
- **Three.js** - 3D 图形库

### 状态管理与路由
- **Zustand** - 轻量级状态管理
- **React Router DOM** - 客户端路由

### 样式
- **SCSS** - CSS 预处理器
- **CSS Variables** - 主题系统

## ✨ 功能特性

- 🎭 **交互式 3D 场景** - 实时渲染和操控
- 🎨 **多种 3D 组件** - 立方体、球体、圆环等
- 🔧 **实时参数调整** - 动态控制场景属性
- 🌙 **主题切换** - 明暗主题切换
- 📱 **响应式设计** - 适配各种设备
- 💾 **状态持久化** - 本地存储用户设置

## 📁 项目架构

```
src/
├── components/          # 可复用组件
│   ├── 3D/             # 3D 组件
│   ├── Header/         # 头部组件
│   ├── Layout/         # 布局组件
│   ├── LoadingSpinner/ # 加载组件
│   └── Sidebar/        # 侧边栏组件
├── pages/              # 页面组件
│   ├── About/          # 关于页面
│   ├── Gallery/        # 画廊页面
│   ├── Home/           # 首页
│   └── Scene3D/        # 3D 场景页面
├── stores/             # 状态管理
│   └── useAppStore.ts  # 应用状态
├── styles/             # 样式文件
│   ├── variables.scss  # SCSS 变量
│   ├── index.scss      # 全局样式
│   └── App.scss        # 应用样式
├── App.tsx             # 主应用组件
└── main.tsx            # 应用入口
```

## 🛠️ 开发指南

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

### 构建生产版本

```bash
npm run build
```

### 预览生产版本

```bash
npm run preview
```

## 🏗️ 架构设计

项目采用分层架构设计：

### 表现层
- React 组件
- SCSS 样式
- 响应式设计

### 逻辑层
- Zustand 状态管理
- React Hooks
- 事件处理器

### 3D 渲染层
- React Three Fiber
- Three.js
- 3D 组件

### 工具层
- TypeScript
- Vite
- React Router

## 🎯 主要页面

1. **首页** (`/`) - 项目介绍和导航
2. **3D 场景** (`/scene`) - 交互式 3D 演示
3. **组件画廊** (`/gallery`) - 3D 组件展示
4. **关于** (`/about`) - 项目详情和架构说明

## 🎮 3D 场景控制

在 3D 场景页面，您可以：

- **鼠标拖拽** - 旋转视角
- **滚轮** - 缩放场景
- **侧边栏控制** - 调整动画参数
  - 旋转速度
  - 线框模式
  - 动画开关

## 💡 学习要点

这个项目展示了：

1. **React Three Fiber 基础用法**
   - Canvas 设置
   - 3D 对象创建
   - 材质和光照

2. **动画和交互**
   - useFrame 钩子
   - 相机控制
   - 实时参数调整

3. **状态管理模式**
   - Zustand 的使用
   - 状态持久化
   - 组件间通信

4. **现代 React 开发**
   - 函数组件和 Hooks
   - TypeScript 类型安全
   - 组件化架构

## 🌟 扩展建议

您可以基于此项目扩展：

- 添加更多 3D 模型和动画
- 实现后期处理效果
- 集成物理引擎
- 添加音效和粒子系统
- 实现 VR/AR 支持

## 📝 许可证

MIT License

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

---

*这个项目为学习 React Three Fiber 和现代前端 3D 开发提供了一个完整的参考示例。*