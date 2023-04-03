inputs = document.querySelectorAll('input');

inputs.forEach( input => {
    input.onfocus = () => {
        input.previousElementSibling.classList.add('top');
        input.previousElementSibling.classList.add('focus');
        input.parentNode.classList.add('focus');
        input.style.setProperty('padding-top', '4%')

    }

    input.onblur = () => {
        input.value = input.value.trim();
        if( input.value.trim().length == 0){
            input.previousElementSibling.classList.remove('top');    
            input.style.removeProperty('padding-top');
        }
        input.previousElementSibling.classList.remove('focus');
        input.parentNode.classList.remove('focus');
    }
});