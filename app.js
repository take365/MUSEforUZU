const KEY = 'muse-for-uzu-state-v1';
const uid = (p='id') => `${p}-${Math.random().toString(36).slice(2,8)}`;
const sample = {
  title:'勇者一行と聖泉の街', subtitle:'MUSE for UZU scenario blueprint', seedVersion:2, updatedAt:'',
  characters:[
    {id:'c1',name:'勇者',side:'住民側',role:'個別HO・役割は未確定',secret:'未確定',ability:'未確定'},
    {id:'c2',name:'戦士',side:'教会側',role:'個別HO・役割は未確定',secret:'未確定',ability:'未確定'},
    {id:'c3',name:'僧侶',side:'教会側',role:'個別HO・役割は未確定',secret:'未確定',ability:'未確定'},
    {id:'c4',name:'魔法使い',side:'住民側',role:'個別HO・役割は未確定',secret:'未確定',ability:'未確定'}
  ],
  phases:[
    {id:'p1',name:'プロローグ',type:'確定',time:'未定',description:'街と水源の問題、勇者一行が関わる状況を提示する。'},
    {id:'p2',name:'HO確認',type:'確定',time:'未定',description:'各人の基本設定・立場を確認する。'},
    {id:'p3',name:'2:2の聞き込み',type:'確定',time:'未定',description:'陣営ごとに別々の情報・目標を得て、適性者アクションを体験する。'},
    {id:'p4',name:'再集合',type:'確定',time:'未定',description:'情報交換・交渉。陣営をまたぐ手がかり共有の機会。'},
    {id:'p5',name:'調査',type:'確定',time:'未定',description:'調査先を選び、追加情報や解決の可能性を探る。'},
    {id:'p6',name:'再集合',type:'確定',time:'未定',description:'調査結果や秘密を持ち寄り、最終判断に向けて話し合う。'},
    {id:'p7',name:'最終判断',type:'確定',time:'未定',description:'得た情報・開放状況を踏まえて解決策を選び、ENDへ進む。'}
  ],
  clues:[
    {id:'k1',name:'手がかり1',kind:'確定：チュートリアル',owner:'教会側',phase:'2:2の聞き込み',visibility:'教会側',importance:1,description:'教会側が発見し、教会側の相方へ渡す。具体物・本文・担当適性者は未確定。'},
    {id:'k2',name:'手がかり2',kind:'確定：相手共有',owner:'教会側',phase:'2:2の聞き込み',visibility:'教会側',importance:3,description:'住民側の適性者へ渡す。サブ目標に関わり、渡しづらい。具体物と開放情報は未確定。'},
    {id:'k3',name:'手がかり3',kind:'確定：チュートリアル',owner:'住民側',phase:'2:2の聞き込み',visibility:'住民側',importance:1,description:'住民側が発見し、住民側の相方へ渡す。具体物・本文・担当適性者は未確定。'},
    {id:'k4',name:'手がかり4',kind:'確定：相手共有',owner:'住民側',phase:'2:2の聞き込み',visibility:'住民側',importance:3,description:'教会側の適性者へ渡す。サブ目標に関わり、渡しづらい。子供の適性発見ルートの候補。'},
    {id:'k5',name:'候補：水瓶の浄化痕',kind:'有力案',owner:'住民側',phase:'調査',visibility:'未定',importance:3,description:'魔石だけでは説明できない人の浄化魔法の痕跡。手がかり4の具体物候補。'},
    {id:'k6',name:'候補：子供の実演',kind:'有力案',owner:'調査先',phase:'調査',visibility:'未定',importance:3,description:'子供が弱いながら自力で水を浄化する。手がかり4を渡さない場合の代替調査ルート候補。'},
    {id:'k7',name:'推論：人材と資源の接続',kind:'有力案',owner:'全員',phase:'最終判断',visibility:'全員',importance:5,description:'子供の保護・教育と、浄藻の回収・浄化・加工を接続し、輸入魔石への依存を減らす。'}
  ],
  logic:[
    {id:'l1',when:'手がかり1を教会側の相方へ渡す',condition:'教会側内の共有',then:'指定アクションで追加情報を開放',result:'チュートリアル'},
    {id:'l2',when:'手がかり2を住民側の適性者へ渡す',condition:'陣営をまたぐ共有',then:'指定アクションで追加情報を開放',result:'サブ目標に関わる'},
    {id:'l3',when:'手がかり3を住民側の相方へ渡す',condition:'住民側内の共有',then:'指定アクションで追加情報を開放',result:'チュートリアル'},
    {id:'l4',when:'手がかり4を教会側の適性者へ渡す',condition:'陣営をまたぐ共有',then:'子供たちの浄化適性を発見する候補',result:'人材解決をアンロック'},
    {id:'l5',when:'調査で子供の実演などを確認する',condition:'代替調査ルート',then:'子供たちの浄化適性を発見する候補',result:'人材解決をアンロック'}
  ],
  missions:[
    {id:'m1',name:'人材の解決：浄化師育成',points:'未定',condition:'子供の浄化適性を発見する',description:'教会が子供たちを保護・教育し、浄化師育成制度を作る。'},
    {id:'m2',name:'資源の解決：浄藻の管理・資源化',points:'未定',condition:'事件②の因果と資源化可能性を証明する',description:'回収・浄化・加工により水質改善と魔石代替資源化を目指す。'},
    {id:'m3',name:'相互理解・合意',points:'未定',condition:'両陣営の弱みと解決方向を共有する',description:'分断・誤解・エコーチェンバーを越えて合意形成する。'}
  ],
  endings:[
    {id:'e1',name:'妥協END',points:'8:8',condition:'未確定',description:'双方が譲歩して合意する。'},
    {id:'e2',name:'教会勝利END',points:'10:0',condition:'未確定',description:'教会側の目的を優先する。'},
    {id:'e3',name:'住民勝利END',points:'0:10',condition:'未確定',description:'住民側の目的を優先する。'},
    {id:'e4',name:'非協力END',points:'2:2',condition:'未確定',description:'双方が守りたい事情を優先し、主要課題の解決に至らない。'},
    {id:'e5',name:'真相END',points:'12:12',condition:'未確定',description:'人材・資源の可能性を見いだし、根本解決へ進む。'}
  ],
  links:[{from:'k4',to:'k7',label:'適性ルート'},{from:'k5',to:'k7',label:'候補証拠'},{from:'k6',to:'k7',label:'代替調査'}]
};
let state = JSON.parse(localStorage.getItem(KEY) || 'null') || structuredClone(sample);
if (state.title === sample.title && (state.seedVersion || 1) < sample.seedVersion) state = structuredClone(sample);
let view = 'overview';
const esc = x => String(x ?? '').replace(/[&<>"']/g, m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));
const save = quiet => { state.updatedAt = new Date().toISOString(); localStorage.setItem(KEY, JSON.stringify(state)); if(!quiet) toast('ローカルに保存しました'); };
const toast = msg => { const el=document.querySelector('#toast'); el.textContent=msg; el.classList.add('show'); setTimeout(()=>el.classList.remove('show'),1800); };
const count = k => state[k]?.length || 0;
const head = (eyebrow,title,desc,actions='') => `<div class="page-head"><div><div class="eyebrow">${eyebrow}</div><h1>${title}</h1><p>${desc}</p></div><div class="toolbar">${actions}</div></div>`;
const addBtn = (label, action='add') => `<button data-action="${action}">${label}</button>`;
function render(){
  document.querySelector('#scenarioTitle').value=state.title;
  document.querySelectorAll('.nav-item').forEach(x=>x.classList.toggle('active',x.dataset.view===view));
  document.querySelector('#main').innerHTML = views[view]();
}
const cardList = (key, fields) => `<div class="node-list">${state[key].map(item=>`<div class="node-row"><div><strong>${esc(item.name)}</strong><small>${fields(item)}</small></div><button class="icon-button" data-edit="${key}:${item.id}">編集</button></div>`).join('')}</div>`;
const views = {
 overview:()=> head('MUSE WORKSPACE','シナリオ設計ワークスペース','UZU向けの進行・情報・推理・条件をひとつの構造として設計します。',addBtn('新しい要素','quickAdd')) + `<div class="hint"><strong>設計書との同期状態</strong>　確定事項は初期データへ反映済みです。有力案は「有力案」、未確定のHO・具体物・判定条件は「未定」として残しています。</div><div class="grid grid-4">${[['phases','シーン'],['characters','キャラクター'],['clues','手がかり'],['logic','条件・アクション']].map(([k,l])=>`<div class="card"><div class="metric-label">${l}</div><div class="metric">${count(k)}</div><div class="progress"><span style="width:${Math.min(100,count(k)*12)}%"></span></div></div>`).join('')}</div><div class="grid grid-2"><div><div class="section-title"><h2>シナリオの流れ</h2><small>${count('phases')} scenes</small></div><div class="card flow">${state.phases.map((p,i)=>`<div class="flow-node"><div class="card"><span class="tag purple">${esc(p.type)}</span><strong>${esc(p.name)}</strong><p>${esc(p.description)}</p><small>${esc(p.time)}</small></div></div>${i<state.phases.length-1?'<div class="flow-connector">→</div>':''}`).join('')}</div></div><div><div class="section-title"><h2>真相への設計</h2><small>Evidence → Inference → Truth</small></div><div class="card"><div class="stat-line"><span>確定した手がかり枠</span><strong>4</strong></div><div class="stat-line"><span>有力な適性発見ルート</span><strong>2</strong></div><div class="stat-line"><span>真相END</span><strong>${state.endings.find(x=>x.id==='e5')?.points||'12:12'}点</strong></div><div class="hint">両陣営の弱みを共有し、人材と資源の解決を接続する方向は有力案です。最終判定条件は未確定です。</div></div></div></div>` ,
 flow:()=> head('FLOW','FLOW / シーン構成','ゲーム進行、探索地点、分岐の順序を設計します。',addBtn('シーン追加','add:phases')) + `<div class="card flow">${state.phases.map((p,i)=>`<div class="flow-node"><div class="card"><span class="tag ${i%2?'orange':'teal'}">${esc(p.type)}</span><h3>${esc(p.name)}</h3><p>${esc(p.description)}</p><small>${esc(p.time)}</small><br><button class="icon-button" data-edit="phases:${p.id}">編集</button></div></div>${i<state.phases.length-1?'<div class="flow-connector">→</div>':''}`).join('')}</div><div class="section-title"><h2>UZU向けの実装メモ</h2></div><div class="card grid grid-3"><div><strong>導入</strong><p>軽いHO確認 → 2:2聞き込み</p></div><div><strong>調査</strong><p>適性者アクションで別ルートを開く</p></div><div><strong>結論</strong><p>投票・最終判断・エンディング分岐</p></div></div>`,
 characters:()=> head('ACTORS','Characters / 登場人物','役割、陣営、秘密、適性アクションを整理します。',addBtn('キャラクター追加','add:characters')) + `<div class="grid grid-2">${state.characters.map(c=>`<div class="card"><div><span class="tag ${c.side==='教会側'?'purple':'teal'}">${esc(c.side)}</span><h2>${esc(c.name)}</h2><p>${esc(c.role)}</p></div><div class="stat-line"><span>秘密</span><span>${esc(c.secret)}</span></div><div class="stat-line"><span>適性アクション</span><span>${esc(c.ability)}</span></div><button class="icon-button" data-edit="characters:${c.id}">編集</button></div>`).join('')}</div>`,
 clues:()=> head('INFORMATION','Clues / 情報設計','誰が、いつ、何を知るか。公開条件と重要度を管理します。',addBtn('手がかり追加','add:clues')) + `<div class="card matrix"><table class="table"><thead><tr><th>情報</th><th>種別</th><th>所有・発見</th><th>フェーズ</th><th>公開範囲</th><th>重要度</th><th></th></tr></thead><tbody>${state.clues.map(c=>`<tr><td><strong>${esc(c.name)}</strong><br><small>${esc(c.description)}</small></td><td><span class="tag ${c.kind==='Inference'?'purple':'teal'}">${esc(c.kind)}</span></td><td>${esc(c.owner)}</td><td>${esc(c.phase)}</td><td>${esc(c.visibility)}</td><td>${'★'.repeat(c.importance||1)}</td><td><button class="icon-button" data-edit="clues:${c.id}">編集</button></td></tr>`).join('')}</tbody></table></div><div class="section-title"><h2>Knowledge Matrix</h2><small>フェーズ時点の情報所有を確認</small></div><div class="card matrix"><table class="table"><thead><tr><th>情報</th>${state.characters.map(c=>`<th>${esc(c.name)}</th>`).join('')}</tr></thead><tbody>${state.clues.slice(0,6).map((c,i)=>`<tr><td>${esc(c.name)}</td>${state.characters.map((_,j)=>`<td>${(i+j)%3===0?'<span class="check">●</span>':(i+j)%3===1?'<span class="warn">△</span>':'—'}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`,
 logic:()=> head('SYSTEM','Logic / 条件・アクション','条件、トリガー、結果、アンロックの因果関係を設計します。',addBtn('ロジック追加','add:logic')) + `<div class="hint">手がかり1〜4の受け渡し構造は確定です。適性者・指定アクション・開放情報の具体化は未確定です。</div>` + cardList('logic',x=>`When: ${esc(x.when)}　→　${esc(x.then)}　(${esc(x.result)})`) + `<div class="section-title"><h2>ミッションとエンディング</h2></div><div class="grid grid-2"><div class="card"><h3>解決の方向</h3>${state.missions.map(x=>`<div class="stat-line"><span>${esc(x.name)}</span><strong>${esc(x.points)}</strong></div>`).join('')}<button class="icon-button" data-action="add:missions">追加</button></div><div class="card"><h3>Ending（教会側：住民側）</h3>${state.endings.map(x=>`<div class="stat-line"><span>${esc(x.name)}</span><strong>${esc(x.points)}</strong></div>`).join('')}<button class="icon-button" data-action="add:endings">追加</button></div></div>`,
 mystery:()=> head('REASONING','Mystery Graph / 推理構造','証拠から推論を経て、真相・解決策へ到達する道筋を設計します。',addBtn('推理ノード追加','add:clues')) + `<div class="card"><div class="flow">${state.clues.filter(x=>x.kind==='Evidence').map((c,i)=>`<div class="flow-node"><div class="card"><span class="tag teal">Evidence</span><strong>${esc(c.name)}</strong><p>${esc(c.description)}</p></div></div>${i<state.clues.filter(x=>x.kind==='Evidence').length-1?'<div class="flow-connector">＋</div>':''}`).join('')}</div><div class="hint">推論ノードを追加し、複数の証拠から同じ結論へ到達できる「一本道ではない」構造を目指します。</div><div class="flow"><div class="flow-node"><div class="card"><span class="tag purple">Inference</span><h3>人材と資源の接続</h3><p>子供たちの浄化適性と浄藻の回収・処理を接続する。</p></div></div><div class="flow-connector">→</div><div class="flow-node"><div class="card"><span class="tag orange">Truth</span><h3>聖泉の再設計</h3><p>浄化師育成制度と魔石代替資源を共同運用する。</p></div></div></div></div>`,
 balance:()=> head('BALANCE','Balance / 配点・体験','キャラクターごとの情報量、出番、ミッション、エンディング配点を確認します。') + `<div class="grid grid-2"><div class="card"><h2>キャラクター別</h2>${state.characters.map(c=>`<div class="stat-line"><span><strong>${esc(c.name)}</strong><br><small>${esc(c.side)}</small></span><span>HO・秘密・適性：未確定</span></div>`).join('')}<div class="hint">情報量・行動数の数値化は、HOと手がかり配置を決めた後に行う想定です。</div></div><div class="card"><h2>エンディング配点</h2>${state.endings.map(e=>`<div class="stat-line"><span>${esc(e.name)}</span><strong>${esc(e.points)}</strong></div>`).join('')}<div class="progress" style="margin-top:17px"><span style="width:100%"></span></div><p class="metric-label">表記は 教会側：住民側。12点の計算内訳は未確定です。</p></div></div>`,
 output:()=> head('EXPORT','UZU Blueprint','UZUへ登録せず、設計結果を確認・共有するためのローカル出力です。',`<button data-action="copyBlueprint">コピー</button><button data-action="downloadMd" class="alt">Markdown書出し</button>`) + `<div class="blueprint">${esc(blueprint())}</div>`
};
function blueprint(){return `# ${state.title}\n\n> MUSE for UZU local blueprint\n> UZUへの登録・公開は未実施\n\n## シーン\n${state.phases.map((x,i)=>`${i+1}. ${x.name}（${x.type} / ${x.time}）\n   ${x.description}`).join('\n')}\n\n## キャラクター\n${state.characters.map(x=>`- ${x.name}［${x.side}］：${x.role}\n  秘密：${x.secret}\n  適性：${x.ability}`).join('\n')}\n\n## 手がかり\n${state.clues.map(x=>`- ${x.name}［${x.kind}］ / ${x.phase} / ${x.visibility}\n  ${x.description}`).join('\n')}\n\n## 条件・アクション\n${state.logic.map(x=>`- ${x.when}\n  条件：${x.condition} → 結果：${x.then} [${x.result}]`).join('\n')}\n\n## ミッション・エンディング\n${state.missions.map(x=>`- Mission: ${x.name}（${x.points}点） / ${x.condition}`).join('\n')}\n${state.endings.map(x=>`- Ending: ${x.name}（${x.points}点） / ${x.condition}`).join('\n')}`}
function formFor(key,item={}){const configs={characters:[['name','名前'],['side','陣営'],['role','役割'],['secret','秘密'],['ability','適性アクション']],phases:[['name','シーン名'],['type','種別'],['time','時間'],['description','説明']],clues:[['name','名前'],['kind','種別'],['owner','所有・発見者'],['phase','フェーズ'],['visibility','公開範囲'],['importance','重要度'],['description','説明']],logic:[['when','発火条件'],['condition','条件式'],['then','実行結果'],['result','アンロック先']],missions:[['name','ミッション名'],['points','配点'],['condition','解禁条件'],['description','説明']],endings:[['name','エンディング名'],['points','配点'],['condition','条件'],['description','説明']]}; return `<div class="card"><form id="editForm" data-key="${key}" data-id="${item.id||''}"><div class="form-grid">${configs[key].map(([k,l])=>`<div class="field ${k==='description'||k==='secret'?'full':''}"><label>${l}</label>${k==='description'||k==='secret'?`<textarea name="${k}">${esc(item[k]||'')}</textarea>`:`<input name="${k}" value="${esc(item[k]??'')}" ${k==='points'||k==='importance'?'type="number"':''}>`}</div>`).join('')}</div><div class="toolbar" style="margin-top:15px"><button>保存</button><button type="button" class="alt" data-action="cancelEdit">キャンセル</button>${item.id?`<button type="button" class="alt danger" data-action="delete:${key}:${item.id}">削除</button>`:''}</div></form></div>`}
function openEditor(key,id){const item=id?state[key].find(x=>x.id===id):{}; document.querySelector('#main').insertAdjacentHTML('afterbegin',`<div id="editor" class="modal"><div class="page-head"><div><div class="eyebrow">EDIT</div><h1>${id?'編集':'追加'}</h1></div></div>${formFor(key,item)}</div>`); document.querySelector('#editor').scrollIntoView({behavior:'smooth'});}
function add(key){openEditor(key);}
document.querySelector('#nav').addEventListener('click',e=>{const b=e.target.closest('[data-view]');if(b){view=b.dataset.view;render();}});
document.querySelector('#main').addEventListener('click',e=>{const edit=e.target.closest('[data-edit]');if(edit){const [k,id]=edit.dataset.edit.split(':');openEditor(k,id);return}const a=e.target.closest('[data-action]')?.dataset.action;if(!a)return;if(a==='quickAdd'){add('clues');return}if(a.startsWith('add:')){add(a.split(':')[1]);return}if(a==='cancelEdit'){document.querySelector('#editor')?.remove();return}if(a.startsWith('delete:')){const [,k,id]=a.split(':');state[k]=state[k].filter(x=>x.id!==id);save();render();return}if(a==='copyBlueprint'){navigator.clipboard?.writeText(blueprint());toast('Blueprintをコピーしました');return}if(a==='downloadMd'){download('muse-blueprint.md',blueprint(),'text/markdown');return}});
document.querySelector('#main').addEventListener('submit',e=>{if(e.target.id!=='editForm')return;e.preventDefault();const f=e.target,k=f.dataset.key,data=Object.fromEntries(new FormData(f));if(data.points)data.points=Number(data.points);if(data.importance)data.importance=Number(data.importance);if(f.dataset.id){Object.assign(state[k].find(x=>x.id===f.dataset.id),data)}else{data.id=uid(k.slice(0,-1));state[k].push(data)}save();render();toast('変更を保存しました');});
document.querySelector('#saveBtn').addEventListener('click',()=>save());
document.querySelector('#exportBtn').addEventListener('click',()=>download('muse-for-uzu.json',JSON.stringify(state,null,2),'application/json'));
document.querySelector('#importInput').addEventListener('change',async e=>{const file=e.target.files[0];if(!file)return;try{state=JSON.parse(await file.text());save(true);render();toast('JSONを読み込みました')}catch{toast('JSONの読み込みに失敗しました')}});
document.querySelector('#scenarioTitle').addEventListener('change',e=>{state.title=e.target.value;save(true)});
document.querySelector('#resetBtn').addEventListener('click',()=>{if(confirm('サンプルデータに戻しますか？')){state=structuredClone(sample);save(true);render();toast('サンプルに戻しました')}});
function download(name,body,type){const a=document.createElement('a');a.href=URL.createObjectURL(new Blob([body],{type}));a.download=name;a.click();URL.revokeObjectURL(a.href)}
render();
