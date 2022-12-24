const letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];


let password1El = document.getElementById("password1");
let password2El = document.getElementById("password2");


function clearAll(){
   password1El.textContent = "";
   password2El.textContent = "";
   clearCheckBoxes();
}

function createPasswords(){

    let passwordLength = document.getElementById("password-length");

    let length = passwordLength.value.trim();
   
    if(length.length === 0){
        length = 15;
    }else{
        length = length;
    }
    
    let source = letters;
    let numbersList = document.getElementById("numbers");
    let symbolsList = document.getElementById("symbols");

    if(numbersList.checked){
      source = source.concat(numbers);
    }
    if(symbolsList.checked){
        source = source.concat(symbols);
    }

    let password1 = getPassword(source,length);
    let password2 = getPassword(source,length);

    password1El.textContent = password1;
    password2El.textContent = password2;

}


function getPassword(source,length){
    let password = "";
    for(i = 0; i < length; i++){
        password += source[randomIndex(source)];
    }
    
    return password;
}

function randomIndex(source){
    let index = Math.floor(Math.random()*source.length);

    return index;
}

function clearCheckBoxes(){
    let checkBox = document.getElementsByName("checkBox");
    
    for(i = 0; i < checkBox.length; i++){
        checkBox[i].checked = false;
    }
    
    document.getElementById("password-length").value = "";
}

