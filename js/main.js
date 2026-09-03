
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
