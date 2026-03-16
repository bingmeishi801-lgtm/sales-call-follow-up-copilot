# Sales Call Follow-up Copilot

## MVP 需求文档

---

## 1. 项目概述

### 1.1 产品名称
**Sales Call Follow-up Copilot**

### 1.2 产品定位
一个面向销售人员、Founder-led sales、小型销售团队的 AI 工具。  
用户只需粘贴一段 sales call transcript，系统即可自动生成销售跟进所需内容，包括：

- 通话总结
- 客户痛点
- objection 提炼
- next steps
- follow-up email
- CRM note

### 1.3 MVP 目标
验证以下三件事：

1. 用户是否愿意用 AI 替代手动整理 sales call 后续工作  
2. 用户是否会高频使用“follow-up + CRM note + next steps”这类输出  
3. 这个产品是否具备后续 SEO 增长和付费转化潜力

### 1.4 MVP 核心价值
**把原始销售通话内容，转化为可以直接拿来跟进客户的结果。**

重点不是“会议总结”，而是：  
**帮用户更快完成销售跟进。**

---

## 2. 目标用户

### 2.1 核心用户画像

#### 用户 A：Founder-led sales
- 创业者自己在卖产品
- 没专职销售运营
- 不想花时间整理会后内容
- 更关注效率和推进成交

#### 用户 B：小团队 SDR / AE
- 每天会打不少销售电话
- 需要快速写 follow-up
- 需要把信息同步进 CRM
- 希望输出更标准化

#### 用户 C：Agency / Freelancer
- 自己谈客户
- 会后整理和跟进都要亲自做
- 需要提升专业感和效率

### 2.2 MVP 优先服务对象
**Founder-led sales + 小团队销售**

原因：
- 痛点明显
- 付费意愿更强
- 决策链短
- 更适合冷启动验证

---

## 3. 核心问题定义

### 3.1 用户当前问题
销售通话结束后，用户通常要手动完成这些工作：

- 回忆通话内容
- 梳理客户的核心需求
- 提炼 objections
- 写 follow-up email
- 更新 CRM note
- 确认下一步动作

这些工作有几个典型问题：

1. **耗时**：每通电话后要额外花 10–20 分钟  
2. **容易拖延**：follow-up 不及时，影响转化  
3. **容易遗漏**：客户提过的关键信息记不全  
4. **输出不稳定**：不同人写法不同，质量参差不齐  
5. **重复劳动**：同一份 transcript 要改成多个版本

### 3.2 产品要解决的问题
用户需要的不是“更聪明的 AI”，而是：

**在 sales call 结束后，快速产出可直接使用的跟进内容。**

---

## 4. MVP 范围

### 4.1 MVP 必做能力
用户输入一段 sales call transcript 后，系统必须生成以下 6 个模块：

1. **Call Summary**  
2. **Key Pain Points**  
3. **Objections**  
4. **Next Steps**  
5. **Follow-up Email**  
6. **CRM Note**

### 4.2 MVP 输入范围

#### 用户输入内容
- 手动粘贴 transcript 文本

#### 用户可选项
- 选择通话类型：
  - Discovery Call
  - Demo Call
  - Follow-up Call

#### 默认行为
如果用户未选择 call type，默认使用：
- **Discovery Call**

### 4.3 MVP 不做的内容
以下内容不进入第一版：

- 音频上传与自动转写
- Zoom / Google Meet 接入
- 实时会议监听
- 自动发送邮件
- CRM 集成
- 登录 / 团队协作
- 历史记录
- 多语言支持
- 复杂权限管理
- analytics dashboard

---

## 5. 用户使用流程

### 5.1 核心流程
1. 用户进入产品页面
2. 粘贴 sales call transcript
3. 选择通话类型
4. 点击 **Generate**
5. 系统生成 6 个结果模块
6. 用户复制所需内容，用于发邮件或录入 CRM

### 5.2 核心用户动作
在 MVP 阶段，重点关注以下动作：

- 点击 Generate
- 复制 Follow-up Email
- 复制 CRM Note
- 复制 Next Steps

这三个动作最能验证产品价值。

---

## 6. 功能需求

### 6.1 输入区模块

#### 功能描述
为用户提供 transcript 输入和基础配置能力。

#### 具体要求
- 提供一个大文本输入框
- 支持粘贴长文本 transcript
- 提供 call type 下拉选择
- 提供 Generate 按钮
- 生成过程中显示 loading 状态
- 文本过短时给出错误提示

#### 输入校验规则
- transcript 不能为空
- transcript 低于最小长度时不可提交  
  建议最小长度：**300 字符**
- 超长时允许提交，但后端应做 token 控制或截断处理

#### 错误提示示例
- “Please paste a transcript first.”
- “Transcript is too short to generate useful follow-up content.”

### 6.2 输出区模块

#### 功能描述
以结构化卡片形式展示 AI 生成结果。

#### 输出模块及要求

##### 1. Call Summary
**目标：** 让用户快速理解本次通话发生了什么。  
**展示形式：**
- 1–2 段简明总结
- 不要写成冗长会议纪要

##### 2. Key Pain Points
**目标：** 提取客户问题和需求。  
**展示形式：**
- bullet list
- 每条简明扼要
- 基于 transcript 内容，不空想

##### 3. Objections
**目标：** 提取客户顾虑和潜在阻碍。  
**展示形式：**
- bullet list
- 若无明显 objection，可显示：
  - “No major objections explicitly mentioned.”

##### 4. Next Steps
**目标：** 给出明确后续动作。  
**展示形式：**
- bullet list
- 动作导向
- 尽量包含责任方和下一步建议

##### 5. Follow-up Email
**目标：** 直接给用户一封可发送的英文邮件。  
**展示形式：**
- 邮件完整正文
- 语气专业、简洁、自然
- 不要太模板化、不要太长

##### 6. CRM Note
**目标：** 给销售录入 CRM 的结构化内容。  
**展示形式：**
建议包含：
- Account / Prospect context
- Key needs
- Objections
- Next step
- Deal status hint（可选）

### 6.3 Copy 功能

#### 要求
每个输出模块都必须支持：
- **Copy 按钮**

#### 行为要求
- 点击后复制当前模块内容
- 成功时给出轻提示：
  - “Copied”
- 不打断用户操作

#### MVP 是否需要“一键复制全部”
- **非必需**
- 可以放到 V1.1

### 6.4 生成逻辑要求

#### 输出质量要求
系统生成内容必须满足：

1. **结构清晰**
2. **语言自然**
3. **贴 sales 场景**
4. **尽量忠于 transcript**
5. **避免空泛总结**
6. **输出可直接使用**

#### 明确禁止
- 凭空捏造客户信息
- 生成与 transcript 明显不符的结论
- follow-up email 过于机械
- next steps 太泛，如：
  - “Continue discussion”
  - “Follow up later”

#### 结果容错
如果 transcript 信息不足，应明确表示：
- “Insufficient detail to identify clear objections.”
而不是瞎编。

---

## 7. 页面需求

### 7.1 页面结构
MVP 建议只做两个页面：

#### 页面 A：Landing Page
目标：
- 解释产品是什么
- 说明适合谁
- 引导用户试用

#### 页面 B：App Page
目标：
- 完成 transcript 输入 → 生成结果 → 复制输出

### 7.2 Landing Page 需求

#### 页面模块
1. Hero 区
2. 产品价值说明
3. 输出结果示例
4. 使用流程说明
5. 适用人群
6. CTA 区域

#### Hero 文案方向
主标题建议：

**Generate follow-up emails, CRM notes, and next steps from sales call transcripts — in seconds.**

副标题建议：

**Built for founders and sales teams who want to follow up faster and miss less after every sales call.**

#### CTA
- Try the demo
- Start free
- Generate from transcript

### 7.3 App Page 需求

#### 页面布局建议
##### 左侧 / 上方
- Transcript 输入框
- Call type selector
- Generate 按钮

##### 右侧 / 下方
- Summary
- Pain Points
- Objections
- Next Steps
- Follow-up Email
- CRM Note

#### 页面要求
- 结构清楚
- 输入区与结果区区分明显
- Loading 状态明显
- 移动端可用，但桌面端优先

---

## 8. AI 接口与输出格式

### 8.1 推荐输出格式
建议 AI 统一返回 JSON，便于前端渲染。

示例：

```json
{
  "summary": "string",
  "pain_points": ["string", "string"],
  "objections": ["string", "string"],
  "next_steps": ["string", "string"],
  "follow_up_email": "string",
  "crm_note": "string"
}
```

### 8.2 为什么要 JSON
- 输出更稳定
- 更方便前端渲染
- 后续方便接模板、导出、存储

### 8.3 Prompt 基本要求
Prompt 中必须明确约束：

- 用户是 sales workflow 场景
- 输出要结构化
- 不得编造事实
- 邮件语气简洁专业
- 基于不同 call type 稍作调整

---

## 9. 交互与状态设计

### 9.1 状态类型

#### 默认状态
- 输入框为空
- 输出区域为空，展示提示文案

#### Loading 状态
- Generate 按钮禁用
- 显示 loading indicator
- 文案示例：
  - “Generating your follow-up assets...”

#### 成功状态
- 展示 6 个输出模块
- 模块可复制

#### 失败状态
- 展示错误提示
- 保留用户已输入 transcript，不清空

### 9.2 错误处理

#### 常见错误
- 输入为空
- 输入过短
- AI 接口异常
- 请求超时
- 返回格式错误

#### 错误提示原则
- 简洁
- 可理解
- 不暴露技术细节

示例：
- “Something went wrong. Please try again.”
- “We couldn’t generate the output this time. Please retry.”

---

## 10. 数据与埋点需求

MVP 阶段不需要复杂 analytics，但建议至少记录这些事件：

### 必埋事件
- page_view
- generate_clicked
- generate_success
- generate_failed
- copy_summary
- copy_pain_points
- copy_objections
- copy_next_steps
- copy_follow_up_email
- copy_crm_note

### 目的
验证：
- 用户有没有真正使用
- 哪类输出最有价值
- 哪一块最值得后续付费强化

---

## 11. SEO 需求

这个产品后续计划走 SEO，因此 MVP 阶段要预留内容方向。

### 11.1 产品页关键词方向
- sales follow up email generator
- sales call summary tool
- crm note generator
- ai sales follow up tool
- discovery call summary generator

### 11.2 模板页关键词方向
- sales follow up email template
- discovery call follow up template
- demo call follow up email
- crm notes template for sales

### 11.3 博客页关键词方向
- how to write a sales follow up email
- how to summarize a discovery call
- how to write CRM notes after a sales call
- sales objections examples

### 11.4 MVP SEO 最低要求
- 首页 title / description 要完整
- App 页也要有基础 meta
- 页面结构语义化
- 后续方便扩展模板页和工具页

---

## 12. 成功指标

### 12.1 产品指标
MVP 阶段优先看：

- Generate 转化率
- Generate 成功率
- Copy Follow-up Email 率
- Copy CRM Note 率
- Copy Next Steps 率

### 12.2 商业验证指标
- 邮箱留资率
- 愿意回访用户数
- 愿意继续试用用户数
- 首批愿意付费用户反馈

### 12.3 MVP 成功标准
满足以下之一即可认为方向有效：

1. 明显用户会复制 Email / CRM note / Next steps  
2. 用户反馈“这能节省我会后整理时间”  
3. 有用户愿意留下邮箱或询问付费版本

---

## 13. 非功能需求

### 13.1 性能
- 单次生成尽量控制在 **10–20 秒内**
- 页面交互流畅
- 用户输入内容不能因报错丢失

### 13.2 可用性
- 桌面端优先
- 移动端可基本访问
- UI 简洁，不堆功能

### 13.3 安全
- 不在前端暴露 API key
- 传输过程使用 HTTPS
- 如存数据，需有基础隐私提示

---

## 14. 技术建议

### 推荐技术栈
- **Next.js**
- **Tailwind CSS**
- **OpenAI-compatible API**
- **Vercel**
- **Supabase**（如果后续做登录/历史记录）

### MVP 技术原则
- 优先开发速度
- 优先结构清晰
- 优先结果可用
- 不做过度工程化

---

## 15. V1 后续扩展方向

以下功能不进 MVP，但未来可评估：

### V1.1
- 一键复制全部输出
- 保存历史记录
- 登录
- 更多 call type

### V1.2
- 上传 txt / doc 文件
- 导出 markdown / text
- 自定义模板

### V2
- HubSpot / Notion / Slack 集成
- Zoom / Google Meet 接入
- 团队空间
- 销售教练分析
- objection handling 建议

---

## 16. 最终 MVP 定义

### 一句话定义
**A lightweight AI tool that transforms raw sales call transcripts into actionable follow-up outputs for sales teams.**

### MVP 的“完成标准”
当用户第一次试用后，会觉得：

**“这玩意不是在帮我总结，而是在帮我把销售跟进这件事做完。”**
