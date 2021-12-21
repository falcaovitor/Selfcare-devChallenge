let input = document.querySelector('.newsletter .inputs input');
let btn = document.querySelector('.newsletter .inputs .btn');
let fieldName = document.querySelector('.newsletter .f-text .inputShow');

let form = document.querySelector('.newsletter form');

form.addEventListener("submit", e => {
    if(input.value.length === 0){
        fields();
        validate(false);
        e.preventDefault();
    }else{
        validate();
        // se quiser que o form mande os dados remova a linha abaixo
        e.preventDefault();
        fields(false)
    }
    function fields(show = true){
        fieldName.style.display = (show) ? 'block' : 'none';               
    };
    function validate(show = true){
        input.style.border = (show) ? '2px solid green' : '2px solid red';
        input.focus();
    };
});