const TRIP_CODE = "SPAIN2026";
const STORAGE_KEY = "spainTripParticipant";

const days = [
  { day: 1, city: "Madrid", places: [
    ["Temple of Debod", "Monument"],
    ["Lhardy Restaurante", "Restaurant"]
  ]},
  { day: 2, city: "Madrid", places: [
    ["El Retiro Park", "Park"],
    ["Museo Nacional del Prado", "Museum"],
    ["La Taberna de Peñalver", "Restaurant"],
    ["Royal Palace of Madrid", "Landmark"]
  ]},
  { day: 3, city: "Madrid · Castile", places: [
    ["Las Ventas Bullring", "Landmark"],
    ["Toledo", "Historic city"],
    ["Segovia", "Historic city"]
  ]},
  { day: 4, city: "Seville", places: [
    ["Plaza de Toros de la Real Maestranza de Caballería de Sevilla", "Landmark"],
    ["Torre del Oro", "Monument"]
  ]},
  { day: 5, city: "Seville", places: [
    ["Catedral de Sevilla", "Cathedral"],
    ["Royal Alcázar of Seville", "Palace"],
    ["Plaza de España", "Landmark"]
  ]},
  { day: 6, city: "Seville", places: [
    ["Setas de Sevilla", "Landmark"]
  ]},
  { day: 7, city: "Barcelona", places: [
    ["Mercat de la Boqueria", "Market"],
    ["Cathedral of Barcelona", "Cathedral"],
    ["Picasso Museum Barcelona", "Museum"],
    ["CruiX Restaurant", "Restaurant"]
  ]},
  { day: 8, city: "Barcelona", places: [
    ["Casa Vicens Gaudí", "Architecture"]
  ]},
  { day: 9, city: "Barcelona", places: [
    ["Basílica de la Sagrada Família", "Basilica"],
    ["Mercat dels Encants de Barcelona", "Market"],
    ["La Pedrera - Casa Milà", "Architecture"],
    ["Casa Batlló", "Architecture"]
  ]}
];

const palette = [
  ["#1e5147", "#e9c675"], ["#b9533d", "#f2d9c5"], ["#26374f", "#aac2ce"],
  ["#8c6843", "#eeddbf"], ["#365d72", "#c9dde2"], ["#6e3e49", "#e8c5ca"]
];

const places = days.flatMap((group) =>
  group.places.map(([name, type]) => ({ day: group.day, city: group.city, name, type }))
);

const builtInArticles = {
  "Temple of Debod": {
    title: "德波神廟",
    cover: "./assets/places/Temple%20of%20Debod/temple-of-debod-cover.jpg",
    introduction: "德波神廟（Temple of Debod／Templo de Debod）是一座非常特別的古埃及神廟。今天它位於西班牙馬德里，但它的靈魂與起源，卻來自遙遠的尼羅河流域。它不只是浪漫的日落景點，更是一座跨越文明、政治、考古與藝術的歷史紀念碑。",
    content: `
      <div class="article-body" lang="zh-Hant">
        <section class="article-section">
          <figure class="section-photo"><img src="./assets/places/Temple%20of%20Debod/section1.jpg" alt="德波神廟周邊與馬德里城市景觀" loading="lazy"></figure>
          <div class="section-copy">
            <p class="section-index">01</p>
            <h2>它在哪裡？</h2>
            <p>德波神廟位於馬德里的<strong>西園公園附近</strong>，靠近西班牙廣場與王宮一帶。站在神廟周圍的高地上，可以眺望馬德里王宮、阿穆德納聖母主教座堂，以及城市西側的天際線。</p>
            <p>這裡尤其以<strong>夕陽景色</strong>聞名。當太陽西下，神廟倒映在水池中，古埃及石構建築與馬德里的天空交會，形成一種奇妙的時空錯置感：你人在西班牙，眼前卻像走進了尼羅河畔的古代世界。</p>
          </div>
        </section>

        <section class="article-section">
          <figure class="section-photo"><img src="./assets/places/Temple%20of%20Debod/section2.jpg" alt="德波神廟的古埃及起源" loading="lazy"></figure>
          <div class="section-copy">
            <p class="section-index">02</p>
            <h2>神廟的埃及起源</h2>
            <p>德波神廟原本位於<strong>埃及南部努比亞地區</strong>，靠近今日亞斯文一帶。它大約興建於西元前二世紀，最早與<strong>梅羅埃王國</strong>以及後來托勒密、羅馬時期的統治者有關。</p>
            <p>神廟主要供奉兩位神祇：</p>
            <ul class="feature-list">
              <li><strong>阿蒙神 Amun</strong><span>與王權、創造力和宇宙秩序相關。</span></li>
              <li><strong>伊西斯女神 Isis</strong><span>象徵母性、魔法、復活與保護。</span></li>
            </ul>
            <p>這使德波神廟具有強烈的宗教與王權意義。</p>
          </div>
        </section>

        <section class="article-section">
          <figure class="section-photo"><img src="./assets/places/Temple%20of%20Debod/section3.jpg" alt="德波神廟遷移與保存的歷史" loading="lazy"></figure>
          <div class="section-copy">
            <p class="section-index">03</p>
            <h2>為什麼埃及神廟會在馬德里？</h2>
            <p>20世紀中葉，埃及興建<strong>亞斯文高壩</strong>，尼羅河水位上升，許多努比亞地區的古代遺跡面臨被淹沒的危機。聯合國教科文組織發起大型國際救援行動，協助搬遷與保存努比亞古蹟，其中最著名的例子便是阿布辛貝神廟的遷移。</p>
            <p>西班牙參與了這場考古救援工作。為了感謝西班牙的協助，埃及政府將德波神廟贈予西班牙。神廟被拆解、運送到馬德里，再依照原來的結構重新組裝，於1970年代對外開放。</p>
            <aside class="article-callout">因此，德波神廟不只是一座古蹟，也象徵著<strong>國際文化合作</strong>與<strong>人類共同保護文化遺產的努力</strong>。</aside>
          </div>
        </section>

        <section class="article-section">
          <figure class="section-photo section-photo-portrait"><img src="./assets/places/Temple%20of%20Debod/section4.jpg" alt="德波神廟的石構建築與浮雕" loading="lazy"></figure>
          <div class="section-copy">
            <p class="section-index">04</p>
            <h2>建築特色</h2>
            <p>從藝術家的角度來看，德波神廟的美不在於華麗，而在於它的<strong>簡潔、比例與光影</strong>。砂岩石塊構成樸素厚重的外觀，展現古埃及建築典型的莊嚴感。</p>
            <ol class="architecture-list">
              <li><strong>入口門樓</strong><span>數座石門形成儀式性的軸線，讓人一步步從世俗世界進入神聖空間。</span></li>
              <li><strong>主體神殿</strong><span>內部較封閉而昏暗，利用明暗對比營造神秘感，象徵從混沌進入神聖秩序。</span></li>
              <li><strong>浮雕與銘文</strong><span>與祭祀、神祇和王權相關的圖像，是向神明宣示供奉與秩序的宗教語言。</span></li>
            </ol>
          </div>
        </section>

        <section class="article-section">
          <figure class="section-photo"><img src="./assets/places/Temple%20of%20Debod/section5.jpg" alt="德波神廟的歷史與文化意義" loading="lazy"></figure>
          <div class="section-copy">
            <p class="section-index">05</p>
            <h2>歷史與文化意義</h2>
            <p>德波神廟的特殊之處，在於它經歷了多層文明的轉換：</p>
            <ul class="history-list">
              <li>誕生於非洲的尼羅河文明圈。</li>
              <li>見證努比亞、埃及、希臘化與羅馬時期的宗教交流。</li>
              <li>在現代因水壩工程面臨消失。</li>
              <li>因國際合作而重生於歐洲城市中心。</li>
            </ul>
            <p>這讓德波神廟成為一座「流亡的神廟」，也是一座「被拯救的神廟」。它提醒我們：文化遺產並不只屬於某一個國家，而是屬於全人類的記憶。</p>
          </div>
        </section>

        <section class="article-section article-conclusion">
          <figure class="section-photo"><img src="./assets/places/Temple%20of%20Debod/section6.jpg" alt="夕陽下的德波神廟" loading="lazy"></figure>
          <div class="section-copy">
            <p class="section-index">06</p>
            <h2>簡短總結</h2>
            <p>德波神廟是一座來自古埃及、重生於馬德里的神聖建築。它結合了古代宗教、努比亞歷史、國際考古救援與現代城市景觀。</p>
            <p>對遊客而言，它是馬德里最浪漫的日落地點之一；對歷史學家而言，它是文化遺產保護的重要見證；對藝術家而言，它則是一場關於石頭、光線與時間的詩。</p>
            <blockquote>如果說馬德里王宮象徵西班牙王權，那麼德波神廟則像是一位遠道而來的古老旅人，靜靜站在城市高處，訴說尼羅河、神明與人類記憶的故事。</blockquote>
          </div>
        </section>
      </div>`
  },
  "Lhardy Restaurante": {
    title: "Lhardy Restaurante",
    introduction: "Lhardy Restaurante 是馬德里最具歷史感與代表性的餐廳之一。它位於市中心的 Carrera de San Jerónimo，距離太陽門廣場不遠。這裡不只是一間餐廳，也像是一座保存城市記憶的歷史空間。",
    content: `
      <div class="article-body text-led-article" lang="zh-Hant">
        <section class="article-section">
          <div class="section-copy">
            <p class="section-index">01</p>
            <h2>基本介紹</h2>
            <p>Lhardy Restaurante 創立於十九世紀，是馬德里傳統高級餐飲文化的重要象徵。旅人可以透過味覺、裝潢與服務方式，感受老馬德里的優雅氣氛。</p>
          </div>
        </section>

        <section class="article-section">
          <div class="section-copy">
            <p class="section-index">02</p>
            <h2>歷史背景</h2>
            <p>Lhardy 創立於十九世紀上半葉，見證了馬德里從傳統王都逐漸轉變為現代都市的過程。當時的餐廳、咖啡館與沙龍，不只是用餐場所，也是政治人物、作家、藝術家、貴族與知識分子交流思想的社交空間。</p>
            <p>Lhardy 因地理位置優越，又具有精緻的法式與西班牙餐飲風格，很快成為馬德里上流社會與文化圈的重要聚會地點。</p>
          </div>
        </section>

        <section class="article-section">
          <div class="section-copy">
            <p class="section-index">03</p>
            <h2>建築與室內氛圍</h2>
            <p>走進 Lhardy，最吸引人的並不只是菜單，而是它濃厚的古典氣息。店內保留了木質櫃檯、鏡面裝飾、銀器、傳統餐具與典雅的室內設計，整體氛圍像是一座十九世紀的城市沙龍。</p>
            <p>燈光、家具與服務節奏都帶有老派歐洲餐廳的儀式感，讓客人彷彿暫時離開現代馬德里，進入一個更緩慢、更講究禮儀的時代。</p>
          </div>
        </section>

        <section class="article-section">
          <div class="section-copy">
            <p class="section-index">04</p>
            <h2>美食特色</h2>
            <p>Lhardy 最著名的料理是 <strong>Cocido Madrileño</strong>，也就是馬德里燉菜。這道經典料理通常以鷹嘴豆、蔬菜、肉類、香腸與高湯組成。</p>
            <ol class="architecture-list">
              <li><strong>第一階段</strong><span>先喝濃郁的湯。</span></li>
              <li><strong>第二階段</strong><span>享用鷹嘴豆與蔬菜。</span></li>
              <li><strong>第三階段</strong><span>最後品嚐肉類。</span></li>
            </ol>
            <p>這道菜原本帶有家常與庶民色彩，但在 Lhardy 被提升成一種精緻而有儀式感的餐飲體驗。餐廳也以冷盤、肉派、甜點、熱湯與傳統西班牙菜聞名。</p>
          </div>
        </section>

        <section class="article-section">
          <div class="section-copy">
            <p class="section-index">05</p>
            <h2>文化意義</h2>
            <p>Lhardy 的重要性不只在於它歷史悠久，更在於它見證了馬德里的政治、文學與社交生活。許多重要人物曾在這類餐廳中聚會、討論、談判或交流觀點，因此 Lhardy 可說是馬德里公共生活的一部分。</p>
            <aside class="article-callout">它代表的是一種城市文化：用餐不只是滿足味覺，也是一種社交、身分與文化品味的展現。</aside>
          </div>
        </section>

        <section class="article-section article-conclusion">
          <div class="section-copy">
            <p class="section-index">06</p>
            <h2>總結</h2>
            <p>Lhardy Restaurante 是一間能夠「吃到歷史」的餐廳。它結合了十九世紀馬德里的優雅、政治與文學記憶，以及西班牙傳統料理的深厚味道。</p>
            <blockquote>對旅人而言，這裡不只是用餐地點，而是一扇通往老馬德里的門；一碗湯、一份燉菜、一件銀器，甚至一面古老鏡子，都在訴說這座城市的故事。</blockquote>
          </div>
        </section>
      </div>`
  }
};

let articles = builtInArticles;

function escapeHtml(value = "") {
  return value.replace(/[&<>"']/g, (character) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;"
  })[character]);
}

function formatInline(value) {
  return escapeHtml(value).replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
}

function formatBody(value = "") {
  const blocks = value.trim().split(/\n\s*\n/).filter(Boolean);
  return blocks.map((block) => {
    const lines = block.split("\n").map((line) => line.trim()).filter(Boolean);
    if (lines.every((line) => /^-\s+/.test(line))) {
      return `<ul class="history-list">${lines.map((line) => `<li>${formatInline(line.replace(/^-\s+/, ""))}</li>`).join("")}</ul>`;
    }
    if (lines.every((line) => /^\d+[.)]\s+/.test(line))) {
      return `<ol class="history-list">${lines.map((line) => `<li>${formatInline(line.replace(/^\d+[.)]\s+/, ""))}</li>`).join("")}</ol>`;
    }
    return `<p>${lines.map(formatInline).join("<br>")}</p>`;
  }).join("");
}

function structuredArticle(article) {
  const sections = Array.isArray(article.sections) ? article.sections : [];
  return `<div class="article-body" lang="zh-Hant">${sections.map((section, index) => {
    const hasCopy = Boolean(section.title || section.body || section.quote);
    return `
    <section class="article-section${hasCopy ? "" : " infographic-only"}">
      ${section.photo ? `<figure class="section-photo"><img src="${escapeHtml(section.photo)}" alt="${escapeHtml(section.photoAlt || section.title)}" loading="lazy"></figure>` : ""}
      ${hasCopy ? `<div class="section-copy">
        <p class="section-index">${String(index + 1).padStart(2, "0")}</p>
        ${section.title ? `<h2>${escapeHtml(section.title)}</h2>` : ""}
        ${formatBody(section.body)}
        ${section.quote ? `<blockquote class="article-callout">${formatInline(section.quote)}</blockquote>` : ""}
      </div>` : ""}
    </section>`;
  }).join("")}</div>`;
}

async function loadEditedContent() {
  try {
    const response = await fetch("./data/content.json", { cache: "no-store" });
    if (!response.ok) return;
    const edited = await response.json();
    articles = { ...builtInArticles };
    Object.entries(edited).forEach(([name, article]) => {
      articles[name] = { ...article, content: structuredArticle(article) };
    });
  } catch (error) {
    console.info("Using the built-in guide content.", error);
  }
}

const $ = (selector) => document.querySelector(selector);
const loginScreen = $("#loginScreen");
const guideScreen = $("#guideScreen");
const loginForm = $("#loginForm");
const loginError = $("#loginError");
const participantName = $("#participantName");
const tripCode = $("#tripCode");
const participantGreeting = $("#participantGreeting");
const dayFilter = $("#dayFilter");
const destinationGrid = $("#destinationGrid");
const placeCount = $("#placeCount");
const logoutButton = $("#logoutButton");
const guideHome = $("#guideHome");
const placePage = $("#placePage");
const backButton = $("#backButton");
let activeDay = "All";

function normalizeCode(value) {
  return value.trim().toUpperCase().replace(/\s+/g, "");
}

function getSavedParticipant() {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY)); } catch { return null; }
}

function photoName(name) {
  return name
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "") + ".jpg";
}

function showGuide(name) {
  loginScreen.classList.add("is-hidden");
  guideScreen.classList.remove("is-hidden");
  participantGreeting.textContent = `Welcome, ${name}`;
  render();
  openFromHash();
}

function showLogin() {
  guideScreen.classList.add("is-hidden");
  loginScreen.classList.remove("is-hidden");
  participantName.focus();
}

function render() {
  dayFilter.innerHTML = ["All", ...days.map(({ day }) => day)]
    .map((day) => `<button type="button" class="${day === activeDay ? "is-active" : ""}" data-day="${day}">${day === "All" ? "All places" : `Day ${day}`}</button>`)
    .join("");

  const visible = activeDay === "All" ? places : places.filter((place) => place.day === Number(activeDay));
  placeCount.textContent = `${visible.length} place${visible.length === 1 ? "" : "s"}`;
  destinationGrid.innerHTML = visible.map((place) => {
    const index = places.indexOf(place);
    const colors = palette[index % palette.length];
    const cardPhoto = articles[place.name]?.cover || `./assets/places/${photoName(place.name)}`;
    return `
      <button class="destination-card" type="button" data-index="${index}" style="--card-color:${colors[0]};--accent-color:${colors[1]}">
        <img src="${cardPhoto}" alt="" onerror="this.hidden=true" />
        <span class="card-number">${String(index + 1).padStart(2, "0")}</span>
        <span class="card-meta">Day ${place.day} · ${place.city}</span>
        <strong>${place.name}</strong>
        <span class="card-type">${place.type}</span>
      </button>`;
  }).join("");

  dayFilter.querySelectorAll("[data-day]").forEach((button) => {
    button.addEventListener("click", () => {
      activeDay = button.dataset.day === "All" ? "All" : Number(button.dataset.day);
      render();
    });
  });

  destinationGrid.querySelectorAll("[data-index]").forEach((button) => {
    button.addEventListener("click", () => openPlace(Number(button.dataset.index)));
  });
}

function openPlace(index) {
  const place = places[index];
  const colors = palette[index % palette.length];
  $("#placeNumber").textContent = String(index + 1).padStart(2, "0");
  $("#placeMeta").textContent = `Day ${place.day} · ${place.city} · ${place.type}`;
  const article = articles[place.name];
  $("#placePageTitle").textContent = article?.title || place.name;
  $("#placeIntroduction").textContent = article?.introduction || "Photos and location notes will be added here.";
  $("#placeArticle").innerHTML = article?.content || `
    <div class="content-placeholder">
      <p class="kicker">About this place</p>
      <h2>Story in progress</h2>
      <p>Your photos and information will complete this guide page.</p>
    </div>`;
  $("#placeHero").style.setProperty("--detail-color", colors[0]);
  $("#placeHero").style.setProperty("--detail-accent", colors[1]);
  const photo = $("#placePhoto");
  photo.hidden = false;
  photo.src = article?.cover || `./assets/places/${photoName(place.name)}`;
  photo.alt = place.name;
  photo.onerror = () => { photo.hidden = true; };
  guideHome.classList.add("is-hidden");
  placePage.classList.remove("is-hidden");
  setupRevealAnimations();
  window.scrollTo(0, 0);
  const nextHash = `#place-${index + 1}`;
  if (window.location.hash !== nextHash) history.pushState({ place: index }, "", nextHash);
}

function setupRevealAnimations() {
  const sections = [...document.querySelectorAll(".article-section")];
  if (!sections.length) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) {
    sections.forEach((section) => section.classList.add("is-visible"));
    return;
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  }, { threshold: 0, rootMargin: "35% 0px 35% 0px" });
  sections.forEach((section) => observer.observe(section));
}

function showCollection(updateHistory = true) {
  placePage.classList.add("is-hidden");
  guideHome.classList.remove("is-hidden");
  if (updateHistory && window.location.hash) history.pushState({}, "", window.location.pathname);
  window.scrollTo(0, 0);
}

function openFromHash() {
  const match = window.location.hash.match(/^#place-(\d+)$/);
  const index = match ? Number(match[1]) - 1 : -1;
  if (index >= 0 && index < places.length) openPlace(index);
  else showCollection(false);
}

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = participantName.value.trim();
  if (!name) { loginError.textContent = "Please enter your name."; return; }
  if (normalizeCode(tripCode.value) !== TRIP_CODE) {
    loginError.textContent = "That trip code does not match.";
    tripCode.select();
    return;
  }
  loginError.textContent = "";
  localStorage.setItem(STORAGE_KEY, JSON.stringify({ name }));
  showGuide(name);
});

logoutButton.addEventListener("click", () => {
  localStorage.removeItem(STORAGE_KEY);
  participantName.value = "";
  tripCode.value = "";
  showLogin();
});

backButton.addEventListener("click", () => history.back());
window.addEventListener("popstate", openFromHash);

async function initialize() {
  await loadEditedContent();
  const saved = getSavedParticipant();
  if (saved?.name) showGuide(saved.name); else showLogin();
}

initialize();
