
# Todo API エンドポイント仕様書

この文書は、`todo-api` プロジェクトで提供される API のエンドポイント仕様をまとめたものです。

---

## Base URL
---## Base URLその他の行を表示する
http://localhost:3000

---

## GET /todos

### 説明
登録されている TODO 一覧を取得する。

### レスポンス例
```json
[
  {
    "id": 1,
    "title": "朝会の準備",
    "completed": false,
    "dueDate": "2026-02-22T00:00:00.000Z"
  }
]


POST /todos
説明
新しい TODO を追加する。
リクエスト Body
JSON{  "title": "請求書作成",  "dueDate": "2026-02-25T00:00:00.000Z"}その他の行を表示する
備考

title は必須
dueDate は任意


DELETE /todos/:id
説明
指定 ID の TODO を削除する API。
成功レスポンス
JSON{ "status": "ok" }その他の行を表示する
エラーレスポンス

404: 該当 ID がない場合


今後の拡張予定

フィルタリング機能（完了/未完了）
ソート機能（期限順）


⬆⬆⬆ **ここまで全部コピー** ⬆⬆⬆

---

# ✅ コピペする手順（再確認）
1. **Create a new file** を押す  
2. ファイル名に  

docs/api-endpoints.md
3. 上の内容を全部貼り付ける  
4. 下の **Commit new file** を押す

---
