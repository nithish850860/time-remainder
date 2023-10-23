let displaytime = document.getElementById("time");
const date = document.getElementById("date");
const hour = document.getElementById("hour");
const min = document.getElementById("min");
const second = document.getElementById("second");

let dates = 9 , hours = 2 ,minutes = 20 , seconds = 60 ;

function stopwatch(seconds){
    const times = new Date();
    date.innerHTML = zerocheck(dates)
    hour.innerHTML = zerocheck(hours)
    min.innerHTML = zerocheck(minutes)
    second.innerHTML = zerocheck(seconds)
}
setInterval(()=>{
    seconds--
    if(seconds==0){
        minutes--;
        seconds = 60 ;
    }
    if(minutes==0){
        hours--;
        minutes = 60 ;
    }
    if(hours==0){
        dates--;
        hours = 24 ;
    }
    stopwatch(seconds);
} ,1000);

function zerocheck(num){
    if(num<10){
        return "0"+num;
    }
    else
        return num;
}