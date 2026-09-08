
// ==============================
// FESTIVAL SCHEDULE DATA
// 일정 수정은 여기에서
// ==============================
const festivalSchedule = [
  {
    date: "08.07",
    day: "FRI",
    label: "OPENING",
    subtitle: "축제의 시작",
    important: true,
    events: [
      {time:"11:00", title:"개막 행사", description:"개막 퍼포먼스 & 환영 인사", place:"메인 해변", featured:true},
      {time:"14:00", title:"해양 체험 프로그램", description:"SUP · 카약 체험", place:"해양 체험존"},
      {time:"17:00", title:"선셋 라이브", description:"노을과 함께하는 라이브 공연", place:"선셋 스테이지", home:true, badge:"OPENING"},
      {time:"19:30", title:"메인 콘서트", description:"메인 아티스트와 함께하는 개막 무대", place:"메인 스테이지", home:true, badge:"OPENING"},
      {time:"21:30", title:"개막 불꽃쇼", description:"다대포 밤바다를 밝히는 불꽃 이벤트", place:"메인 해변", featured:true, home:true, badge:"FIREWORK"}
    ]
  },
  {
    date: "08.08",
    day: "SAT",
    label: "WEEKEND",
    subtitle: "가장 뜨거운 주말",
    important: true,
    events: [
      {time:"10:00", title:"비치 요가", description:"파도 소리와 함께 여는 힐링 클래스", place:"요가 존", home:true, badge:"WEEKEND"},
      {time:"13:00", title:"패밀리 오션 플레이", description:"온 가족이 함께하는 바다 체험", place:"해양 체험존"},
      {time:"16:00", title:"로컬 푸드 마켓", description:"부산의 맛을 만나는 푸드 프로그램", place:"푸드존"},
      {time:"19:00", title:"선셋 DJ 파티", description:"노을이 지는 해변에서 즐기는 DJ 세션", place:"선셋 라운지", home:true, badge:"WEEKEND"}
    ]
  },
  {
    date: "08.09",
    day: "SUN",
    label: "WEEKEND",
    subtitle: "바다에서 보내는 일요일",
    important: true,
    events: [
      {time:"10:00", title:"모닝 웰니스", description:"바다와 함께 시작하는 건강한 아침", place:"요가 존"},
      {time:"13:00", title:"오션 액티비티", description:"카약과 SUP로 즐기는 다대포", place:"해양 체험존", home:true, badge:"WEEKEND"},
      {time:"18:00", title:"아티스트 라이브", description:"여름 바다를 채우는 특별한 공연", place:"메인 스테이지", home:true, badge:"WEEKEND"},
      {time:"20:30", title:"비치 시네마", description:"모래사장에서 만나는 야간 영화", place:"비치 시네마 존"}
    ]
  },
  {
    date: "08.10",
    day: "MON",
    label: "ACTIVITY",
    subtitle: "체험으로 채우는 하루",
    important: false,
    events: [
      {time:"10:00", title:"오션 클린 워크", description:"다대포 해변을 함께 가꾸는 시간", place:"안내 부스"},
      {time:"13:00", title:"키즈 비치 클래스", description:"어린이를 위한 바다 체험 프로그램", place:"키즈 존"},
      {time:"17:00", title:"선셋 버스킹", description:"노을과 함께하는 로컬 아티스트 공연", place:"선셋 스테이지", home:true, badge:"LIVE"},
      {time:"19:00", title:"나이트 푸드 마켓", description:"밤바다와 함께 즐기는 로컬 메뉴", place:"푸드존"}
    ]
  },
  {
    date: "08.11",
    day: "TUE",
    label: "BEACH",
    subtitle: "파도와 가까워지는 하루",
    important: false,
    events: [
      {time:"11:00", title:"샌드 아트 클래스", description:"모래로 만드는 나만의 바다 작품", place:"체험존"},
      {time:"14:00", title:"SUP 입문 클래스", description:"처음이어도 안전하게 즐기는 SUP", place:"해양 체험존"},
      {time:"18:00", title:"어쿠스틱 선셋", description:"파도 소리와 함께하는 소규모 라이브", place:"선셋 스테이지"},
      {time:"21:00", title:"스타라이트 비치", description:"별빛 아래 쉬어가는 밤바다 프로그램", place:"라운지 존"}
    ]
  },
  {
    date: "08.12",
    day: "WED",
    label: "SUNSET",
    subtitle: "노을을 기다리는 시간",
    important: false,
    events: [
      {time:"10:00", title:"선라이즈 요가", description:"아침 햇살과 함께하는 비치 요가", place:"요가 존"},
      {time:"13:00", title:"워터 플레이 워크숍", description:"온 가족이 함께하는 물놀이 체험", place:"키즈 존"},
      {time:"17:00", title:"부산 푸드 페스티벌", description:"로컬 셰프와 함께하는 특별 메뉴", place:"푸드존"},
      {time:"19:30", title:"피날레 카운트다운", description:"마지막 날을 앞둔 선셋 라이브", place:"메인 스테이지"}
    ]
  },
  {
    date: "08.13",
    day: "THU",
    label: "FINALE",
    subtitle: "축제의 마지막 밤",
    important: true,
    events: [
      {time:"13:00", title:"피날레 오션 체험", description:"축제의 마지막 해양 액티비티", place:"해양 체험존"},
      {time:"17:00", title:"페어웰 선셋", description:"다대포의 노을과 함께하는 작별 무대", place:"선셋 스테이지"},
      {time:"20:00", title:"피날레 콘서트", description:"축제의 마지막을 장식하는 메인 공연", place:"메인 스테이지"},
      {time:"21:30", title:"피날레 불꽃쇼", description:"음악과 불꽃으로 완성하는 축제의 마지막 밤", place:"메인 해변", featured:true, home:true, badge:"FINALE · FIREWORK"}
    ]
  }
];

document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.querySelector(".menu-btn");
  const gnb = document.querySelector(".gnb");
  if(menuBtn && gnb){
    menuBtn.addEventListener("click", () => gnb.classList.toggle("open"));
    gnb.querySelectorAll("a").forEach(a => a.addEventListener("click", () => gnb.classList.remove("open")));
  }

  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", e => {
      const id = link.getAttribute("href");
      if(id.length > 1){
        const target = document.querySelector(id);
        if(target){
          e.preventDefault();
          target.scrollIntoView({behavior:"smooth", block:"start"});
        }
      }
    });
  });

  // Home program slider: pointer drag, touch swipe and page indicators
  const programSlider = document.querySelector("[data-program-slider]");
  if(programSlider){
    const viewport = programSlider.querySelector("[data-program-viewport]");
    const dots = [...programSlider.querySelectorAll("[data-program-page]")];
    let activePage = 0;
    let pointerId = null;
    let startX = 0;
    let startScrollLeft = 0;
    let didDrag = false;
    let suppressLinkClick = false;
    let scrollFrame = null;

    const pageCount = dots.length;
    const pageWidth = () => viewport.clientWidth;
    const setActivePage = page => {
      activePage = Math.max(0, Math.min(pageCount - 1, page));
      dots.forEach((dot, index) => {
        const isActive = index === activePage;
        dot.classList.toggle("is-active", isActive);
        dot.setAttribute("aria-current", String(isActive));
      });
    };
    const goToPage = (page, behavior = "smooth") => {
      const nextPage = Math.max(0, Math.min(pageCount - 1, page));
      viewport.scrollTo({left:nextPage * pageWidth(), behavior});
      setActivePage(nextPage);
    };

    viewport.addEventListener("pointerdown", event => {
      if(event.pointerType === "mouse" && event.button !== 0) return;
      pointerId = event.pointerId;
      startX = event.clientX;
      startScrollLeft = viewport.scrollLeft;
      didDrag = false;
      viewport.setPointerCapture(pointerId);
      viewport.classList.add("is-dragging");
    });

    viewport.addEventListener("pointermove", event => {
      if(event.pointerId !== pointerId) return;
      const distance = event.clientX - startX;
      if(Math.abs(distance) > 6) didDrag = true;
      viewport.scrollLeft = startScrollLeft - distance;
      if(didDrag) event.preventDefault();
    });

    const finishDrag = event => {
      if(event.pointerId !== pointerId) return;
      const distance = event.clientX - startX;
      const startPage = Math.round(startScrollLeft / pageWidth());
      const targetPage = Math.abs(distance) > 45
        ? startPage + (distance < 0 ? 1 : -1)
        : Math.round(viewport.scrollLeft / pageWidth());

      suppressLinkClick = didDrag;
      if(viewport.hasPointerCapture(pointerId)) viewport.releasePointerCapture(pointerId);
      pointerId = null;
      viewport.classList.remove("is-dragging");
      goToPage(targetPage);
      window.setTimeout(() => { suppressLinkClick = false; }, 350);
    };

    viewport.addEventListener("pointerup", finishDrag);
    viewport.addEventListener("pointercancel", finishDrag);
    viewport.addEventListener("click", event => {
      if(suppressLinkClick && event.target.closest("a")){
        event.preventDefault();
        event.stopPropagation();
      }
    }, true);

    viewport.addEventListener("scroll", () => {
      if(scrollFrame) cancelAnimationFrame(scrollFrame);
      scrollFrame = requestAnimationFrame(() => {
        setActivePage(Math.round(viewport.scrollLeft / pageWidth()));
      });
    }, {passive:true});

    viewport.addEventListener("keydown", event => {
      if(event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
      event.preventDefault();
      goToPage(activePage + (event.key === "ArrowRight" ? 1 : -1));
    });

    dots.forEach(dot => {
      dot.addEventListener("click", () => goToPage(Number(dot.dataset.programPage)));
    });

    window.addEventListener("resize", () => goToPage(activePage, "auto"));
    setActivePage(0);
  }

  // Home schedule slider (independent from the program slider)
  const homeScheduleSlider = document.querySelector("[data-home-schedule-slider]");
  if(homeScheduleSlider){
    const viewport = homeScheduleSlider.querySelector("[data-home-schedule-viewport]");
    const dotsWrap = homeScheduleSlider.querySelector("[data-home-schedule-dots]");
    const featuredEvents = festivalSchedule.flatMap(schedule =>
      schedule.events
        .filter(event => event.home)
        .map(event => ({schedule, event}))
    ).slice(0, 9);
    const pages = Array.from({length:3}, (_, index) => featuredEvents.slice(index * 3, index * 3 + 3));

    viewport.innerHTML = pages.map((page, pageIndex) => `
      <div class="home-schedule-slide" role="group" aria-label="주요 일정 ${pageIndex + 1}페이지">
        ${page.map(({schedule, event}) => {
          const dayNumber = Number(schedule.date.slice(-2));
          const dayText = String(dayNumber).padStart(2, "0");
          const badge = event.badge || schedule.label;
          return `
            <a class="home-schedule-card${event.featured ? " is-highlight" : ""}" href="program.html?day=${dayNumber}#schedule" draggable="false">
              <div class="schedule-date"><strong>${dayText}</strong><span>AUG · ${schedule.day}</span></div>
              <div class="home-schedule-card__body">
                <span class="schedule-tag">${badge}</span>
                <h3>${event.title}</h3>
                <p>⌖ ${event.place}</p>
              </div>
              <time>${event.time}</time>
            </a>`;
        }).join("")}
      </div>`).join("");

    dotsWrap.innerHTML = pages.map((_, index) => `
      <button class="home-schedule-slider__dot${index === 0 ? " is-active" : ""}" type="button" data-home-schedule-page="${index}" aria-label="주요 일정 ${index + 1}페이지" aria-current="${index === 0}"></button>
    `).join("");

    const dots = [...dotsWrap.querySelectorAll("[data-home-schedule-page]")];
    let activePage = 0;
    let pointerId = null;
    let startX = 0;
    let startScrollLeft = 0;
    let didDrag = false;
    let suppressCardClick = false;
    let scrollFrame = null;
    const pageWidth = () => viewport.clientWidth;

    const setActivePage = page => {
      activePage = Math.max(0, Math.min(pages.length - 1, page));
      dots.forEach((dot, index) => {
        const isActive = index === activePage;
        dot.classList.toggle("is-active", isActive);
        dot.setAttribute("aria-current", String(isActive));
      });
    };
    const goToPage = (page, behavior = "smooth") => {
      const nextPage = Math.max(0, Math.min(pages.length - 1, page));
      viewport.scrollTo({left:nextPage * pageWidth(), behavior});
      setActivePage(nextPage);
    };

    viewport.addEventListener("pointerdown", event => {
      if(event.pointerType === "mouse" && event.button !== 0) return;
      pointerId = event.pointerId;
      startX = event.clientX;
      startScrollLeft = viewport.scrollLeft;
      didDrag = false;
      viewport.setPointerCapture(pointerId);
      viewport.classList.add("is-dragging");
    });
    viewport.addEventListener("pointermove", event => {
      if(event.pointerId !== pointerId) return;
      const distance = event.clientX - startX;
      if(Math.abs(distance) > 6) didDrag = true;
      viewport.scrollLeft = startScrollLeft - distance;
      if(didDrag) event.preventDefault();
    });
    const finishScheduleDrag = event => {
      if(event.pointerId !== pointerId) return;
      const distance = event.clientX - startX;
      const startPage = Math.round(startScrollLeft / pageWidth());
      const targetPage = Math.abs(distance) > 45
        ? startPage + (distance < 0 ? 1 : -1)
        : Math.round(viewport.scrollLeft / pageWidth());

      suppressCardClick = didDrag;
      if(viewport.hasPointerCapture(pointerId)) viewport.releasePointerCapture(pointerId);
      pointerId = null;
      viewport.classList.remove("is-dragging");
      goToPage(targetPage);
      window.setTimeout(() => { suppressCardClick = false; }, 350);
    };
    viewport.addEventListener("pointerup", finishScheduleDrag);
    viewport.addEventListener("pointercancel", finishScheduleDrag);
    viewport.addEventListener("click", event => {
      if(suppressCardClick && event.target.closest("a")){
        event.preventDefault();
        event.stopPropagation();
      }
    }, true);
    viewport.addEventListener("scroll", () => {
      if(scrollFrame) cancelAnimationFrame(scrollFrame);
      scrollFrame = requestAnimationFrame(() => setActivePage(Math.round(viewport.scrollLeft / pageWidth())));
    }, {passive:true});
    viewport.addEventListener("keydown", event => {
      if(event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
      event.preventDefault();
      goToPage(activePage + (event.key === "ArrowRight" ? 1 : -1));
    });
    dots.forEach(dot => dot.addEventListener("click", () => goToPage(Number(dot.dataset.homeSchedulePage))));
    window.addEventListener("resize", () => goToPage(activePage, "auto"));
  }

  // Program page schedule tabs and timeline
  const scheduleRoot = document.querySelector("[data-festival-schedule]");
  if(scheduleRoot){
    const tabsWrap = scheduleRoot.querySelector("[data-schedule-tabs]");
    const panel = scheduleRoot.querySelector("[data-schedule-panel]");
    const validDays = festivalSchedule.map(schedule => Number(schedule.date.slice(-2)));
    const requestedDay = Number(new URLSearchParams(window.location.search).get("day"));
    let activeDay = validDays.includes(requestedDay) ? requestedDay : 7;

    tabsWrap.innerHTML = festivalSchedule.map(schedule => {
      const dayNumber = Number(schedule.date.slice(-2));
      return `
        <button class="festival-date-tab" id="schedule-tab-${dayNumber}" type="button" role="tab" data-schedule-day="${dayNumber}" aria-controls="schedule-day-panel" aria-selected="false">
          <strong>${schedule.date}</strong>
          <span>${schedule.day}</span>
          ${schedule.important ? `<small><i aria-hidden="true"></i>${schedule.label}</small>` : ""}
        </button>`;
    }).join("");
    panel.id = "schedule-day-panel";

    const renderScheduleDay = (dayNumber, bringTabIntoView = false) => {
      const schedule = festivalSchedule.find(item => Number(item.date.slice(-2)) === dayNumber) || festivalSchedule[0];
      activeDay = Number(schedule.date.slice(-2));

      [...tabsWrap.querySelectorAll("[data-schedule-day]")].forEach(tab => {
        const isActive = Number(tab.dataset.scheduleDay) === activeDay;
        tab.classList.toggle("is-active", isActive);
        tab.setAttribute("aria-selected", String(isActive));
        tab.tabIndex = isActive ? 0 : -1;
        if(isActive && bringTabIntoView) tab.scrollIntoView({behavior:"smooth", block:"nearest", inline:"center"});
      });

      panel.classList.remove("is-entering");
      panel.innerHTML = `
        <div class="festival-day-heading">
          <div class="festival-day-heading__date"><strong>${schedule.date}</strong><span>${schedule.day}</span></div>
          <p>${schedule.label} · ${schedule.subtitle}</p>
        </div>
        <div class="festival-timeline">
          ${schedule.events.map(event => `
            <article class="festival-timeline__item${event.featured ? " is-featured" : ""}">
              <time class="festival-timeline__time">${event.time}</time>
              <div class="festival-timeline__content">
                ${event.featured ? `<span class="festival-timeline__badge">${event.badge || schedule.label}</span>` : ""}
                <h3>${event.title}</h3>
                <p>${event.description}</p>
                <p>⌖ ${event.place}</p>
              </div>
            </article>`).join("")}
        </div>`;
      void panel.offsetWidth;
      panel.classList.add("is-entering");
    };

    tabsWrap.addEventListener("click", event => {
      const tab = event.target.closest("[data-schedule-day]");
      if(!tab) return;
      const dayNumber = Number(tab.dataset.scheduleDay);
      const url = new URL(window.location.href);
      url.searchParams.set("day", dayNumber);
      url.hash = "schedule";
      window.history.replaceState(null, "", url);
      renderScheduleDay(dayNumber, true);
    });
    tabsWrap.addEventListener("keydown", event => {
      if(event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
      event.preventDefault();
      const index = validDays.indexOf(activeDay);
      const nextIndex = Math.max(0, Math.min(validDays.length - 1, index + (event.key === "ArrowRight" ? 1 : -1)));
      const nextDay = validDays[nextIndex];
      renderScheduleDay(nextDay, true);
      tabsWrap.querySelector(`[data-schedule-day="${nextDay}"]`).focus();
    });

    renderScheduleDay(activeDay, true);
    window.addEventListener("popstate", () => {
      const dayFromUrl = Number(new URLSearchParams(window.location.search).get("day"));
      renderScheduleDay(validDays.includes(dayFromUrl) ? dayFromUrl : 7, true);
    });
  }

  // Program list: filters, progressive reveal and hash navigation
  const categoryBtns = document.querySelectorAll("[data-program-filter]");
  const programCards = document.querySelectorAll("[data-program-category]");
  const extraProgramCards = [...document.querySelectorAll("[data-program-extra]")];
  const programMoreBtn = document.querySelector("[data-program-more]");
  const programMoreWrap = document.querySelector("[data-program-more-wrap]");
  let programExpanded = false;
  let programHighlightTimer = null;

  if(programCards.length){
    const setProgramExpanded = (expanded, animate = false) => {
      programExpanded = expanded;
      extraProgramCards.forEach((card, index) => {
        card.hidden = !expanded;
        card.classList.remove("is-revealing");
        if(expanded && animate){
          card.style.animationDelay = `${index * 45}ms`;
          card.classList.add("is-revealing");
        }else{
          card.style.animationDelay = "";
        }
      });
      if(programMoreBtn) programMoreBtn.setAttribute("aria-expanded", String(expanded));
      if(programMoreWrap) programMoreWrap.hidden = expanded;
    };

    const selectProgramFilter = filter => {
      categoryBtns.forEach(btn => btn.classList.toggle("active", btn.dataset.programFilter === filter));

      if(filter === "all"){
        programCards.forEach(card => { card.hidden = card.hasAttribute("data-program-extra"); });
        programExpanded = false;
        if(programMoreBtn) programMoreBtn.setAttribute("aria-expanded", "false");
        if(programMoreWrap) programMoreWrap.hidden = false;
      }else{
        programCards.forEach(card => {
          card.hidden = card.dataset.programCategory !== filter;
          card.classList.remove("is-revealing");
          card.style.animationDelay = "";
        });
        programExpanded = false;
        if(programMoreBtn) programMoreBtn.setAttribute("aria-expanded", "false");
        if(programMoreWrap) programMoreWrap.hidden = true;
      }
    };

    const highlightProgramFromHash = () => {
      const match = window.location.hash.match(/^#program-(\d{1,2})$/);
      if(!match) return;

      const number = Number(match[1]);
      if(number < 1 || number > 12) return;
      const target = document.getElementById(`program-${number}`);
      if(!target) return;

      programCards.forEach(card => card.classList.remove("is-hash-target"));
      categoryBtns.forEach(btn => btn.classList.toggle("active", btn.dataset.programFilter === "all"));
      programCards.forEach(card => { card.hidden = number <= 6 && card.hasAttribute("data-program-extra"); });
      setProgramExpanded(number > 6);

      window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => {
          target.scrollIntoView({behavior:"smooth", block:"center"});
          target.classList.remove("is-hash-target");
          void target.offsetWidth;
          target.classList.add("is-hash-target");
          if(programHighlightTimer) window.clearTimeout(programHighlightTimer);
          programHighlightTimer = window.setTimeout(() => target.classList.remove("is-hash-target"), 1400);
        });
      });
    };

    categoryBtns.forEach(btn => {
      btn.addEventListener("click", () => selectProgramFilter(btn.dataset.programFilter));
    });

    if(programMoreBtn){
      programMoreBtn.addEventListener("click", () => {
        if(!programExpanded) setProgramExpanded(true, true);
      });
    }

    if(window.location.hash) highlightProgramFromHash();
    window.addEventListener("hashchange", highlightProgramFromHash);
    window.addEventListener("popstate", () => window.setTimeout(highlightProgramFromHash, 0));
    window.addEventListener("pageshow", event => {
      if(event.persisted) highlightProgramFromHash();
    });
  }

  // News filters / search
  const tabs = document.querySelectorAll("[data-news-filter]");
  const newsCards = document.querySelectorAll("[data-news-card]");
  const searchInput = document.querySelector("#newsSearch");
  let currentFilter = "all";

  function applyNewsFilter(){
    const q = searchInput ? searchInput.value.trim().toLowerCase() : "";
    newsCards.forEach(card => {
      const cat = card.dataset.category;
      const text = card.innerText.toLowerCase();
      const catOk = currentFilter === "all" || cat === currentFilter;
      const qOk = !q || text.includes(q);
      card.style.display = (catOk && qOk) ? "" : "none";
    });
  }

  tabs.forEach(tab => tab.addEventListener("click", () => {
    tabs.forEach(t => t.classList.remove("active"));
    tab.classList.add("active");
    currentFilter = tab.dataset.newsFilter;
    applyNewsFilter();
  }));
  if(searchInput) searchInput.addEventListener("input", applyNewsFilter);

  // Ticket quantity / totals
  const ticketOptions = document.querySelectorAll(".ticket-option");
  const totalEl = document.querySelector("[data-ticket-total]");
  const summaryName = document.querySelector("[data-summary-name]");
  const summaryQty = document.querySelector("[data-summary-qty]");

  function updateTicketTotal(){
    let total = 0;
    let firstSelected = null;
    ticketOptions.forEach(opt => {
      const qty = Number(opt.querySelector("[data-qty]").textContent || 0);
      const price = Number(opt.dataset.price || 0);
      if(qty > 0 && !firstSelected) firstSelected = opt;
      total += qty * price;
      opt.classList.toggle("selected", qty > 0);
      const radio = opt.querySelector(".ticket-radio");
      if(radio) radio.textContent = qty > 0 ? "✓" : "";
    });
    if(totalEl) totalEl.textContent = total.toLocaleString("ko-KR") + "원";
    if(summaryName && firstSelected) summaryName.textContent = firstSelected.dataset.name;
    if(summaryQty){
      const qtyAll = [...ticketOptions].reduce((s,opt)=>s+Number(opt.querySelector("[data-qty]").textContent||0),0);
      summaryQty.textContent = qtyAll + "매";
    }
  }

  document.querySelectorAll("[data-qty-minus]").forEach(btn => {
    btn.addEventListener("click", () => {
      const opt = btn.closest(".ticket-option");
      const el = opt.querySelector("[data-qty]");
      el.textContent = Math.max(0, Number(el.textContent)-1);
      updateTicketTotal();
    });
  });
  document.querySelectorAll("[data-qty-plus]").forEach(btn => {
    btn.addEventListener("click", () => {
      const opt = btn.closest(".ticket-option");
      const el = opt.querySelector("[data-qty]");
      el.textContent = Math.min(9, Number(el.textContent)+1);
      updateTicketTotal();
    });
  });
  if(ticketOptions.length) updateTicketTotal();
});
