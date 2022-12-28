const form    = document.getElementById('form');
const content = document.querySelectorAll('.inputRequired');
const label   = document.querySelectorAll('.label-Required');
const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;


function setError(index){
    
    content[index].style.border = '2px solid #e63636';
    
}

function removeError(index){
    content[index].style.border = '1px solid #75ebcd';
}

function nameValidate(){
    if(content[0].value.length < 3){
        console.log('NOME DEVE TER NO MÍNIMO 3 CARACTERES');

        setError(0);
    }

    else{
        console.log('NOME VÁLIDO');
        removeError(0);
    }
}

function sobreValidate(){
    if(content[1].value.length <= 2 ){
        console.log('SOBRENOME DEVE TER NO MÍNIMO 3 CARACTERES');

        setError(1);
    }

    else{
        console.log('SOBRENOME VÁLIDO');
        removeError(1);
    }
}

function emailValidate(){
    if(emailRegex.test(content[2].value)){
        console.log('EMAIL VÁLIDO');
        removeError(2);
    }
    else{
        console.log('EMAIL INVÁLIDO');
        setError(2)
    }
}

form.addEventListener('submit', (event)=>{
    event.preventDefault();
    console.log("REVISAR TODAS AS INFORMAÇÕES");
    alert("Verifique todas as informações!")
    nameValidate();
    sobreValidate();
    emailValidate();
})