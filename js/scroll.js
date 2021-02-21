window.onload = function () {
    const header = document.querySelector('header');
    console.log(header.scrollTop);

if (header.scrollHeight - header.scrollTop === header.clientHeight) {
    console.log("hi");
}
document.addEventListener('scroll', ()=> {
    console.log(header.scrollTop, header.scrollHeight, header.clientHeight, header.clientWidth, header.offsetWidth, header.offsetHeight,);
    if (header.scrollHeight - header.scrollTop === header.clientHeight) {
        console.log("hi");
    }
})
}

function isInView(el) {
    const element = el.getBoundingClientRect();
    const html = document.documentElement;
    return (
      element.top >= 0 &&
      element.left >= 0 &&
      element.bottom <= (window.innerHeight || html.clientHeight) &&
      element.right <= (window.innerWidth || html.clientWidth)
    );
  }