const menuBlock = $(".fullscreen-menu");
const activeClass = "active";

const showMenuBlock = () => {
  if (menuBlock.length === 0) return new Error("Блока меню не существует");
  menuBlock.addClass(activeClass);
};

const hideMenuBlock = () => {
  menuBlock.removeClass(activeClass);
};

const preventDefault = e => e.preventDefault();

const disableScroll = () => {
  document.addEventListener("wheel", preventDefault, { passive: false });
};

const enableScroll = () => {
  document.removeEventListener("wheel", preventDefault, { passive: false });
};

$(".hamburger").click(e => {
  e.preventDefault();
  showMenuBlock();
  disableScroll();
});

$(".fullscreen-menu__close").click(e => {
  e.preventDefault();
  hideMenuBlock();
  enableScroll();
});
