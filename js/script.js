const bgTriggs = document.querySelectorAll('.bg-trigg');
const bgs = document.querySelectorAll('.bg');

for (let i = 0; i < bgTriggs.length; i++) {
    bgTriggs[i].addEventListener('mousemove', (e) => {
        for (let i2 = 0; i2 < bgs.length; i2++) {
            bgs[i2];
            if (i === i2) {
                bgs[i2].style.backgroundColor = 'rgba(100,194,158,0.6)';
            }
        };
    });
    bgTriggs[i].addEventListener('mouseout', (e) => {
        for (let i2 = 0; i2 < bgs.length; i2++) {
            bgs[i2];
            if (i === i2) {
                bgs[i2].style.backgroundColor = 'transparent';
            }
        };
    });
};


