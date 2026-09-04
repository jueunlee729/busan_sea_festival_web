
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

  // Program category filter
  const categoryBtns = document.querySelectorAll("[data-program-filter]");
  const programCards = document.querySelectorAll("[data-program-category]");
  categoryBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      categoryBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const filter = btn.dataset.programFilter;
      programCards.forEach(card => {
        card.style.display = (filter === "all" || card.dataset.programCategory === filter) ? "" : "none";
      });
    });
  });

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
