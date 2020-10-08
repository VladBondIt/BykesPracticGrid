const bgTriggs = document.querySelectorAll('.bg-trigg');
const bgs = document.querySelectorAll('.bg');

for (let i = 0; i < bgTriggs.length; i++) {
    bgTriggs[i].addEventListener('mousemove', () => {
        if (i === i) {
            bgs[i].style.backgroundColor = 'rgba(100,194,158,0.6)';
        }
    });
    bgTriggs[i].addEventListener('mouseout', () => {
        bgs[i].style.backgroundColor = 'transparent';
    });
};


