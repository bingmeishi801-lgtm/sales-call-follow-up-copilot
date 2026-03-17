# P2 Evaluation Notes

## 1) 导出功能评估（Export）

### 当前状态
- 已有 `Copy`（单模块）
- 已有 `Copy all`（全量拼接文本）

### 建议路线
1. **V1（低成本）**：保留现有 copy 方案 + 增强格式
   - `Copy all` 增加段落分隔与标题标准化
   - 加一个轻提示：`Copied to clipboard`

2. **V1.1（中成本）**：增加本地下载
   - `Export .txt`
   - `Export .md`

3. **V2（高价值）**：按场景导出
   - `Export email`（仅邮件正文）
   - `Export CRM note`（结构化）

### 结论
- 短期不做重导出系统，先维持 `Copy` + `Copy all`
- 下阶段优先考虑 `.md/.txt` 下载按钮

---

## 2) 集成方向评估（Integrations）

### 候选方向
- HubSpot
- Notion
- Slack

### 优先级建议
1. **HubSpot（最高）**
   - 与当前产品场景最贴合（CRM note）
   - 用户价值直接可见

2. **Notion（中）**
   - 适合 founder/小团队文档沉淀
   - 实现复杂度中等

3. **Slack（中低）**
   - 适合通知和协作，但不是最核心闭环

### 落地建议
- 先做 API 级别预留（统一 export payload）
- 首个集成优先 HubSpot
- Notion/Slack 放后续迭代

---

## 3) 工程侧补充
- 已建立 `src/types/` 统一类型目录
- 已在 `/api/generate` 增加 LLM 超时处理（AbortController + timeout）
- 建议新增环境变量：`OPENAI_TIMEOUT_MS`（默认 25000ms）
