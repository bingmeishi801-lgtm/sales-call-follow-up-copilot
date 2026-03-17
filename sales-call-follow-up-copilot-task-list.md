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

## 当前进度总览（三栏版）

### 已完成
- 项目初始化：Next.js / Tailwind / `.env.local` / Vercel 部署已完成
- 页面与路由：`/` 首页、`/app` 应用页、基础 Header / Footer 已完成
- Landing Page 基础：Hero、How It Works、基础 CTA、基础 SEO meta 已完成
- App 主流程：transcript 输入、call type 选择、Generate、6 个输出模块、copy 功能已完成
- AI 能力：`/api/generate`、system prompt、结构化 JSON 输出、基础错误处理已完成
- 体验优化：placeholder、最小长度校验、loading、空状态、错误提示已完成
- 埋点基础：`page_view`、`generate_clicked`、`generate_success`、`generate_failed`、`copy_follow_up_email`、`copy_crm_note` 已完成
- 部署验证：生产环境变量、Vercel 部署、API 可用性检查已完成
- 上线主链：Google 登录、history 保存与刷新恢复、usage 扣减已跑通
- 后续迭代中已提前完成：历史记录、登录、模板页

### 进行中
- 测试覆盖还可继续加严（更多真实业务 transcript + 边界输入）
- 集成功能仍未开始（建议 HubSpot 优先）
- README 和任务清单已经基本对齐，但还可以继续跟着产品演进维护

### 未开始
- 集成功能

### 下一步 TODO（按优先级）

#### P0：先补闭环质量
- [x] 系统测试 demo call
- [x] 系统测试 follow-up call
- [x] 用至少 3 份不同 transcript 做回归测试

#### P1：补内容与结构
- [x] 补 Landing Page 的 Problem 区
- [x] 补 Landing Page 的 Target User 区
- [x] 补完整的 6 模块 Output Preview 示例
- [x] 补 CTA 文案“Generate from transcript”或等价入口
- [x] 补首页基础 schema

#### P2：补工程与后续能力
- [x] 建 `types` 目录并抽离公共类型
- [x] 明确 `GenerateRequest` / `OutputSection` 等类型
- [x] 补 LLM 超时处理
- [x] 评估导出功能（copy all / markdown / txt）
- [x] 实现导出功能（.txt / .md）
- [x] 评估后续集成方向（CRM / Notion / Slack）

---

## A. 项目初始化

### A1. 技术栈初始化
- [x] 初始化 Next.js 项目
- [x] 配置 Tailwind CSS
- [x] 配置基础目录结构
- [x] 配置环境变量 `.env.local`
- [x] 接入部署环境（Vercel）

### A2. 基础工程配置
- [x] ESLint / Prettier 基础配置
- [x] 定义全局样式
- [x] 定义 UI 组件目录
- [x] 定义 API 调用目录
- [x] 定义 types 目录

---

## B. 信息架构与路由

### B1. 页面路由
- [x] 创建首页 `/`
- [x] 创建产品页/应用页 `/app`

### B2. 页面结构
- [x] 首页结构骨架
- [x] App 页结构骨架
- [x] Header / CTA 统一样式
- [x] Footer 基础内容

---

## C. Landing Page 开发

### C1. Hero 区
- [x] 主标题
- [x] 副标题
- [x] CTA 按钮
- [x] Demo 入口按钮

### C2. Problem 区
- [x] 写 sales call 后整理痛点
- [x] 用 3–4 个 bullet 展示问题

### C3. Output Preview 区
- [x] 展示 6 个输出模块示例
- [x] 重点突出：
  - Follow-up Email
  - CRM Note
  - Next Steps

### C4. How It Works 区
- [x] Step 1: Paste transcript
- [x] Step 2: Generate outputs
- [x] Step 3: Copy and use

### C5. Target User 区
- [x] Founder-led sales
- [x] SDR / AE
- [x] Agency / freelancer

### C6. CTA 区
- [x] “Try the demo”
- [x] “Generate from transcript”

### C7. SEO 基础
- [x] 首页 title
- [x] 首页 meta description
- [x] OG title / description
- [x] 基础 schema（可选）

---

## D. App 页面开发

### D1. 输入区域
- [x] Transcript 文本输入框
- [x] Call type 下拉框
- [x] Generate 按钮
- [x] 输入校验提示

### D2. 输出区域
- [x] Summary 卡片
- [x] Pain Points 卡片
- [x] Objections 卡片
- [x] Next Steps 卡片
- [x] Follow-up Email 卡片
- [x] CRM Note 卡片

### D3. 交互状态
- [x] 默认空状态
- [x] Loading 状态
- [x] 成功状态
- [x] 错误状态

### D4. Copy 功能
- [x] 每个模块支持 copy
- [x] Copy 成功 toast / 提示
- [x] 复制内容格式优化

---

## E. AI 能力与后端接口

### E1. API Route
- [x] 创建 `/api/generate`
- [x] 接收 transcript + callType
- [x] 做参数校验
- [x] 调用 LLM 接口
- [x] 返回结构化 JSON

### E2. Prompt 设计
- [x] 设计 system prompt
- [x] 设计 output schema
- [x] 约束 6 个模块输出
- [x] 约束不得编造
- [x] 区分不同 call type

### E3. 结果格式
- [x] 统一返回 JSON：
  - summary
  - pain_points
  - objections
  - next_steps
  - follow_up_email
  - crm_note

### E4. 错误处理
- [x] LLM 超时处理
- [x] JSON 解析失败处理
- [x] 空结果处理
- [x] 前端错误提示

---

## F. 数据结构与 Types

### F1. Type 定义
- [x] 定义 `CallType`
- [x] 定义 `GenerateRequest`
- [x] 定义 `GenerateResponse`
- [x] 定义 `OutputSection`

### F2. 前后端字段统一
- [x] 确认字段命名统一
- [x] 确认数组字段展示逻辑
- [x] 确认空值 fallback

---

## G. 可用性与体验优化

### G1. 输入体验
- [x] 设置 placeholder transcript
- [x] 限制最小输入长度
- [x] 保留用户输入内容，失败不清空

### G2. 输出体验
- [x] 卡片层级清楚
- [x] 可读性优化
- [x] Email 区块支持良好排版
- [x] CRM Note 结构清晰

### G3. Loading 体验
- [x] 按钮 loading
- [x] 结果区 skeleton（可选）
- [x] 明确“正在生成”的提示

---

## H. 埋点与基础数据

### H1. 埋点事件
- [x] `page_view`
- [x] `generate_clicked`
- [x] `generate_success`
- [x] `generate_failed`
- [x] `copy_summary`
- [x] `copy_pain_points`
- [x] `copy_objections`
- [x] `copy_next_steps`
- [x] `copy_follow_up_email`
- [x] `copy_crm_note`

### H2. 最小方案
- [x] 先接最简单 analytics（如 Plausible / PostHog / GA）

---

## I. 部署与验证

### I1. 部署
- [x] 配置生产环境变量
- [x] 部署到 Vercel
- [x] 检查 API 可用性
- [x] 检查移动端基础兼容

### I2. 验证
- [x] 用 3 份不同 transcript 测试
- [x] 测试 discovery call
- [x] 测试 demo call
- [x] 测试 follow-up call
- [x] 测试 copy 功能
- [x] 测试错误场景

---

## J. MVP 上线前检查清单

- [x] 首页文案完整
- [x] `/app` 可正常使用
- [x] 生成结果稳定
- [x] 复制功能正常
- [x] meta 信息完整
- [x] 移动端不崩
- [x] 无明显报错
- [x] 有基本埋点

---

## 推荐开发优先级

### P0：必须先做
- [x] 首页
- [x] `/app` 页面
- [x] transcript 输入
- [x] call type 选择
- [x] generate API
- [x] 6 个输出模块
- [x] copy 功能
- [x] 基础部署

### P1：第一版上线前尽量做
- [x] loading 状态优化
- [x] 错误处理优化
- [x] 埋点
- [x] SEO meta

### P2：后续迭代
- [x] 历史记录
- [x] 登录
- [x] 导出
- [x] 模板页
- [ ] 集成
