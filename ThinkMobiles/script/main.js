$(function() {
    const steps = Array.from(document.querySelectorAll('form .step'));
    const nextBtn = document.querySelectorAll('form .next-btn');
    const prevBtn = document.querySelectorAll('form .previouse-btn');
    const form = document.querySelector('form');
    const progress = document.getElementById('progress');
    const circles = document.querySelectorAll('.circle');

    let currentActive = 1;


    nextBtn.forEach(button => {
        button.addEventListener('click', () => {
            changeStep('next');
            currentActive ++;
            if (currentActive > circles.length) {
                currentActive = circles.length;
            };
            update();
        })
    });

    prevBtn.forEach(button => {
        button.addEventListener('click', () => {
            changeStep('prev');
            currentActive --;
            if (currentActive < 1) {
                currentActive = 1;
            };
            update();
        })
    });
    
    form.addEventListener('submit', (e)=> {
        e.preventDefault();
        const inputs = [];
        form.querySelectorAll('input').forEach(input => {
            const {name, value} = input;
            inputs.push({name, value});
        })
        form.reset();
        let index = 0;
        const active = document.querySelector('form .step.active');
        index = steps.indexOf(active);
        steps[index].classList.remove('active');
        steps[0].classList.add('active');
        currentActive = 1;
        update();
    });


    function changeStep(btn) {
        let index = 0;
        const active = document.querySelector('form .step.active');
        index = steps.indexOf(active);
        steps[index].classList.remove('active');
        if(btn === 'next') {
            index ++;
        }else if(btn === 'prev') {
            index --;
        }
        steps[index].classList.add('active');
    };
    function update () {
        circles.forEach((circle, idx) => {
            if(idx < currentActive){
                circle.classList.add('active');
            }else{
                circle.classList.remove('active');
            }
        })
        const actives = document.querySelectorAll('.active');
    }
});