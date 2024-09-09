const passwordBox = document.getElementById("password");
const length = 12;

const container = document.getElementsByClassName("container")[0]; 

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";

const numbers = "0123456789";
const symbols = "!#$%&()*+,-/<=>?@[]^{|}~";

const allChars = upperCase + lowerCase + numbers + symbols;

const btn = document.getElementById("btn");
btn.addEventListener('click', createPassword);

const copyBtn = document.getElementById("copy");
copyBtn.addEventListener('click', copyPassword);

function createPassword() {
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];

    while (length > password.length) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    passwordBox.value = password;
}

function copyPassword() {
    passwordBox.select();
    document.execCommand("copy");
    const alertBox = document.getElementById("alert");
    alertBox.innerHTML = "Successfully copied!";
    alertBox.style.display = "block";

    // Hide the alert after 3 seconds
    setTimeout(() => {
        alertBox.style.display = "none";
    }, 2000);
}
