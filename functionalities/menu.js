export default function Menu(panelBtn, links, span, menuLinks) {
  const d = document;
  d.addEventListener("click", (e) => {
    let open = `menu`,
      close = `close`;

    if (e.target.matches(panelBtn) || e.target.matches(`${panelBtn} *`)) {
      if (!d.querySelector(links).classList.contains("collapse")) {
        d.querySelector(links).classList.add("collapse");
        d.querySelector(span).innerHTML = close;
      } else if (d.querySelector(links).classList.contains("collapse")) {
        d.querySelector(links).classList.remove("collapse");
        d.querySelector(span).innerHTML = open;
      }
    }

    if (e.target.matches(menuLinks)) {
      d.querySelector(links).classList.remove("collapse");
      d.querySelector(span).innerHTML = open;
    }
  });
}
