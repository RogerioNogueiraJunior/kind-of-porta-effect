// Variáveis para o reconhecimento dos objtetos html no código javascript
const block = document.getElementById("block");
const block2 = document.getElementById("block2");

// Variáveis de posição dos blocos 1 e 2
let position_ud = 0; // posição Y bloco 1 (ud = up and down)
let position_lr = 0; // posição X bloco 1 (lr = left and right)
let position_ud2 = 0; // posição Y bloco 2(ud = up and down)
let position_lr2 = 700;// posição X bloco 2(lr = left and right)

// addEventListener permite que um evento seja atribuido a uma ação, do caso "keypress", a ação acontece ao precionar uma tecla
addEventListener('keypress', (e) => { 

    // p alerta asposições X dos Blocos 1 e 2 para Debugging.
    if(e.key == 'p'){
        alert(position_lr)
        alert(position_lr2)
    }

    // caso a tecla pressionada seja S e a posição Y do bloco 1 não for igual a 500
    // é adicionado 10 no valor Y do bloco 1 que é convertido para a margin top referente a div space
    // fazendo ele ir para baixo, a 2° condição impede que ele saia do limite da div space
    if(e.key === 's' && position_ud != 500){
        position_ud += 10
        let pace_ud = `${position_ud}px`
        block.style.marginTop = `${pace_ud}`
    }

    // caso a tecla pressionada seja W e a posição Y do bloco 1 não for igual a -500
    // é subtraido 10 no valor Y do bloco 1 que é convertido para a margin top referente a div space
    // fazendo ele ir para cima, a 2° condição impede que ele saia do limite da div space
    if(e.key === 'w' && position_ud != -500){
        position_ud -= 10
        let pace_ud = `${position_ud}px`
        block.style.marginTop = `${pace_ud}`
    }

    // caso a tecla A for precionada, e a posição do X do bloco 1 for diferente de -700
    // (fazendo com que ele saia por completo da tela caso vá para esquerda), é subitraido 10 da 
    // posição X do bloco 1, que é convertida para a margin left referente a div space fazendo 
    //com que ele vá para a esquerda.
    if(e.key === 'a' && position_lr != -700){
        position_lr -= 10
        let pace_lr = `${position_lr}px`
        block.style.marginLeft = `${pace_lr}`
    }

    // caso a tecla D for precionada, a posicão X do bloco 1 for diferente de 500 (fazendo
    // com que ele não saia da tela caso encoste na direita da div space), e a posição do
    // bloco 2 for maior que 500 (fazendo com que ele pare andar caso o 
    // bloco 2 esteja 100% aparente na tela) é somado 10 na posição X do bloco 1 fazendo ele ir
    // para direita.
    if(e.key === 'd' && position_lr2 > 500 && position_lr != 500){
        position_lr += 10
        let pace_lr = `${position_lr}px`
        block.style.marginLeft = `${pace_lr}`
    }
    
    
    // caso a tecla pressionada seja W e a posição Y do bloco 2 não for igual a -500
    // é subtraido 10 do valor Y do bloco 2, que é convertido para a margin top referente a div space
    // fazendo ele ir para cima, a 2° condição impede que ele saia do limite da div space
    if(e.key === 'w' && position_ud2 != -500){
        position_ud2 -= 10
        let pace_ud2 = `${position_ud2}px`
        block2.style.marginTop = `${pace_ud2}`
    }

    // caso a tecla pressionada seja S e a posição Y do bloco 2 for diferente de 500
    // é adicionado 10 no valor Y do bloco 2, que é convertido para a margin top referente a div space
    // fazendo ele ir para baixo, a 2° condição impede que ele saia do limite da div space
    if(e.key === 's' && position_ud2 != 500){
        position_ud2 += 10
        let pace_ud2 = `${position_ud2}px`
        block2.style.marginTop = `${pace_ud2}`
    }

    // a movimentação no eixo X do bloco 2 só acontece caso a posição do bloco 1 for
    // menor ou igual a -500, e a posição do bloco 2 for diferente -700, o que permite
    // que haja uma transição entre um bloco e outro, quando um sai da tela e o outro entra;
    // e que o bloco 2 não vá para a direita desnecessariamente.
    if(position_lr <= -500 && position_lr2 != -710){

        // a condição  position_lr2 != -500 impede que o bloco 2 saia pela esquerda da tela space.
        if(e.key === 'a' &&  position_lr2 != -500){
                position_lr2 -= 10
                let pace_lr2 = `${position_lr2}px`
                block2.style.marginLeft = `${pace_lr2}`
        }
        if(e.key === 'd'){
                position_lr2 += 10
                let pace_lr2 = `${position_lr2}px`
                block2.style.marginLeft = `${pace_lr2}`      
        }
    }
})


