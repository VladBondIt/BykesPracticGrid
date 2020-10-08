const bgTriggs = document.querySelectorAll('.bg-trigg');
const bgs = document.querySelectorAll('.bg');

for (let i = 0; i < bgTriggs.length; i++) {
    bgTriggs[i].addEventListener('mousemove', () => {
        for (let i2 = 0; i2 < bgs.length + 1; i2++) {
            if (i === i2) {
                bgs[i2].style.backgroundColor = 'rgba(100,194,158,0.6)';
            } else {
                bgTriggs[i].addEventListener('mouseout', () => {
                    bgs[--i2].style.backgroundColor = 'transparent';
                });
            };
        };
    });
};


