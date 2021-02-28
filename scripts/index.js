
let gamburger = document.querySelector(".header__gamburger");
let navigation = document.querySelector(".navigation");


gamburger.addEventListener('click', () => {
    navigation.classList.add('navigation_open');
    gamburger.addEventListener('click', () => {
        navigation.classList.remove('navigation_open');
    });  
});

