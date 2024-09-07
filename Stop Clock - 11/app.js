let timeLine = document.getElementById("displayTime");
let timer = null;

let [seconds , minutes , hours] = [0,0,0];


function stopWatch(){
    seconds++;
    if(seconds == 60){
        seconds =0;
        minutes++;
        if(minutes==60){
            minutes =0;
            hours++;
        }
    }
    let h = hours <10? "0"+hours : hours;
    let m = minutes <10? "0"+minutes : minutes;
    let s = seconds <10? "0"+seconds : seconds;

    timeLine.innerHTML = h+ ":" +m +":"+s;
}



function watchStart(){
    console.log(200);
    if(timer!== null){
        clearInterval(timer);
    }
    timer = setInterval(stopWatch,1000);

}
function watchStop(){
    clearInterval(timer);
}
function resetWatch(){
    clearInterval(timer);
    [seconds , minutes , hours] = [0,0,0];
    timeLine.innerHTML = "00:00:00";
}