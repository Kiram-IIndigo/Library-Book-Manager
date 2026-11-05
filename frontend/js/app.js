const PUBLIC_PAGES = ["login", "register"];
const app = document.getElementById("app");

async function render() {
  const page = location.hash.replace("#/", "") || "login";
  document.body.classList.toggle("auth", PUBLIC_PAGES.includes(page));
  try {
    const res = await fetch(`views/${page}.html`);
    if (!res.ok) throw new Error("Not found");
    app.innerHTML = await res.text();
  } catch (e) {
    app.innerHTML =
      '<div class="panel"><h2>Page not found</h2><p>Go back to the <a href="#/dashboard">dashboard</a>.</p></div>';
  }
  document
    .querySelectorAll("#navLinks .nav-link")
    .forEach((a) =>
      a.classList.toggle("active", a.getAttribute("href") === `#/${page}`),
    );
  window.scrollTo(0, 0);
}

window.addEventListener("hashchange", render);
if (!location.hash) location.hash = "#/login";
render();
