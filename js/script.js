const shopBg = document.querySelector('.shop__link');
const shopTrigger = document.querySelector('.shop__link-h');

shopTrigger.onmouseenter = () => {
    shopBg.style.backgroundColor = 'rgba(100,194,158,0.8)';

}
shopTrigger.onmouseleave = () => {
    shopBg.style.backgroundColor = 'transparent';

}