(() => {
  const menuBtnRef = document.querySelector("[data-menu-button]");
  const mobileMenuRef = document.querySelector("[data-menu]");

  menuBtnRef.addEventListener("click", () => {
    const expanded =
      menuBtnRef.getAttribute("aria-expanded") === "true" || false;

    menuBtnRef.classList.toggle("is-open");
    menuBtnRef.setAttribute("aria-expanded", !expanded);

    mobileMenuRef.classList.toggle("is-open");
  });
})();

  (() => {
    const refs = {
      toggleLogoBtn: document.querySelector("[data-menu-button]"),
      logo: document.querySelector("[logo-toggle]"),
    };

    refs.toggleLogoBtn.addEventListener("click", toggleLogo);
  
    function toggleLogo() {
      refs.logo.classList.toggle("visually-hidden");
    }

  })();

  (() => {
    const refs = {
      fixHeaderBtn: document.querySelector("[data-menu-button]"),
      logo: document.querySelector("[header-fix]"),
    };

    refs.fixHeaderBtn.addEventListener("click", fixHeader);
  
    function fixHeader() {
      refs.logo.classList.toggle("header__container--fixed");
    }

  })();
