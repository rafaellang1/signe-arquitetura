function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu')
    
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src="imagens/icons/menu-alt-04-svgrepo-com.svg";

        document.querySelector('.header').style.background="transparent";

    }else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src="imagens/icons/close-sm-svgrepo-com.svg";
        
        document.querySelector('.header').style.background="rgba(18, 41, 57, 0.900)"
    }
}