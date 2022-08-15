function selecionarPrato(seletor){
    const opcaoSelecionado = document.querySelector('.caixa-opcoes1 .selecionado');

    if( opcaoSelecionado !== null){
        opcaoSelecionado.classList.remove('selecionado');
    }
    


    const selecionado = document.querySelector(seletor);
    selecionado.classList.add('selecionado');
    fecharPedido()
}

function selecionarBebida(seletor){
    const opcaoSelecionado = document.querySelector('.caixa-opcoes2 .selecionado');

    if( opcaoSelecionado !== null){
        opcaoSelecionado.classList.remove('selecionado');
    }
    


    const selecionado = document.querySelector(seletor);
    selecionado.classList.add('selecionado');
    fecharPedido()
}

function selecionarSobremesa(seletor){
    const opcaoSelecionado = document.querySelector('.caixa-opcoes3 .selecionado');

    if( opcaoSelecionado !== null){
        opcaoSelecionado.classList.remove('selecionado');
    }
    


    const selecionado = document.querySelector(seletor);
    selecionado.classList.add('selecionado');
    fecharPedido()
}

function fecharPedido(){
    const identificador1 = document.querySelector('.caixa-opcoes1 .selecionado');
    const identificador2 = document.querySelector('.caixa-opcoes2 .selecionado');
    const identificador3 = document.querySelector('.caixa-opcoes3 .selecionado');

    if(identificador1 !== null && identificador2 !== null &&  identificador3 !== null){
        const finalizar = document.querySelector('.fechar-pedido');
       const continuar = document.querySelector('.confirmar-pedido');
       finalizar.style.display='none';
       continuar.style.display='flex';

    }

    

}
function envioPedido(){
    const nomePrato = (document.querySelector('.caixa-opcoes1 .selecionado h1')).innerHTML;


    const  nomeBebida = (document.querySelector('.caixa-opcoes2 .selecionado h1')).innerHTML;

    const nomeSobremesa = (document.querySelector('.caixa-opcoes3 .selecionado h1')).innerHTML;

    const precoPrato = (document.querySelector('.caixa-opcoes1 .selecionado p span')).innerHTML;
    let precopratonumber = Number(precoPrato);

    const precoBebida = (document.querySelector('.caixa-opcoes2 .selecionado p span')).innerHTML;
    let precoBebidanumber = Number(precoBebida);

    const precoSobremesa = (document.querySelector('.caixa-opcoes3 .selecionado p span')).innerHTML;
    let precoSobremesanumber = Number(precoSobremesa);
    
    let total = precopratonumber + precoBebidanumber + precoSobremesanumber;
    total = total.toFixed(2);
    
    let msg = `Olá, gostaria de fazer o pedido:
    - Prato: ${nomePrato}
    - Bebida: ${nomeBebida}
    - Sobremesa: ${nomeSobremesa}
    Total: R$ ${total}`

    let encode = encodeURIComponent(msg);
    let link = "https://wa.me/5535999009937?text="+encode;
    window.open(link);
    
    
    
    
}