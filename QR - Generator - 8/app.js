

const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
    const input = document.getElementById("qrText");
    const image = document.getElementById("qrImage");
    const imagecontainer = document.getElementById("imageconatiner");
    if(input.value.length>0){
        image.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + input.value;
        imagecontainer.classList.add("showimg");
    }
    else{
        input.classList.add("error");
        setTimeout(()=>{
            input.classList.remove("error");
        },1000);
    }


})
