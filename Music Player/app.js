let progress = document.getElementById("progress");
let song = document.getElementById("song");
let ctrlIcon  = document.getElementById("ctrlicon");

song.onloadedmetadata = function(){
    progress.max = song.duration;
    progress.value = song.currentTime;
}

function playpause(){
    if(ctrlIcon.classList.contains("fa-pause")){
        song.pause();
        ctrlIcon.classList.remove("fa-pause");
        ctrlIcon.classList.add("fa-play");
    }
    else{
        song.play();
        ctrlIcon.classList.remove("fa-play");
        ctrlIcon.classList.add("fa-pause");
    }
}


if(song.play()){
    setInterval(()=>{
        progress.value = song.currentTime;
    },1000)
}

progress.onchange = function(){
    song.play();
    song.currentTime = progress.value;
    ctrlIcon.classList.remove("fa-play");
    ctrlIcon.classList.add("fa-pause");
}

function playnext(){
    song.src = "Fear.mp3";
    document.getElementById("tag").innerHTML = "Fear";
    ctrlIcon.classList.remove("fa-pause");
     ctrlIcon.classList.add("fa-play");
}
function playBefore(){
    document.getElementById("tag").innerHTML = "Chuttamalle";
    song.src = "Chuttamalle.mp3";
    ctrlIcon.classList.remove("fa-pause");
    ctrlIcon.classList.add("fa-play");
}