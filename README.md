# MUSE for UZU

**Mystery Understanding & Story Engineering**

UZU STUDIO向けのシナリオを、ローカルで設計・整理するためのワークスペースです。UZUへの登録、公開、API接続は行いません。

## 起動

```powershell
cd D:\project\MUSEforUZU
node server.mjs
```

ブラウザで <http://127.0.0.1:4173> を開きます。

## できること

- FLOW：プロローグ、聞き込み、調査、最終判断などのシーン構成
- Characters：陣営、秘密、役割、適性アクション
- Clues：手がかり、所有者、配置フェーズ、公開範囲、重要度
- Knowledge Matrix：キャラクターごとの情報把握状況
- Logic：条件、トリガー、アクション、アンロック
- Mystery Graph：Evidence → Inference → Truth の推理設計
- Balance：情報量、行動、ミッション、エンディング配点の確認
- UZU Blueprint：UZU実装用のMarkdown確認・書出し
- JSON読込・JSON書出し、ブラウザ内ローカル保存

初期データには、過去に整理した「勇者一行と聖泉の街」の設計案を収録しています。画面から自由に変更できます。
