const secondHand = document.querySelector('.second');
const minsHand = document.querySelector('.minute');
const hourHand = document.querySelector('.hour');

    function setDate(){
        const now = new Date();

        const seconds = now.getSeconds();
        const secondsDegrees = ((seconds/60)*360);
        secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

        const mins = now.getMinutes();
        const minsDegrees = (mins/60) * 360 +90;

        const hours = now.getMinutes();
        const hourDegrees = ((mins /12)*360) + 90;

        hourHand.style.transform = 'rotate(${minsDegrees}deg)';
    }

    setInterval(setDate,1000);
