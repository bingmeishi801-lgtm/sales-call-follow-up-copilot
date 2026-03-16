# Sales Call Follow-up Copilot

## 开发任务拆解清单（Task List）

---

## 项目目标
在最短时间内做出一个可用 MVP：

- 用户粘贴 sales call transcript
- 选择 call type
- 点击 Generate
- 输出 6 个结果模块
- 支持复制结果
- 有一个可转化的 landing page

---

## A. 项目初始化

### A1. 技术栈初始化
- [ ] 初始化 Next.js 项目
- [ ] 配置 Tailwind CSS
- [ ] 配置基础目录结构
- [ ] 配置环境变量 `.env.local`
- [ ] 接入部署环境（Vercel）

### A2. 基础工程配置
- [ ] ESLint / Prettier 基础配置
- [ ] 定义全局样式
- [ ] 定义 UI 组件目录
- [ ] 定义 API 调用目录
- [ ] 定义 types 目录

---

## B. 信息架构与路由

### B1. 页面路由
- [ ] 创建首页 `/`
- [ ] 创建产品页/应用页 `/app`

### B2. 页面结构
- [ ] 首页结构骨架
- [ ] App 页结构骨架
- [ ] Header / CTA 统一样式
- [ ] Footer 基础内容

---

## C. Landing Page 开发

### C1. Hero 区
- [ ] 主标题
- [ ] 副标题
- [ ] CTA 按钮
- [ ] Demo 入口按钮

### C2. Problem 区
- [ ] 写 sales call 后整理痛点
- [ ] 用 3–4 个 bullet 展示问题

### C3. Output Preview 区
- [ ] 展示 6 个输出模块示例
- [ ] 重点突出：
  - Follow-up Email
  - CRM Note
  - Next Steps

### C4. How It Works 区
- [ ] Step 1: Paste transcript
- [ ] Step 2: Generate outputs
- [ ] Step 3: Copy and use

### C5. Target User 区
- [ ] Founder-led sales
- [ ] SDR / AE
- [ ] Agency / freelancer

### C6. CTA 区
- [ ] “Try the demo”
- [ ] “Generate from transcript”

### C7. SEO 基础
- [ ] 首页 title
- [ ] 首页 meta description
- [ ] OG title / description
- [ ] 基础 schema（可选）

---

## D. App 页面开发

### D1. 输入区域
- [ ] Transcript 文本输入框
- [ ] Call type 下拉框
- [ ] Generate 按钮
- [ ] 输入校验提示

### D2. 输出区域
- [ ] Summary 卡片
- [ ] Pain Points 卡片
- [ ] Objections 卡片
- [ ] Next Steps 卡片
- [ ] Follow-up Email 卡片
- [ ] CRM Note 卡片

### D3. 交互状态
- [ ] 默认空状态
- [ ] Loading 状态
- [ ] 成功状态
- [ ] 错误状态

### D4. Copy 功能
- [ ] 每个模块支持 copy
- [ ] Copy 成功 toast / 提示
- [ ] 复制内容格式优化

---

## E. AI 能力与后端接口

### E1. API Route
- [ ] 创建 `/api/generate`
- [ ] 接收 transcript + callType
- [ ] 做参数校验
- [ ] 调用 LLM 接口
- [ ] 返回结构化 JSON

### E2. Prompt 设计
- [ ] 设计 system prompt
- [ ] 设计 output schema
- [ ] 约束 6 个模块输出
- [ ] 约束不得编造
- [ ] 区分不同 call type

### E3. 结果格式
- [ ] 统一返回 JSON：
  - summary
  - pain_points
  - objections
  - next_steps
  - follow_up_email
  - crm_note

### E4. 错误处理
- [ ] LLM 超时处理
- [ ] JSON 解析失败处理
- [ ] 空结果处理
- [ ] 前端错误提示

---

## F. 数据结构与 Types

### F1. Type 定义
- [ ] 定义 `CallType`
- [ ] 定义 `GenerateRequest`
- [ ] 定义 `GenerateResponse`
- [ ] 定义 `OutputSection`

### F2. 前后端字段统一
- [ ] 确认字段命名统一
- [ ] 确认数组字段展示逻辑
- [ ] 确认空值 fallback

---

## G. 可用性与体验优化

### G1. 输入体验
- [ ] 设置 placeholder transcript
- [ ] 限制最小输入长度
- [ ] 保留用户输入内容，失败不清空

### G2. 输出体验
- [ ] 卡片层级清楚
- [ ] 可读性优化
- [ ] Email 区块支持良好排版
- [ ] CRM Note 结构清晰

### G3. Loading 体验
- [ ] 按钮 loading
- [ ] 结果区 skeleton（可选）
- [ ] 明确“正在生成”的提示

---

## H. 埋点与基础数据

### H1. 埋点事件
- [ ] `page_view`
- [ ] `generate_clicked`
- [ ] `generate_success`
- [ ] `generate_failed`
- [ ] `copy_summary`
- [ ] `copy_pain_points`
- [ ] `copy_objections`
- [ ] `copy_next_steps`
- [ ] `copy_follow_up_email`
- [ ] `copy_crm_note`

### H2. 最小方案
- [ ] 先接最简单 analytics（如 Plausible / PostHog / GA）

---

## I. 部署与验证

### I1. 部署
- [ ] 配置生产环境变量
- [ ] 部署到 Vercel
- [ ] 检查 API 可用性
- [ ] 检查移动端基础兼容

### I2. 验证
- [ ] 用 3 份不同 transcript 测试
- [ ] 测试 discovery call
- [ ] 测试 demo call
- [ ] 测试 follow-up call
- [ ] 测试 copy 功能
- [ ] 测试错误场景

---

## J. MVP 上线前检查清单

- [ ] 首页文案完整
- [ ] `/app` 可正常使用
- [ ] 生成结果稳定
- [ ] 复制功能正常
- [ ] meta 信息完整
- [ ] 移动端不崩
- [ ] 无明显报错
- [ ] 有基本埋点

---

## 推荐开发优先级

### P0：必须先做
- [ ] 首页
- [ ] `/app` 页面
- [ ] transcript 输入
- [ ] call type 选择
- [ ] generate API
- [ ] 6 个输出模块
- [ ] copy 功能
- [ ] 基础部署

### P1：第一版上线前尽量做
- [ ] loading 状态优化
- [ ] 错误处理优化
- [ ] 埋点
- [ ] SEO meta

### P2：后续迭代
- [ ] 历史记录
- [ ] 登录
- [ ] 导出
- [ ] 模板页
- [ ] 集成
