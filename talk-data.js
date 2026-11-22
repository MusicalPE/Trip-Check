/* 트립첵! 여행 회화 자료 — 상황별 꼭 필요한 문장과 문장 만들기(틀 + 낱말)
   각 문장: [그 나라 말, 한글로 적은 읽는 법]
   태국어의 {P}는 말끝(남 ครับ / 여 ค่ะ), {I}는 '나'(남 ผม / 여 ฉัน) — 화면에서 고른 대로 바뀜
   Made by 음악적체육인 */
window.TALK = {
  langs: [
    {id:"ja", name:"일본어", tts:"ja-JP"},
    {id:"en", name:"영어", tts:"en-US"},
    {id:"zh", name:"중국어", tts:"zh-CN"},
    {id:"vi", name:"베트남어", tts:"vi-VN"},
    {id:"th", name:"태국어", tts:"th-TH"},
    {id:"fr", name:"프랑스어", tts:"fr-FR"},
    {id:"es", name:"스페인어", tts:"es-ES"},
    {id:"it", name:"이탈리아어", tts:"it-IT"}
  ],
  /* 여행지 이름으로 언어 고르기 */
  guess: [
    ["ja", /일본|도쿄|동경|오사카|교토|후쿠오카|삿포로|홋카이도|오키나와|나고야|고베|나라|요코하마|벳푸|유후인|가고시마|구마모토|나가사키|히로시마|japan|tokyo|osaka|kyoto|fukuoka|sapporo|okinawa/i],
    ["zh", /중국|베이징|북경|상하이|상해|칭다오|청도|광저우|선전|시안|장가계|하얼빈|대만|타이완|타이베이|타이중|가오슝|홍콩|마카오|china|beijing|shanghai|taiwan|taipei|hong ?kong|macau/i],
    ["vi", /베트남|다낭|하노이|호치민|나트랑|냐짱|푸꾸옥|호이안|달랏|무이네|하롱|vietnam|da ?nang|hanoi|ho chi minh|nha trang|phu quoc/i],
    ["th", /태국|방콕|치앙마이|푸켓|파타야|끄라비|코사무이|후아힌|thailand|bangkok|chiang mai|phuket|pattaya/i],
    ["fr", /프랑스|파리|니스|리옹|마르세유|몽생미셸|스트라스부르|퀘벡|몬트리올|스위스 제네바|france|paris|nice|lyon/i],
    ["es", /스페인|바르셀로나|마드리드|세비야|그라나다|발렌시아|말라가|멕시코|칸쿤|페루|아르헨티나|칠레|쿠바|spain|barcelona|madrid|sevilla|mexico|cancun/i],
    ["it", /이탈리아|로마|밀라노|베네치아|베니스|피렌체|나폴리|아말피|시칠리아|돌로미티|italy|rome|roma|milan|venice|florence|firenze/i],
    ["en", /미국|영국|호주|캐나다|뉴질랜드|싱가포르|괌|사이판|하와이|필리핀|세부|보라카이|말레이시아|코타키나발루|발리|인도네시아|두바이|런던|뉴욕|la|시드니|usa|uk|london|new york|hawaii|guam|saipan|cebu|bali|singapore|sydney/i]
  ],
  scenes: [
    {id:"air", name:"공항", items:[
      {ko:"체크인하려고요.", ja:["チェックインをお願いします。","체쿠인오 오네가이시마스"], en:["I'd like to check in, please.","아이드 라이크 투 체크인, 플리즈"], zh:["我要办理登机。","워 야오 반리 덩지"], vi:["Tôi muốn làm thủ tục lên máy bay.","또이 무온 람 투 뚝 렌 마이 바이"], th:["ขอเช็คอิน{P}","커 첵인 {P}"], fr:["Je voudrais m'enregistrer.","주 부드레 망르지스트레"], es:["Quiero facturar, por favor.","끼에로 팍뚜라르, 뽀르 파보르"], it:["Vorrei fare il check-in.","보레이 파레 일 체킨"]},
      {ko:"창가 자리로 주세요.", ja:["窓側の席をお願いします。","마도가와노 세키오 오네가이시마스"], en:["A window seat, please.","어 윈도우 싯, 플리즈"], zh:["我要靠窗的座位。","워 야오 카오 촹 더 쭤웨이"], vi:["Cho tôi ghế cạnh cửa sổ.","쪼 또이 게 까인 끄어 소"], th:["ขอที่นั่งริมหน้าต่าง{P}","커 티낭 림 나땅 {P}"], fr:["Une place côté hublot, s'il vous plaît.","윈 플라스 꼬떼 위블로, 실 부 플레"], es:["Un asiento de ventanilla, por favor.","운 아시엔또 데 벤따니야, 뽀르 파보르"], it:["Un posto vicino al finestrino, per favore.","운 포스토 비치노 알 피네스트리노, 페르 파보레"]},
      {ko:"짐 찾는 곳이 어디예요?", a:"dir", ja:["手荷物受取所はどこですか？","테니모츠 우케토리조와 도코데스카"], en:["Where is baggage claim?","웨어 이즈 배기지 클레임"], zh:["行李提取处在哪里？","싱리 티취추 짜이 나리"], vi:["Chỗ lấy hành lý ở đâu?","쪼 러이 하인 리 어 더우"], th:["ที่รับกระเป๋าอยู่ที่ไหน{P}","티 랍 끄라빠오 유 티나이 {P}"], fr:["Où est la récupération des bagages ?","우 에 라 레퀴페라시옹 데 바가주"], es:["¿Dónde está la recogida de equipajes?","돈데 에스따 라 레꼬히다 데 에끼빠헤스"], it:["Dov'è il ritiro bagagli?","도베 일 리티로 바갈리"]},
      {ko:"제 짐이 안 나왔어요.", ja:["荷物が出てきません。","니모츠가 데테키마센"], en:["My luggage didn't come out.","마이 러기지 디든트 컴 아웃"], zh:["我的行李没有出来。","워 더 싱리 메이여우 추라이"], vi:["Hành lý của tôi chưa ra.","하인 리 꾸어 또이 쯔어 자"], th:["กระเป๋าของ{I}ยังไม่ออกมา{P}","끄라빠오 컹 {I} 양 마이 억 마 {P}"], fr:["Mes bagages ne sont pas arrivés.","메 바가주 느 송 빠 자리베"], es:["Mi equipaje no ha llegado.","미 에끼빠헤 노 아 예가도"], it:["Il mio bagaglio non è arrivato.","일 미오 바갈리오 논 에 아리바토"]},
      {ko:"시내 가는 버스는 어디서 타요?", a:"dir", ja:["市内へ行くバスはどこで乗れますか？","시나이에 이쿠 바스와 도코데 노레마스카"], en:["Where can I take the bus to downtown?","웨어 캔 아이 테이크 더 버스 투 다운타운"], zh:["去市区的巴士在哪里坐？","취 스취 더 바스 짜이 나리 쭤"], vi:["Xe buýt vào trung tâm đón ở đâu?","쎄 부잇 바오 쭝 떰 돈 어 더우"], th:["รถบัสเข้าเมืองขึ้นที่ไหน{P}","롯밧 카오 므엉 큰 티나이 {P}"], fr:["Où prendre le bus pour le centre-ville ?","우 프랑드르 르 뷔스 뿌르 르 상트르빌"], es:["¿Dónde se toma el autobús al centro?","돈데 세 또마 엘 아우또부스 알 센뜨로"], it:["Dove prendo l'autobus per il centro?","도베 프렌도 라우토부스 페르 일 첸트로"]},
      {ko:"환전하고 싶어요.", ja:["両替したいです。","료-가에 시타이데스"], en:["I'd like to exchange money.","아이드 라이크 투 익스체인지 머니"], zh:["我想换钱。","워 샹 환첸"], vi:["Tôi muốn đổi tiền.","또이 무온 도이 띠엔"], th:["อยากแลกเงิน{P}","야악 래액 응언 {P}"], fr:["Je voudrais changer de l'argent.","주 부드레 샹제 들 라르장"], es:["Quiero cambiar dinero.","끼에로 깜비아르 디네로"], it:["Vorrei cambiare dei soldi.","보레이 캄비아레 데이 솔디"]}
    ]},
    {id:"hotel", name:"호텔", items:[
      {ko:"예약했어요.", ja:["予約しています。","요야쿠 시테이마스"], en:["I have a reservation.","아이 해브 어 레저베이션"], zh:["我有预订。","워 여우 위딩"], vi:["Tôi đã đặt phòng.","또이 다 닷 퐁"], th:["จองไว้แล้ว{P}","쩡 와이 래우 {P}"], fr:["J'ai une réservation.","제 윈 레제르바시옹"], es:["Tengo una reserva.","뗑고 우나 레세르바"], it:["Ho una prenotazione.","오 우나 프레노타치오네"]},
      {ko:"체크아웃할게요.", ja:["チェックアウトお願いします。","체쿠아우토 오네가이시마스"], en:["Check out, please.","체크아웃, 플리즈"], zh:["我要退房。","워 야오 투이팡"], vi:["Tôi muốn trả phòng.","또이 무온 짜 퐁"], th:["ขอเช็คเอาท์{P}","커 첵아오 {P}"], fr:["Je voudrais faire le check-out.","주 부드레 페르 르 체카웃"], es:["Quiero hacer el check-out.","끼에로 아세르 엘 체카웃"], it:["Vorrei fare il check-out.","보레이 파레 일 체카웃"]},
      {ko:"짐 좀 맡아 주실 수 있어요?", ja:["荷物を預かってもらえますか？","니모츠오 아즈캇테 모라에마스카"], en:["Can you keep my luggage?","캔 유 킵 마이 러기지"], zh:["可以寄存行李吗？","커이 지춘 싱리 마"], vi:["Gửi hành lý ở đây được không?","그이 하인 리 어 더이 드억 콩"], th:["ฝากกระเป๋าได้ไหม{P}","팍 끄라빠오 다이 마이 {P}"], fr:["Pouvez-vous garder mes bagages ?","뿌베부 갸르데 메 바가주"], es:["¿Me guarda el equipaje?","메 과르다 엘 에끼빠헤"], it:["Posso lasciare i bagagli?","포쏘 라샤레 이 바갈리"]},
      {ko:"와이파이 비밀번호가 뭐예요?", ja:["Wi-Fiのパスワードは何ですか？","와이파이노 파스와-도와 난데스카"], en:["What's the Wi-Fi password?","왓츠 더 와이파이 패스워드"], zh:["Wi-Fi密码是多少？","와이파이 미마 스 둬샤오"], vi:["Mật khẩu wifi là gì?","멋 커우 와이파이 라 지"], th:["รหัสไวไฟคืออะไร{P}","라핫 와이파이 크 아라이 {P}"], fr:["Quel est le mot de passe du Wi-Fi ?","껠 에 르 모 드 빠스 뒤 위피"], es:["¿Cuál es la contraseña del wifi?","꽐 에스 라 꼰뜨라세냐 델 위피"], it:["Qual è la password del Wi-Fi?","콸 에 라 파스워드 델 와이파이"]},
      {ko:"수건 더 주세요.", ja:["タオルをもう少しください。","타오루오 모- 스코시 쿠다사이"], en:["More towels, please.","모어 타월스, 플리즈"], zh:["请再给我几条毛巾。","칭 짜이 게이 워 지 탸오 마오진"], vi:["Cho tôi thêm khăn tắm.","쪼 또이 템 칸 땀"], th:["ขอผ้าเช็ดตัวเพิ่ม{P}","커 파쳇뚜어 픔 {P}"], fr:["Encore des serviettes, s'il vous plaît.","앙꼬르 데 세르비에뜨, 실 부 플레"], es:["Más toallas, por favor.","마스 또아야스, 뽀르 파보르"], it:["Altri asciugamani, per favore.","알트리 아슈가마니, 페르 파보레"]},
      {ko:"에어컨이 안 돼요.", ja:["エアコンがつきません。","에아콘가 츠키마센"], en:["The air conditioner isn't working.","디 에어컨디셔너 이즌트 워킹"], zh:["空调坏了。","쿵탸오 화이 러"], vi:["Máy lạnh không chạy.","마이 라인 콩 짜이"], th:["แอร์ไม่ทำงาน{P}","애 마이 탐응안 {P}"], fr:["La climatisation ne marche pas.","라 끌리마띠자시옹 느 마르슈 빠"], es:["El aire acondicionado no funciona.","엘 아이레 아꼰디시오나도 노 푼시오나"], it:["L'aria condizionata non funziona.","라리아 콘디치오나타 논 푼치오나"]}
    ]},
    {id:"food", name:"식당", items:[
      {ko:"두 명이에요.", ja:["二人です。","후타리데스"], en:["A table for two, please.","어 테이블 포 투, 플리즈"], zh:["两位。","량 웨이"], vi:["Hai người.","하이 응으어이"], th:["สองที่{P}","썽 티 {P}"], fr:["Une table pour deux, s'il vous plaît.","윈 따블 뿌르 되, 실 부 플레"], es:["Una mesa para dos, por favor.","우나 메사 빠라 도스, 뽀르 파보르"], it:["Un tavolo per due, per favore.","운 타볼로 페르 두에, 페르 파보레"]},
      {ko:"메뉴판 주세요.", ja:["メニューをください。","메뉴-오 쿠다사이"], en:["Can I see the menu?","캔 아이 시 더 메뉴"], zh:["请给我菜单。","칭 게이 워 차이단"], vi:["Cho tôi xem thực đơn.","쪼 또이 쌤 특 던"], th:["ขอเมนูหน่อย{P}","커 메누 너이 {P}"], fr:["La carte, s'il vous plaît.","라 까르뜨, 실 부 플레"], es:["La carta, por favor.","라 까르따, 뽀르 파보르"], it:["Il menù, per favore.","일 메누, 페르 파보레"]},
      {ko:"추천 메뉴가 뭐예요?", ja:["おすすめは何ですか？","오스스메와 난데스카"], en:["What do you recommend?","왓 두 유 레코멘드"], zh:["有什么推荐的？","여우 선머 투이젠 더"], vi:["Món nào ngon nhất?","몬 나오 응온 녓"], th:["มีเมนูแนะนำไหม{P}","미 메누 내남 마이 {P}"], fr:["Qu'est-ce que vous recommandez ?","께스끄 부 르꼬망데"], es:["¿Qué me recomienda?","께 메 레꼬미엔다"], it:["Cosa mi consiglia?","코사 미 콘실리아"]},
      {ko:"이거 주세요.", ja:["これをください。","코레오 쿠다사이"], en:["I'll have this.","아일 해브 디스"], zh:["我要这个。","워 야오 저거"], vi:["Cho tôi món này.","쪼 또이 몬 나이"], th:["เอาอันนี้{P}","아오 안니 {P}"], fr:["Je prends ça.","주 프랑 사"], es:["Quiero esto.","끼에로 에스또"], it:["Prendo questo.","프렌도 쿠에스토"]},
      {ko:"맵지 않게 해 주세요.", ja:["辛くしないでください。","카라쿠 시나이데 쿠다사이"], en:["Not spicy, please.","낫 스파이시, 플리즈"], zh:["请不要辣。","칭 부야오 라"], vi:["Đừng cho cay.","등 쪼 까이"], th:["ไม่เผ็ดนะ{P}","마이 펫 나 {P}"], fr:["Pas épicé, s'il vous plaît.","빠 제삐세, 실 부 플레"], es:["Sin picante, por favor.","신 삐깐떼, 뽀르 파보르"], it:["Non piccante, per favore.","논 피칸테, 페르 파보레"]},
      {ko:"계산해 주세요.", ja:["お会計お願いします。","오카이케- 오네가이시마스"], en:["Check, please.","체크, 플리즈"], zh:["买单。","마이단"], vi:["Tính tiền.","띤 띠엔"], th:["เช็คบิลด้วย{P}","첵빈 두어이 {P}"], fr:["L'addition, s'il vous plaît.","라디시옹, 실 부 플레"], es:["La cuenta, por favor.","라 꾸엔따, 뽀르 파보르"], it:["Il conto, per favore.","일 콘토, 페르 파보레"]},
      {ko:"카드 돼요?", ja:["カードは使えますか？","카-도와 츠카에마스카"], en:["Do you take cards?","두 유 테이크 카즈"], zh:["可以刷卡吗？","커이 솨카 마"], vi:["Trả bằng thẻ được không?","짜 방 테 드억 콩"], th:["จ่ายด้วยบัตรได้ไหม{P}","짜이 두어이 밧 다이 마이 {P}"], fr:["Je peux payer par carte ?","주 쁘 뻬이예 빠르 까르뜨"], es:["¿Puedo pagar con tarjeta?","뿌에도 빠가르 꼰 따르헤따"], it:["Posso pagare con la carta?","포쏘 파가레 콘 라 카르타"]}
    ]},
    {id:"way", name:"길 찾기", items:[
      {ko:"여기 어떻게 가요? (지도를 보여 주며)", a:"dir", ja:["ここへはどう行けばいいですか？","코코에와 도- 이케바 이-데스카"], en:["How do I get here?","하우 두 아이 겟 히어"], zh:["这里怎么走？","저리 전머 저우"], vi:["Đến chỗ này đi thế nào?","덴 쪼 나이 디 테 나오"], th:["ไปที่นี่ยังไง{P}","빠이 티니 양응아이 {P}"], fr:["Comment aller ici ?","꼬망 알레 이시"], es:["¿Cómo llego aquí?","꼬모 예고 아끼"], it:["Come arrivo qui?","코메 아리보 쿠이"]},
      {ko:"걸어서 갈 수 있어요?", ja:["歩いて行けますか？","아루이테 이케마스카"], en:["Can I walk there?","캔 아이 워크 데어"], zh:["走路能到吗？","저우루 넝 다오 마"], vi:["Đi bộ được không?","디 보 드억 콩"], th:["เดินไปได้ไหม{P}","든 빠이 다이 마이 {P}"], fr:["On peut y aller à pied ?","옹 쁘 이 알레 아 삐에"], es:["¿Se puede ir andando?","세 뿌에데 이르 안단도"], it:["Ci si arriva a piedi?","치 시 아리바 아 피에디"]},
      {ko:"이 주소로 가 주세요.", ja:["この住所までお願いします。","코노 쥬-쇼 마데 오네가이시마스"], en:["To this address, please.","투 디스 애드레스, 플리즈"], zh:["请到这个地址。","칭 다오 저거 디즈"], vi:["Cho tôi đến địa chỉ này.","쪼 또이 덴 디어 찌 나이"], th:["ไปที่อยู่นี้{P}","빠이 티유 니 {P}"], fr:["À cette adresse, s'il vous plaît.","아 세뜨 아드레스, 실 부 플레"], es:["A esta dirección, por favor.","아 에스따 디렉시온, 뽀르 파보르"], it:["A questo indirizzo, per favore.","아 쿠에스토 인디리초, 페르 파보레"]},
      {ko:"여기서 세워 주세요.", ja:["ここで止めてください。","코코데 토메테 쿠다사이"], en:["Please stop here.","플리즈 스탑 히어"], zh:["请在这里停。","칭 짜이 저리 팅"], vi:["Dừng ở đây.","증 어 더이"], th:["จอดตรงนี้{P}","쩟 뜨롱니 {P}"], fr:["Arrêtez-vous ici, s'il vous plaît.","아레떼부 이시, 실 부 플레"], es:["Pare aquí, por favor.","빠레 아끼, 뽀르 파보르"], it:["Si fermi qui, per favore.","시 페르미 쿠이, 페르 파보레"]},
      {ko:"이 버스 여기 가요? (지도를 보여 주며)", ja:["このバスはここに行きますか？","코노 바스와 코코니 이키마스카"], en:["Does this bus go here?","더즈 디스 버스 고 히어"], zh:["这辆巴士到这里吗？","저 량 바스 다오 저리 마"], vi:["Xe buýt này có đến đây không?","쎄 부잇 나이 꼬 덴 더이 콩"], th:["รถบัสคันนี้ไปที่นี่ไหม{P}","롯밧 칸니 빠이 티니 마이 {P}"], fr:["Ce bus va ici ?","스 뷔스 바 이시"], es:["¿Este autobús va aquí?","에스떼 아우또부스 바 아끼"], it:["Questo autobus va qui?","쿠에스토 아우토부스 바 쿠이"]},
      {ko:"길을 잃었어요.", ja:["道に迷いました。","미치니 마요이마시타"], en:["I'm lost.","아임 로스트"], zh:["我迷路了。","워 미루 러"], vi:["Tôi bị lạc đường.","또이 비 락 드엉"], th:["{I}หลงทาง{P}","{I} 롱탕 {P}"], fr:["Je ne trouve pas mon chemin.","주 느 뜨루브 빠 몽 슈맹"], es:["No encuentro el camino.","노 엔꾸엔뜨로 엘 까미노"], it:["Non trovo la strada.","논 트로보 라 스트라다"]}
    ]},
    {id:"shop", name:"쇼핑", items:[
      {ko:"이거 얼마예요?", a:"num", ja:["これはいくらですか？","코레와 이쿠라데스카"], en:["How much is this?","하우 머치 이즈 디스"], zh:["这个多少钱？","저거 둬샤오 첸"], vi:["Cái này bao nhiêu tiền?","까이 나이 바오 니에우 띠엔"], th:["อันนี้ราคาเท่าไหร่{P}","안니 라카 타오라이 {P}"], fr:["Combien ça coûte ?","꽁비앙 사 꾸뜨"], es:["¿Cuánto cuesta esto?","꽌또 꾸에스따 에스또"], it:["Quanto costa questo?","콴토 코스타 쿠에스토"]},
      {ko:"입어 봐도 돼요?", ja:["試着してもいいですか？","시챠쿠 시테모 이-데스카"], en:["Can I try this on?","캔 아이 트라이 디스 온"], zh:["可以试穿吗？","커이 스촨 마"], vi:["Tôi mặc thử được không?","또이 막 트 드억 콩"], th:["ลองได้ไหม{P}","렁 다이 마이 {P}"], fr:["Je peux l'essayer ?","주 쁘 레세이예"], es:["¿Me lo puedo probar?","메 로 뿌에도 쁘로바르"], it:["Posso provarlo?","포쏘 프로바를로"]},
      {ko:"다른 사이즈 있어요?", a:"have", ja:["他のサイズはありますか？","호카노 사이즈와 아리마스카"], en:["Do you have another size?","두 유 해브 어나더 사이즈"], zh:["有别的尺码吗？","여우 비에 더 츠마 마"], vi:["Có cỡ khác không?","꼬 꺼 칵 콩"], th:["มีไซซ์อื่นไหม{P}","미 사이 은 마이 {P}"], fr:["Vous avez une autre taille ?","부 자베 윈 오뜨르 따이"], es:["¿Tiene otra talla?","띠에네 오뜨라 따야"], it:["Avete un'altra taglia?","아베테 운알트라 탈리아"]},
      {ko:"조금 깎아 주실 수 있어요?", ja:["少し安くなりませんか？","스코시 야스쿠 나리마센카"], en:["Can you give me a discount?","캔 유 기브 미 어 디스카운트"], zh:["能便宜一点吗？","넝 피엔이 이디엔 마"], vi:["Bớt chút được không?","벗 쭛 드억 콩"], th:["ลดหน่อยได้ไหม{P}","롯 너이 다이 마이 {P}"], fr:["Vous pouvez faire un prix ?","부 뿌베 페르 앙 프리"], es:["¿Me hace un descuento?","메 아세 운 데스꾸엔또"], it:["Mi fa uno sconto?","미 파 우노 스콘토"]},
      {ko:"세금 환급(면세) 돼요?", ja:["免税できますか？","멘제- 데키마스카"], en:["Can I get a tax refund?","캔 아이 겟 어 택스 리펀드"], zh:["可以退税吗？","커이 투이수이 마"], vi:["Có hoàn thuế không?","꼬 호안 투에 콩"], th:["ขอคืนภาษีได้ไหม{P}","커 큰 파씨 다이 마이 {P}"], fr:["Je peux avoir la détaxe ?","주 쁘 아부아르 라 데딱스"], es:["¿Hacen devolución de impuestos?","아센 데볼루시온 데 임뿌에스또스"], it:["Posso avere il rimborso IVA?","포쏘 아베레 일 림보르소 이바"]},
      {ko:"봉투 주세요.", ja:["袋をください。","후쿠로오 쿠다사이"], en:["Can I have a bag?","캔 아이 해브 어 백"], zh:["请给我一个袋子。","칭 게이 워 이거 다이쯔"], vi:["Cho tôi một cái túi.","쪼 또이 못 까이 뚜이"], th:["ขอถุงด้วย{P}","커 퉁 두어이 {P}"], fr:["Un sac, s'il vous plaît.","앙 삭, 실 부 플레"], es:["Una bolsa, por favor.","우나 볼사, 뽀르 파보르"], it:["Una busta, per favore.","우나 부스타, 페르 파보레"]}
    ]},
    {id:"help", name:"급할 때", items:[
      {ko:"도와주세요!", ja:["助けてください！","타스케테 쿠다사이"], en:["Help me, please!","헬프 미, 플리즈"], zh:["请帮帮我！","칭 방방 워"], vi:["Giúp tôi với!","줍 또이 버이"], th:["ช่วยด้วย!","추어이 두어이"], fr:["Au secours !","오 스꾸르"], es:["¡Ayuda!","아유다"], it:["Aiuto!","아이우토"]},
      {ko:"경찰을 불러 주세요.", ja:["警察を呼んでください。","케-사츠오 욘데 쿠다사이"], en:["Please call the police.","플리즈 콜 더 폴리스"], zh:["请叫警察。","칭 쟈오 징차"], vi:["Gọi cảnh sát giúp tôi.","고이 까인 삿 줍 또이"], th:["ช่วยเรียกตำรวจ{P}","추어이 리약 땀루엇 {P}"], fr:["Appelez la police !","아쁠레 라 뽈리스"], es:["¡Llame a la policía!","야메 아 라 뽈리시아"], it:["Chiami la polizia!","키아미 라 폴리치아"]},
      {ko:"병원에 가야 해요.", ja:["病院に行きたいです。","뵤-인니 이키타이데스"], en:["I need to go to a hospital.","아이 니드 투 고 투 어 하스피털"], zh:["我要去医院。","워 야오 취 이위엔"], vi:["Tôi cần đi bệnh viện.","또이 껀 디 벤 비엔"], th:["{I}ต้องไปโรงพยาบาล{P}","{I} 떵 빠이 롱파야반 {P}"], fr:["Je dois aller à l'hôpital.","주 두아 알레 아 로삐딸"], es:["Necesito ir al hospital.","네세시또 이르 알 오스삐딸"], it:["Devo andare in ospedale.","데보 안다레 인 오스페달레"]},
      {ko:"여권을 잃어버렸어요.", ja:["パスポートをなくしました。","파스포-토오 나쿠시마시타"], en:["I lost my passport.","아이 로스트 마이 패스포트"], zh:["我的护照丢了。","워 더 후자오 디우 러"], vi:["Tôi bị mất hộ chiếu.","또이 비 멋 호 찌에우"], th:["{I}ทำพาสปอร์ตหาย{P}","{I} 탐 팟싸뻣 하이 {P}"], fr:["J'ai perdu mon passeport.","제 뻬르뒤 몽 빠스뽀르"], es:["He perdido mi pasaporte.","에 뻬르디도 미 빠사뽀르떼"], it:["Ho perso il passaporto.","오 페르소 일 파싸포르토"]},
      {ko:"한국 대사관이 어디예요?", a:"dir", ja:["韓国大使館はどこですか？","칸코쿠 타이시칸와 도코데스카"], en:["Where is the Korean embassy?","웨어 이즈 더 코리언 엠버시"], zh:["韩国大使馆在哪里？","한궈 다스관 짜이 나리"], vi:["Đại sứ quán Hàn Quốc ở đâu?","다이 쓰 관 한 꾸옥 어 더우"], th:["สถานทูตเกาหลีอยู่ที่ไหน{P}","싸탄툿 까올리 유 티나이 {P}"], fr:["Où est l'ambassade de Corée ?","우 에 랑바사드 드 꼬레"], es:["¿Dónde está la embajada de Corea?","돈데 에스따 라 엠바하다 데 꼬레아"], it:["Dov'è l'ambasciata coreana?","도베 람바샤타 코레아나"]},
      {ko:"땅콩 알레르기가 있어요.", ja:["ピーナッツアレルギーがあります。","피-낫츠 아레루기-가 아리마스"], en:["I'm allergic to peanuts.","아임 얼러직 투 피넛츠"], zh:["我对花生过敏。","워 두이 화성 궈민"], vi:["Tôi bị dị ứng đậu phộng.","또이 비 지 응 더우 퐁"], th:["{I}แพ้ถั่วลิสง{P}","{I} 패 투어리쏭 {P}"], fr:["Je suis allergique aux cacahuètes.","주 스위 잘레르지끄 오 까까우에뜨"], es:["Tengo alergia al cacahuete.","뗑고 알레르히아 알 까까우에떼"], it:["Ho un'allergia alle arachidi.","오 운알레르지아 알레 아라키디"]}
    ]}
  ],

  /* 문장 만들기: 틀(ko에 ○ 자리) + 낱말 묶음. 나라마다 어순이 달라 틀마다 그 나라 말 모양을 따로 둠 */
  tpls: [
    {id:"want", ko:"○ 주세요", group:"item",
      ja:["{X}をください。","{x}오 쿠다사이"], en:["{X}, please.","{x}, 플리즈"], zh:["请给我{X}。","칭 게이 워 {x}"], vi:["Cho tôi {X}.","쪼 또이 {x}"], th:["ขอ{X}{P}","커 {x} {P}"], fr:["{X}, s'il vous plaît.","{x}, 실 부 플레"], es:["{X}, por favor.","{x}, 뽀르 파보르"], it:["{X}, per favore.","{x}, 페르 파보레"]},
    {id:"count", ko:"○ ○ 주세요", label:"○ 몇 개 주세요", group:"drink", count:true},
    {id:"have", a:"have", ko:"○ 있어요?", group:"item", form:"have",
      ja:["{X}はありますか？","{x}와 아리마스카"], en:["Do you have {X}?","두 유 해브 {x}"], zh:["有{X}吗？","여우 {x} 마"], vi:["Có {X} không?","꼬 {x} 콩"], th:["มี{X}ไหม{P}","미 {x} 마이 {P}"], fr:["Vous avez {X} ?","부 자베 {x}"], es:["¿Tiene {X}?","띠에네 {x}"], it:["Avete {X}?","아베테 {x}"]},
    {id:"where", a:"dir", ko:"○ 어디예요?", group:"place",
      ja:["{X}はどこですか？","{x}와 도코데스카"], en:["Where is {X}?","웨어 이즈 {x}"], zh:["{X}在哪里？","{x} 짜이 나리"], vi:["{X} ở đâu?","{x} 어 더우"], th:["{X}อยู่ที่ไหน{P}","{x} 유 티나이 {P}"], fr:["Où {X} ?","우 {x}"], es:["¿Dónde {X}?","돈데 {x}"], it:["{X}?","{x}"]},
    {id:"price", a:"num", ko:"○ 얼마예요?", group:"price",
      ja:["{X}はいくらですか？","{x}와 이쿠라데스카"], en:["How much is {X}?","하우 머치 이즈 {x}"], zh:["{X}多少钱？","{x} 둬샤오 첸"], vi:["{X} bao nhiêu tiền?","{x} 바오 니에우 띠엔"], th:["{X}ราคาเท่าไหร่{P}","{x} 라카 타오라이 {P}"], fr:["Combien coûte {X} ?","꽁비앙 꾸뜨 {x}"], es:["¿Cuánto cuesta {X}?","꽌또 꾸에스따 {x}"], it:["Quanto costa {X}?","콴토 코스타 {x}"]},
    {id:"without", ko:"○ 빼 주세요", group:"no",
      ja:["{X}抜きでお願いします。","{x} 누키데 오네가이시마스"], en:["No {X}, please.","노 {x}, 플리즈"], zh:["不要放{X}。","부야오 팡 {x}"], vi:["Không cho {X}.","콩 쪼 {x}"], th:["ไม่ใส่{X}{P}","마이 싸이 {x} {P}"], fr:["Sans {X}, s'il vous plaît.","상 {x}, 실 부 플레"], es:["Sin {X}, por favor.","신 {x}, 뽀르 파보르"], it:["Senza {X}, per favore.","센차 {x}, 페르 파보레"]}
  ],
  groups: {
    item: {name:"무엇을", words:[
      {ko:"물", ja:["お水","오미즈"], zh:["水","수이"], vi:["nước suối","느억 쑤오이"], th:["น้ำเปล่า","남쁠라오"],
        en:["Water","워터"], fr:["De l'eau","들 로"], es:["Agua","아구아"], it:["Acqua","아쿠아"],
        have:{en:["water","워터"], fr:["de l'eau","들 로"], es:["agua","아구아"], it:["acqua","아쿠아"]}},
      {ko:"맥주", ja:["ビール","비-루"], zh:["啤酒","피지우"], vi:["bia","비어"], th:["เบียร์","비아"],
        en:["A beer","어 비어"], fr:["Une bière","윈 비에르"], es:["Una cerveza","우나 세르베사"], it:["Una birra","우나 비라"],
        have:{en:["beer","비어"], fr:["de la bière","들라 비에르"], es:["cerveza","세르베사"], it:["birra","비라"]}},
      {ko:"커피", ja:["コーヒー","코-히-"], zh:["咖啡","카페이"], vi:["cà phê","까 페"], th:["กาแฟ","까패"],
        en:["A coffee","어 커피"], fr:["Un café","앙 까페"], es:["Un café","운 까페"], it:["Un caffè","운 카페"],
        have:{en:["coffee","커피"], fr:["du café","뒤 까페"], es:["café","까페"], it:["caffè","카페"]}},
      {ko:"콜라", ja:["コーラ","코-라"], zh:["可乐","커러"], vi:["coca","꼬까"], th:["โค้ก","콕"],
        en:["A coke","어 코크"], fr:["Un coca","앙 꼬까"], es:["Una coca-cola","우나 꼬까꼴라"], it:["Una coca-cola","우나 코카콜라"],
        have:{en:["coke","코크"], fr:["du coca","뒤 꼬까"], es:["coca-cola","꼬까꼴라"], it:["coca-cola","코카콜라"]}},
      {ko:"메뉴판", ja:["メニュー","메뉴-"], zh:["菜单","차이단"], vi:["thực đơn","특 던"], th:["เมนู","메누"],
        en:["The menu","더 메뉴"], fr:["La carte","라 까르뜨"], es:["La carta","라 까르따"], it:["Il menù","일 메누"],
        have:{en:["a menu","어 메뉴"], fr:["une carte","윈 까르뜨"], es:["carta","까르따"], it:["un menù","운 메누"]}},
      {ko:"이것", ja:["これ","코레"], zh:["这个","저거"], vi:["cái này","까이 나이"], th:["อันนี้","안니"],
        en:["This one","디스 원"], fr:["Ça","사"], es:["Esto","에스또"], it:["Questo","쿠에스토"],
        have:{en:["this","디스"], fr:["ça","사"], es:["esto","에스또"], it:["questo","쿠에스토"]}}
    ]},
    /* 몇 개: 나라마다 세는 말이 달라 낱말마다 따로 둠 */
    drink: {name:"무엇을", words:[
      {ko:"물", ja:["お水","오미즈"], zh:["水","수이","瓶","핑"], vi:["nước suối","느억 쑤오이","chai","짜이"], th:["น้ำเปล่า","남쁠라오","ขวด","쿠엇"],
        en:["bottle of water","바틀 오브 워터","bottles of water","바틀스 오브 워터"], fr:["bouteille d'eau","부테이 도","bouteilles d'eau","부테이 도","f"],
        es:["botella de agua","보떼야 데 아구아","botellas de agua","보떼야스 데 아구아","f"], it:["bottiglia d'acqua","보틸리아 다쿠아","bottiglie d'acqua","보틸리에 다쿠아","f"]},
      {ko:"맥주", ja:["ビール","비-루"], zh:["啤酒","피지우","瓶","핑"], vi:["bia","비어","chai","짜이"], th:["เบียร์","비아","ขวด","쿠엇"],
        en:["beer","비어","beers","비어스"], fr:["bière","비에르","bières","비에르","f"], es:["cerveza","세르베사","cervezas","세르베사스","f"], it:["birra","비라","birre","비레","f"]},
      {ko:"커피", ja:["コーヒー","코-히-"], zh:["咖啡","카페이","杯","베이"], vi:["cà phê","까 페","ly","리"], th:["กาแฟ","까패","แก้ว","깨우"],
        en:["coffee","커피","coffees","커피스"], fr:["café","까페","cafés","까페","m"], es:["café","까페","cafés","까페스","m"], it:["caffè","카페","caffè","카페","m"]},
      {ko:"콜라", ja:["コーラ","코-라"], zh:["可乐","커러","瓶","핑"], vi:["coca","꼬까","chai","짜이"], th:["โค้ก","콕","ขวด","쿠엇"],
        en:["coke","코크","cokes","코크스"], fr:["coca","꼬까","cocas","꼬까","m"], es:["coca-cola","꼬까꼴라","coca-colas","꼬까꼴라스","f"], it:["coca-cola","코카콜라","coca-cola","코카콜라","f"]}
    ]},
    place: {name:"어디", words:[
      {ko:"화장실", ja:["トイレ","토이레"], zh:["洗手间","시서우젠"], vi:["nhà vệ sinh","냐 베 신"], th:["ห้องน้ำ","헝남"], en:["the restroom","더 레스트룸"], fr:["sont les toilettes","송 레 뚜알레뜨"], es:["está el baño","에스따 엘 바뇨"], it:["Dov'è il bagno","도베 일 바뇨"]},
      {ko:"역", ja:["駅","에키"], zh:["车站","처잔"], vi:["nhà ga","냐 가"], th:["สถานีรถไฟ","싸타니 롯파이"], en:["the station","더 스테이션"], fr:["est la gare","에 라 갸르"], es:["está la estación","에스따 라 에스따시온"], it:["Dov'è la stazione","도베 라 스타치오네"]},
      {ko:"버스 정류장", ja:["バス停","바스테-"], zh:["公交车站","궁쟈오처잔"], vi:["trạm xe buýt","짬 쎄 부잇"], th:["ป้ายรถเมล์","빠이 롯메"], en:["the bus stop","더 버스 스탑"], fr:["est l'arrêt de bus","에 라레 드 뷔스"], es:["está la parada de autobús","에스따 라 빠라다 데 아우또부스"], it:["Dov'è la fermata dell'autobus","도베 라 페르마타 델라우토부스"]},
      {ko:"택시 타는 곳", ja:["タクシー乗り場","타쿠시- 노리바"], zh:["出租车站","추쭈처잔"], vi:["chỗ đón taxi","쪼 돈 딱시"], th:["ที่ขึ้นแท็กซี่","티 큰 택씨"], en:["the taxi stand","더 택시 스탠드"], fr:["est la station de taxis","에 라 스따시옹 드 딱시"], es:["está la parada de taxis","에스따 라 빠라다 데 딱시스"], it:["Dov'è il posteggio dei taxi","도베 일 포스테조 데이 탁시"]},
      {ko:"출구", ja:["出口","데구치"], zh:["出口","추커우"], vi:["lối ra","로이 자"], th:["ทางออก","탕억"], en:["the exit","디 엑싯"], fr:["est la sortie","에 라 소르띠"], es:["está la salida","에스따 라 살리다"], it:["Dov'è l'uscita","도베 루시타"]},
      {ko:"환전소", ja:["両替所","료-가에조"], zh:["兑换处","두이환추"], vi:["chỗ đổi tiền","쪼 도이 띠엔"], th:["ที่แลกเงิน","티 래액 응언"], en:["the currency exchange","더 커런시 익스체인지"], fr:["est le bureau de change","에 르 뷔로 드 샹주"], es:["está la casa de cambio","에스따 라 까사 데 깜비오"], it:["Dov'è il cambio","도베 일 캄비오"]},
      {ko:"편의점", ja:["コンビニ","콘비니"], zh:["便利店","볜리뎬"], vi:["cửa hàng tiện lợi","끄어 항 띠엔 로이"], th:["ร้านสะดวกซื้อ","란 싸두억쓰"], en:["a convenience store","어 컨비니언스 스토어"], fr:["est la supérette","에 라 쉬뻬레뜨"], es:["hay una tienda","아이 우나 띠엔다"], it:["Dov'è un minimarket","도베 운 미니마르켓"]},
      {ko:"약국", ja:["薬局","얏쿄쿠"], zh:["药店","야오뎬"], vi:["nhà thuốc","냐 투옥"], th:["ร้านขายยา","란 카이야"], en:["a pharmacy","어 파머시"], fr:["est la pharmacie","에 라 파르마시"], es:["hay una farmacia","아이 우나 파르마시아"], it:["Dov'è una farmacia","도베 우나 파르마치아"]}
    ]},
    price: {name:"무엇이", words:[
      {ko:"이것", ja:["これ","코레"], zh:["这个","저거"], vi:["Cái này","까이 나이"], th:["อันนี้","안니"], en:["this","디스"], fr:["ceci","스시"], es:["esto","에스또"], it:["questo","쿠에스토"]},
      {ko:"맥주", ja:["ビール","비-루"], zh:["啤酒","피지우"], vi:["Bia","비어"], th:["เบียร์","비아"], en:["a beer","어 비어"], fr:["une bière","윈 비에르"], es:["una cerveza","우나 세르베사"], it:["una birra","우나 비라"]},
      {ko:"커피", ja:["コーヒー","코-히-"], zh:["咖啡","카페이"], vi:["Cà phê","까 페"], th:["กาแฟ","까패"], en:["a coffee","어 커피"], fr:["un café","앙 까페"], es:["un café","운 까페"], it:["un caffè","운 카페"]},
      {ko:"입장권", ja:["入場券","뉴-죠-켄"], zh:["门票","먼퍄오"], vi:["Vé vào cửa","베 바오 끄어"], th:["ตั๋วเข้าชม","뚜어 카오촘"], en:["a ticket","어 티켓"], fr:["un billet","앙 비예"], es:["la entrada","라 엔뜨라다"], it:["il biglietto","일 빌리에또"]}
    ]},
    no: {name:"무엇을", words:[
      {ko:"고수", ja:["パクチー","파쿠치-"], zh:["香菜","샹차이"], vi:["rau mùi","자우 무이"], th:["ผักชี","팍치"], en:["cilantro","실란트로"], fr:["coriandre","꼬리앙드르"], es:["cilantro","실란뜨로"], it:["coriandolo","코리안돌로"]},
      {ko:"얼음", ja:["氷","코-리"], zh:["冰","빙"], vi:["đá","다"], th:["น้ำแข็ง","남캥"], en:["ice","아이스"], fr:["glaçons","글라송"], es:["hielo","이엘로"], it:["ghiaccio","기아초"]},
      {ko:"땅콩", ja:["ピーナッツ","피-낫츠"], zh:["花生","화성"], vi:["đậu phộng","더우 퐁"], th:["ถั่ว","투어"], en:["peanuts","피넛츠"], fr:["cacahuètes","까까우에뜨"], es:["cacahuetes","까까우에떼스"], it:["arachidi","아라키디"]},
      {ko:"양파", ja:["玉ねぎ","타마네기"], zh:["洋葱","양충"], vi:["hành","하인"], th:["หัวหอม","후어험"], en:["onions","어니언스"], fr:["oignons","오뇽"], es:["cebolla","세보야"], it:["cipolla","치폴라"]}
    ]}
  },
  /* 몇 개(1~4): 한국어, 그리고 나라마다 숫자 */
  nums: {
    ko:["한","두","세","네"], koN:["하나","둘","셋","넷"],
    ja:[["一つ","히토츠"],["二つ","후타츠"],["三つ","밋츠"],["四つ","욧츠"]],
    zh:[["一","이"],["两","량"],["三","싼"],["四","쓰"]],
    vi:[["một","못"],["hai","하이"],["ba","바"],["bốn","본"]],
    th:[["หนึ่ง","능"],["สอง","썽"],["สาม","쌈"],["สี่","씨"]],
    en:[["One","원"],["Two","투"],["Three","쓰리"],["Four","포"]],
    fr:[["Un","앙","Une","윈"],["Deux","되"],["Trois","트루아"],["Quatre","까트르"]],
    es:[["Un","운","Una","우나"],["Dos","도스"],["Tres","뜨레스"],["Cuatro","꽈뜨로"]],
    it:[["Un","운","Una","우나"],["Due","두에"],["Tre","트레"],["Quattro","콰트로"]]
  },
  /* 상대가 눌러 주는 대답: 그 나라 말 단추를 누르면 내 쪽에 한국어로 */
  answers: {
    yes:     {ko:"네", ja:"はい", en:"Yes", zh:"是的", vi:"Vâng", th:"ใช่", fr:"Oui", es:"Sí", it:"Sì"},
    no:      {ko:"아니요", ja:"いいえ", en:"No", zh:"不是", vi:"Không", th:"ไม่ใช่", fr:"Non", es:"No", it:"No"},
    have:    {ko:"있어요", ja:"あります", en:"We have it", zh:"有", vi:"Có", th:"มี", fr:"Nous en avons", es:"Sí, tenemos", it:"Sì, ce l'abbiamo"},
    none:    {ko:"없어요", ja:"ありません", en:"We don't have it", zh:"没有", vi:"Không có", th:"ไม่มี", fr:"Nous n'en avons pas", es:"No tenemos", it:"Non ce l'abbiamo"},
    ok:      {ko:"돼요 · 괜찮아요", ja:"大丈夫です", en:"That's fine", zh:"可以", vi:"Được", th:"ได้", fr:"D'accord", es:"De acuerdo", it:"Va bene"},
    cant:    {ko:"안 돼요", ja:"できません", en:"Sorry, we can't", zh:"不可以", vi:"Không được", th:"ไม่ได้", fr:"Ce n'est pas possible", es:"No es posible", it:"Non è possibile"},
    wait:    {ko:"잠시만 기다려 주세요", ja:"少々お待ちください", en:"Just a moment", zh:"请稍等", vi:"Xin chờ một chút", th:"รอสักครู่", fr:"Un instant", es:"Un momento", it:"Un momento"},
    dunno:   {ko:"잘 모르겠어요", ja:"わかりません", en:"I don't know", zh:"不知道", vi:"Tôi không biết", th:"ไม่ทราบ", fr:"Je ne sais pas", es:"No lo sé", it:"Non lo so"},
    straight:{ko:"쭉 가세요", ja:"まっすぐです", en:"Go straight", zh:"一直走", vi:"Đi thẳng", th:"ตรงไป", fr:"Tout droit", es:"Todo recto", it:"Sempre dritto"},
    right:   {ko:"오른쪽이에요", ja:"右です", en:"Turn right", zh:"右转", vi:"Rẽ phải", th:"เลี้ยวขวา", fr:"À droite", es:"A la derecha", it:"A destra"},
    left:    {ko:"왼쪽이에요", ja:"左です", en:"Turn left", zh:"左转", vi:"Rẽ trái", th:"เลี้ยวซ้าย", fr:"À gauche", es:"A la izquierda", it:"A sinistra"},
    there:   {ko:"저쪽이에요 (가리키는 쪽)", ja:"あちらです", en:"Over there", zh:"在那边", vi:"Ở đằng kia", th:"ตรงนั้น", fr:"Là-bas", es:"Allí", it:"Là"},
    near:    {ko:"가까워요 · 걸어갈 수 있어요", ja:"歩いて行けます", en:"It's walking distance", zh:"走路可以到", vi:"Đi bộ được", th:"เดินไปได้", fr:"On peut y aller à pied", es:"Se puede ir andando", it:"Ci si arriva a piedi"},
    far:     {ko:"멀어요 · 차를 타세요", ja:"遠いです", en:"It's far", zh:"很远", vi:"Xa lắm", th:"ไกล", fr:"C'est loin", es:"Está lejos", it:"È lontano"},
    map:     {ko:"지도를 보여 주세요", ja:"地図を見せてください", en:"Show me a map", zh:"给我看地图", vi:"Cho tôi xem bản đồ", th:"ขอดูแผนที่", fr:"Montrez-moi la carte", es:"Enséñeme el mapa", it:"Mi mostri la mappa"}
  },
  answerSets: {
    yn:  ["yes", "no", "ok", "cant", "wait", "dunno"],
    have:["have", "none", "yes", "no", "wait", "dunno"],
    dir: ["ok", "straight", "right", "left", "there", "near", "far", "map", "dunno"],
    num: ["wait", "dunno"]
  },
  /* 상대 쪽 안내 글 */
  ask: {
    pick: {ja:"答えを押してください", en:"Tap your answer", zh:"请点选回答", vi:"Vui lòng chọn câu trả lời", th:"กรุณากดคำตอบ", fr:"Touchez votre réponse", es:"Toque su respuesta", it:"Tocchi la sua risposta"},
    num:  {ja:"金額を入力してください", en:"Please type the price", zh:"请输入价格", vi:"Vui lòng nhập giá", th:"กรุณาใส่ราคา", fr:"Tapez le prix, s'il vous plaît", es:"Escriba el precio, por favor", it:"Scriva il prezzo, per favore"},
    done: {ja:"OK", en:"OK", zh:"好", vi:"OK", th:"ตกลง", fr:"OK", es:"OK", it:"OK"}
  },
  /* 태국어 말끝 · '나' */
  th: {m:{P:["ครับ","크랍"], I:["ผม","폼"]}, f:{P:["ค่ะ","카"], I:["ฉัน","찬"]}}
};
