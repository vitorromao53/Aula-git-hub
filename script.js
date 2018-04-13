let inputcaracter = document.querySelector("#caracter")
let inputtamanho = document.querySelector("#tamanho")



let botao = document.querySelector("button");

botao.onclick = function(){
    let caracter = inputcaracter.value;
    let tamanho = inputtamanho.value;
    let i = 1;
    let escadinha = "";
    while(i<=tamanho){
        escadinha = escadinha + caracter;
        let document = createElement("p");
        resposta.innerHTML = escadinha;
        let body =  document.querySelector("body");
        body.appendchild(resposta);
        i++;
    }
}