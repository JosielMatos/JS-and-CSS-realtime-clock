const hourHand = document.querySelector('.hour-hand');
    const secondHand = document.querySelector('.second-hand');
    const minsHand = document.querySelector('.min-hand');

    function setDate() {
      const now = new Date();

      const hour = now.getHours();
      const hourDegrees = ((hour / 12) * 360) + 90;
      hourHand.style.transform = `rotate(${hourDegrees}deg)`

      const mins = now.getMinutes()
      const minsDegrees = ((mins / 60) * 360) + 90;
      minsHand.style.transform = `rotate(${minsDegrees}deg)`

      const seconds = now.getSeconds();
      const secondsDegrees = ((seconds / 60) * 360) + 90;
      secondHand.style.transform = `rotate(${secondsDegrees}deg)`

    }



    function digitalClock(){
    let date = new Date();
    let h = date.getHours(); 
    let m = date.getMinutes(); 
    let s = date.getSeconds(); 
    let session = "AM";
    
    if(h == 0){
        h = 12;
    }
    
    if(h > 12){
        h = h - 12;
        session = "PM";
    }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    let time = h + ":" + m + ":" + s + " " + session;
    document.querySelector(".digital-clock").innerText = time;
    
    setTimeout(digitalClock, 1000);
    
}
 
digitalClock();


setInterval(setDate, 1000)