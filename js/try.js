//функция для переключения меню по data атрибуту
let menuNav = document.querySelectorAll('.menu__navigation-item');
let menuWrapper = document.querySelectorAll('.menu-wrapper');
let dataNav, dataWrap;

menuNav.forEach((elem)=> {
    elem.addEventListener('click', e => {
        dataNav = e.target.dataset.menu;
        menuWrapper.forEach((elem)=> {
            dataWrap = dataChecker(elem)
           //!1)  dataWrap = elem.dataset.menu;
            //if(dataWrap == dataNav) {
            //elem.classList.remove('menu-wrapper_hidden');
            //} else if(!elem.classList.contains('menu-wrapper_hidden')) elem.classList.add('menu-wrapper_hidden');
        })
    })
})

function dataChecker(elem) {
    if( elem.dataset.menu == dataNav) {
        elem.classList.remove('menu-wrapper_hidden');
        } else if(!elem.classList.contains('menu-wrapper_hidden')) elem.classList.add('menu-wrapper_hidden');
  
}



 