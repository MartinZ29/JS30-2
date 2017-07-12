$(document).ready(function(){
    function setDate(){
        const now = new Date();
        const seconds = now.getSeconds();
        const secondsDegrees = ((seconds/60)*360);

        const mins = now.getMinutes();
        const minsDegrees = (mins/60) * 360 +90;

        const hours = now.getMinutes();
        const hourDegrees = ((mins /12)*360) + 90;
        
    }
})