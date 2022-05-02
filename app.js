const textInput = document.getElementsByClassName('text--input');
const encryptBtn = document.querySelector('.btn__encriptar');
const decryptBtn = document.querySelector('.btn__desencriptar');
const copy = document.querySelector('.btn__copiar');
const textOuput = document.querySelector('.text__output');

function encrypt(){
    const eChar = /e/g; 
    let result = textInput.texto.value.replace(eChar, 'enter');
    const iChar = /i/g; 
    result = result.replace(iChar, 'imes');
    const aChar = /a/g; 
    result = result.replace(aChar, 'ai');
    const oChar = /o/g; 
    result = result.replace(oChar, 'ober');
    const uChar = /u/g; 
    result = result.replace(uChar, 'ufat');
    textOuput.textContent = result;    
    if (textInput.texto.value == ''){
        document.querySelector(".show").style.display = "block";
        document.querySelector(".hide").style.display = "none";
    } else {
        document.querySelector(".show").style.display = "none";
        document.querySelector(".hide").style.display = "flex";
    }
}

function decrypt(){    
    const eChar = /enter/g; 
    let result = textInput.texto.value.replace(eChar, 'e');
    const iChar = /imes/g; 
    result = result.replace(iChar, 'i');
    const aChar = /ai/g; 
    result = result.replace(aChar, 'a');
    const oChar = /ober/g; 
    result = result.replace(oChar, 'o');
    const uChar = /ufat/g; 
    result = result.replace(uChar, 'u');
    textOuput.textContent = result;    
    if (textInput.texto.value == ''){
        document.querySelector(".show").style.display = "block";
        document.querySelector(".hide").style.display = "none";
    } else {
        document.querySelector(".show").style.display = "none";
        document.querySelector(".hide").style.display = "flex";
    } 
}

function copyToClipboard() {
    textOuput.focus();
    document.execCommand('selectAll');
    document.execCommand('copy');
    textInput.focus();
}

encryptBtn.addEventListener("click", encrypt);
decryptBtn.addEventListener("click", decrypt);
copy.addEventListener("click", copyToClipboard);

