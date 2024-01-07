function hideNav() {
    const nav = document.querySelector("nav");
    nav.style.display="none";
}

function showNav() {
    const nav = document.querySelector("nav");
    nav.style.display = "flex";
}
const nav = document.querySelector("nav");
window.addEventListener('scroll', function handleScroll(event) {
    if (window.scrollY > this.lastScrollTop || 0) {
      console.log('scrolling down');
      hideNav();
    } else if (window.scrollY < this.lastScrollTop) {
       showNav();
      console.log('scrolling up');
    }
    this.lastScrollTop = window.scrollY;
  });