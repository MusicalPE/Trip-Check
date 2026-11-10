/* 트립첵! 미리보기 (주소 끝에 ?demo)
   로그인 없이 지어낸 가족의 여행 준비 모습을 보여 줌.
   파이어베이스 대신 이 창 안에서만 움직이고, 새로고침하면 처음으로 돌아감.
   화면 쪽(index.html)과는 app-firebase.js 와 똑같이 window.CAMP 로 주고받음
   Made by 음악적체육인 */
const C = () => window.CAMP;
const clone = o => JSON.parse(JSON.stringify(o));
const ME = { uid: "demo-me", name: "아빠", email: "" };
const MEMBERS = [ME, { uid: "demo-2", name: "엄마" }, { uid: "demo-3", name: "첫째" }, { uid: "demo-4", name: "둘째" }];
const ymd = d => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
const daysFrom = n => { const d = new Date(); d.setDate(d.getDate() + n); return d; };
let seq = 0;
const nid = () => "d" + (++seq).toString(36);

/* ---------- 지어낸 가족의 여행 ---------- */
function buildFamily(){
  const zones = defaultZones();
  const z = id => zones.find(x => x.id === id);
  z("docs").items.push({ id: nid(), t: "유니버설 스튜디오 입장권 (QR)", g: [] });
  z("kids").items.push({ id: nid(), t: "아이 여권 지갑", g: [] });

  /* 반쯤 챙긴 모습: 서류는 다, 옷 · 세면은 아직 */
  const checked = {};
  const done = { docs: 1, device: 0.7, clothes: 0.35, wash: 0.3, med: 0.6, kids: 0.5, plane: 0.4, home: 0 };
  zones.forEach(zz => {
    const r = done[zz.id] || 0, n = Math.round(zz.items.length * r);
    zz.items.slice(0, n).forEach(i => { checked[i.id] = true; });
  });

  const plan = (day, time, title, memo, cost, cur) => Object.assign({ id: nid(), day, time, title, memo }, cost ? { cost, cur: cur || "엔" } : {});
  const plans = [
    plan(1, "09:40", "인천공항 출발", "2시간 전 도착, 아이 짐 먼저 부치기"),
    plan(1, "13:30", "간사이공항 → 난바", "라피트 특급", 5000),
    plan(1, "15:00", "숙소 체크인", "짐 맡기고 바로 나가기"),
    plan(1, "18:00", "도톤보리 저녁", "오코노미야키", 6800),
    plan(2, "08:30", "유니버설 스튜디오", "입장권은 미리 산 것 (QR)"),
    plan(2, "12:30", "파크 안 점심", "", 7200),
    plan(3, "10:00", "오사카성 · 공원", "아이 자전거 빌리기", 2400),
    plan(3, "14:00", "카이유칸 수족관", "", 7400),
    plan(3, "19:00", "구로몬 시장 간식", "", 3500),
    plan(4, "10:00", "체크아웃 · 기념품", "", 6000),
    plan(4, "16:20", "간사이공항 출발", "")
  ];
  const cost = (kind, title, c, cur) => ({ id: nid(), kind, title, cost: c, cur });
  const costs = [
    cost("항공권", "왕복 4명", 1240000, "원"),
    cost("숙박", "난바 호텔 3박", 96000, "엔"),
    cost("입장권 · 투어", "유니버설 스튜디오 4명", 34800, "엔"),
    cost("통신", "eSIM 2개", 18000, "원")
  ];

  return {
    name: "여행 가는 곰돌이네",
    zones, labels: DEFAULT_LABELS.map(l => Object.assign({}, l)), plans, costs,
    trip: { start: ymd(daysFrom(9)), nights: "3", place: "일본 오사카", temp: "비행기 · 라피트", split: 4, cur: "엔",
            pinfo: { id: "", addr: "일본 오사카", url: "", lat: 34.69, lon: 135.5 } },
    memo: "아이 멀미약은 출발 30분 전에. 유니버설 가는 날은 아침 일찍!",
    f: { hide: false }, checked, back: {}
  };
}

function buildRecords(){
  const rec = (ago, nights, place, rating, temp, memo, missed, got, total, tot) =>
    ({ id: nid(), date: ymd(daysFrom(-ago)), nights: String(nights), place, rating, temp, memo, missed, got, total,
       packed: [], cost: tot ? { tot, split: 4, text: "" } : null,
       addr: "", placeUrl: "", placeId: "", saved: ymd(daysFrom(-ago + nights)) + " 21:10" });
  return [
    rec(40, 2, "강원 강릉", 4.5, "KTX", "바다 보이는 숙소 최고. 다음엔 아이 모래놀이 도구 챙기기.", ["모래놀이 도구"], 38, 39, { "원": 612000 }),
    rec(118, 3, "제주", 5, "비행기 · 렌터카", "렌터카는 미리 예약해서 편했음. 수영복을 하나 더 챙길 것.", ["수영복 · 래시가드", "멀미약"], 41, 43, { "원": 1385000 }),
    rec(230, 4, "베트남 다낭", 4, "비행기", "유심 대신 eSIM이 훨씬 편했음.", ["멀티 어댑터(돼지코)"], 52, 53, { "원": 2150000, "동": 3800000 })
  ];
}

/* ---------- 파이어베이스 대신 ---------- */
const doc = buildFamily();
let records = buildRecords();
const sortRecs = l => l.sort((a, b) => (b.date + b.saved).localeCompare(a.date + a.saved));
const pushRecords = () => C().applyRecords(clone(sortRecs(records)));
const later = v => new Promise(res => setTimeout(() => res(v), 120));
const famInfo = () => ({ id: "demo", name: doc.name, invite: "demo", members: MEMBERS.map(m => ({ uid: m.uid, name: m.name })) });
const notHere = what => { window.toast && window.toast(`미리보기에서는 ${what}를 할 수 없어요.`); return Promise.resolve(); };

const remote = {
  saveSettings: obj => { Object.assign(doc, clone(obj)); return later(); },
  check: (id, on) => { if (on) doc.checked[id] = true; else delete doc.checked[id]; return later(); },
  checkBack: (id, on) => { if (on) doc.back[id] = true; else delete doc.back[id]; return later(); },
  clearChecks: () => { doc.checked = {}; doc.back = {}; return later(); },
  clearGo: () => { doc.checked = {}; return later(); },
  clearBack: () => { doc.back = {}; return later(); },
  addRecord: rec => { records.push(Object.assign(clone(rec), { id: nid(), by: ME.uid })); return later().then(pushRecords); },
  deleteRecord: rid => { records = records.filter(r => r.id !== rid); return later().then(pushRecords); },
  updateRecord: (rid, f) => { records = records.map(r => r.id === rid ? Object.assign({}, r, clone(f)) : r); return later().then(pushRecords); }
};

window.FBAPP = {
  login: () => notHere("로그인"),
  logout: () => notHere("로그아웃"),
  leaveFamily: () => notHere("가족 공간 나가기"),
  deleteAccount: () => Promise.reject(new Error("미리보기에서는 계정을 지울 수 없어요.")),
  putShare: () => Promise.reject(new Error("미리보기에서는 공유 링크를 만들 수 없어요.")),
  getShare: () => Promise.resolve(null),
  createFamily: () => notHere("가족 공간 만들기")
};

/* ---------- 미리보기 안내 ---------- */
(function note(){
  const bar = document.createElement("div");
  bar.setAttribute("role", "note");
  bar.style.cssText = "background:#FFF4D6;color:#5C4510;font-size:13px;line-height:1.55;text-align:center;" +
    "padding:9px max(16px,env(safe-area-inset-right,0px)) 9px max(16px,env(safe-area-inset-left,0px))";
  bar.innerHTML = '<b style="color:#3F2F08">미리보기</b> · 지어낸 가족의 여행 준비 모습이에요. 눌러 봐도 저장되지 않고 새로고침하면 처음으로 돌아가요. ' +
    '<a href="./" style="color:#2F5D4E;font-weight:700;white-space:nowrap">내 트립첵 시작하기</a>';
  document.body.insertBefore(bar, document.body.firstChild);
})();

C().setAccount({ phase: "loading", user: ME });
setTimeout(() => {
  C().enterFamily(famInfo(), remote);
  C().applyFamily(clone(doc));
  pushRecords();
  C().showConnState();
}, 200);
