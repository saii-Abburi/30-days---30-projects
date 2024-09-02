let userInput = document.getElementById("date");
let ageMessage = document.getElementById("agemessage");

userInput.max = new Date().toISOString().split("T")[0];


function calculateAge(){
    let birthdate = new Date(userInput.value);
    let d1 = birthdate.getDate();
    let m1 = birthdate.getMonth()+1;
    let y1 = birthdate.getFullYear();

    let today = new Date();

    let d2 = today.getDate();
    let m2 = today.getMonth()+1;
    let y2 = today.getFullYear();

    let y , m , d;
    y = y2-y1;
    if(m2>=m1){
        m = m2-m1;
    }
    else{
        y--;
        m = 12+m2-m1;
    }
    if(d2>=d1){
        d = d2-d1;
    }
    else{
        m--;
        d = getDaysInMonths(y1 , m1)+d2-d1;
    }

    if(m<0){
        m =11;
        y--;
    }
    ageMessage.innerHTML = `You are <span>${y}Years</span>, <span>${m}Months</span> and <span>${d}Days</span> old`;
    ageMessage.style.display = "block";
}

function getDaysInMonths(year , month){
    return new Date(year , month , 0).getDate();
}








































































































































