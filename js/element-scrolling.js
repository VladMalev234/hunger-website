let a = document.querySelectorAll('[href^="#"').forEach((link) => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        let href = this.getAttribute('href').substring(1);

        const scrollTarget = document.getElementById(href);
        const elementPosition = scrollTarget.getBoundingClientRect().top;
        
        const topOffset = 0
        //(href === 'booking') ? document.querySelector('.navbar').offsetHeight : 0;
        //document.querySelector('.navbar').offsetHeight
       
        const offsetPosition = elementPosition - topOffset;

        window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth'
        })

    })
})
