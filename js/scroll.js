window.onload = function () {
    const header = document.querySelector('header');
    const navbar = document.querySelector('.navbar');
    const navbarLogo = document.querySelector('.navbar__logo')
    //let getValue;

    navbarLogo.addEventListener('click', ()=> {
        if( 910 >= (window.innerWidth) ) { 
        if((!document.querySelector('.navbar__logo-image').classList.contains('rotating') || 
        !document.querySelector('.menu-header').classList.contains('visible')) && navbar.classList.contains('navbar_view')){
            console.log('hello');
            document.querySelector('.navbar__logo-image').classList.add('rotating')
            document.querySelector('.menu-header').classList.add('visible');
        } else {
            console.log('hello2');
            document.querySelector('.navbar__logo-image').classList.remove('rotating')
            document.querySelector('.menu-header').classList.remove('visible');
        }
    }
})

document.addEventListener('scroll', ()=> {
   if(isOutOfView(header)) {
       if(navbar.classList.contains('navbar_view')) {

       } 
       else navbar.classList.add('navbar_view')

   } else {
            navbar.classList.remove('navbar_view')
            document.querySelector('.navbar__logo-image').classList.remove('rotating')
            document.querySelector('.menu-header').classList.remove('visible');
}
})
}

function isOutOfView(el) {
    const element = el.getBoundingClientRect();
    //const html = document.documentElement;
    //console.log('element', element);
    //console.log('elementTop', Math.abs(Math.round(element.top))  );
    //console.log('elementHeight', Math.round(element.height));
    ////console.log(html);
    ////console.log('elementLeft', element.left);
    //console.log('elementBottom', element.bottom);
    //console.log('windowInnerHeight', window.innerHeight, 'htmlClientHeight', html.clientHeight);
    ////console.log('elementRight', element.right);
    //console.log('windowInnerWidth', window.innerWidth, 'htmlClientWidth', html.clientWidth);
    //console.log('------------------------------------------------------');
    //console.log('---------------------------------------------------------');
//Проверяем закончился ли элемент
    return (
      Math.abs(Math.round(element.top)) >= Math.round(element.height) &&  Math.round(element.bottom) <= 0
    );
  }
