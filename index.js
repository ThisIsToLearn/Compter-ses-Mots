const button = document.querySelector('#valide');
const text = document.querySelector('#texte');
const result = document.querySelector('#result');

function Count(){
    let word = text.value;
    let number = 0;
    let split =  word.split(" ");

    for (var i = 0; i < split.length; i++){
        if(split[i] != " "){
            number += 1;
        }
    }
    result.innerHTML = `Il y a ${number} mots dans ce texte`;
}

button.addEventListener('click', Count);