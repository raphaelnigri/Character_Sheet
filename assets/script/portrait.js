const leitorDeArquivos = new FileReader();
const imagem = document.getElementById('portrait');
const inputArquivo = document.getElementById('portrait__input');

function leEAtualiza(){
    let imagemEnviada = inputArquivo.files[0];

    leitorDeArquivos.readAsDataURL(imagemEnviada);
    leitorDeArquivos.addEventListener('loadend', function(load){
        imagem.style.backgroundImage = `url('${load.target.result}')`
        imagem.style.backgroundSize = 'cover'
    })
}

inputArquivo.addEventListener('input',()=>{
    leEAtualiza();
})
