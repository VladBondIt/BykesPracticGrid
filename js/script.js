const oliBg = document.querySelector('#Obg');
const oliTrigger = document.querySelector('#Otrigger');
const barBg = document.querySelector('#Bbg');
const barTrigger = document.querySelector('#Btrigger');
const hulBg = document.querySelector('#Hbg');
const hulTrigger = document.querySelector('#Htrigger');
const shopBg = document.querySelector('.shop__link');
const shopTrigger = document.querySelector('.shop__link-h');

oliTrigger.onmouseenter = () => {
    oliBg.style.backgroundColor = 'rgba(100,194,158,0.8)';

}
oliTrigger.onmouseleave = () => {
    oliBg.style.backgroundColor = 'transparent';

}
barTrigger.onmouseenter = () => {
    barBg.style.backgroundColor = 'rgba(100,194,158,0.8)';

}
barTrigger.onmouseleave = () => {
    barBg.style.backgroundColor = 'transparent';

}
hulTrigger.onmouseenter = () => {
    hulBg.style.backgroundColor = 'rgba(100,194,158,0.8)';

}
hulTrigger.onmouseleave = () => {
    hulBg.style.backgroundColor = 'transparent';

}
shopTrigger.onmouseenter = () => {
    shopBg.style.backgroundColor = 'rgba(100,194,158,0.8)';

}
shopTrigger.onmouseleave = () => {
    shopBg.style.backgroundColor = 'transparent';

}
