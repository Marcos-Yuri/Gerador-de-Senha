
let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("button");

let sizePassword = document.querySelector("#valor");
let password = document.querySelector("password");

let conteinerPassword = document.querySelector("container-password");

let charset ="abcdefghijklmnopqrstuvxwyzABCDEFGHIJKLMNOPQRSTUVXWYZ0123456789";
let novaSenha = "";

sizePassword.innerHTML = sliderElement.value;

slider.oniput = function(){
    sizePassword.innerHTML = this.value;
}

function generatePassword(){
    alert("VAMOS GERAR A SENHA")
}