const shopBg = document.getElementById('bg');
const shopTrigger = document.getElementById('trigger');

shopTrigger.onmouseenter = () => {
    shopBg.style.backgroundColor = 'rgba(100,194,158,0.8)';

}
shopTrigger.onmouseleave = () => {
    shopBg.style.backgroundColor = 'transparent';

}
