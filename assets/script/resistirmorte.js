//rolagem de resistir morte esta no arquivo rolagem.js

document.addEventListener('DOMContentLoaded', ()=>{
    let sucessoLabel = document.getElementById('morte__label--sucesso');
    let fracassoLabel = document.getElementById('morte__label--fracasso');
    let checkboxArray = document.querySelectorAll('[data-morte]');

    sucessoLabel.addEventListener('click', ()=>{
        for (let index = 0; index < checkboxArray.length + 1; index++) {
            const checkbox = checkboxArray[index];

            if(index == checkboxArray.length){
                checkboxArray.forEach(checkbox =>{
                    checkbox.checked = false;
                })
                break;
            }

            if(checkbox.dataset.morte == 'sucesso' && !checkbox.checked){
                checkbox.checked = true;
                break;
            }
        }
    })

    fracassoLabel.addEventListener('click', ()=>{
        for (let index = 0; index < checkboxArray.length + 1; index++) {
            const checkbox = checkboxArray[index];

            if(index == checkboxArray.length){
                checkboxArray.forEach(checkbox =>{
                    checkbox.checked = false;
                })
                break;
            }

            if(checkbox.dataset.morte == 'fracasso' && !checkbox.checked){
                checkbox.checked = true;
                break;
            }

        }
    })
})
