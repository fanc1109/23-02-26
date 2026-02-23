const texto = document.getElementById("texto")
const botao = document.getElementById("botao")

const senha = "kiryan4"


botao.addEventListener("click",()=>{
    const codigo = document.getElementById("cupom").value

    if (codigo==senha){
        texto.textContent="Você ganhou 50% de desconto!"
          botao.textContent="Resgatado"
    }else{
        texto.textContent="Código inválido."
        botao.textContent="Resgatar brinde"
    }
});