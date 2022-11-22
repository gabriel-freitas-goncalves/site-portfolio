let header = document.getElementById('cabecalho');
let menuList = document.getElementById('menu__list');
let showSiderBar = false;

function toogleSiderBar() {
    showSiderBar = !showSiderBar;
    console.log(showSiderBar);
    if(showSiderBar) {
        menuList.style.marginRight = '0vw';
    }
    else {
        menuList.style.marginRight = '-100vw';
    }
}

//Formulário//

let form = document.querySelector('.form');
let campos = document.querySelectorAll('.input_required');
let span = document.querySelectorAll('.span-required');
let emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
form.addEventListener('submit', (event) =>{
    event.target();
    nameValidate();
    emailValidate();
    assuntoValidate();       
});

    function setError(index) {
        campos[index].style.border = '3px solid #FF0000';
        span[index].style.display = 'block';
    }
    function removeError(index) {
        campos[index].style.border = '';
        span[index].style.display = 'none';
    }

    function nameValidate() {
        if (campos[0].value.length < 3) 
        {
            setError(0);
          
            console.log('nome deve ter 3 caracteres');
        }
        else {
            removeError(0);
           
            console.log('válido');
        }
    }
    function emailValidate() {
            if (emailRegex.test(campos[1].value)) 
            {
                removeError(1);
                console.log('validado');
            }
            else {
                setError(1);
                console.log('nao validado');
            }   
        }
        function assuntoValidate() {
            if (campos[2].value.length < 2) 
        {
            setError(2);
          
            console.log('nome deve ter 3 caracteres');
        }
        else {
            removeError(2);
           
            console.log('válido');
        }
        }