const block = document.getElementById("block");
const block2 = document.getElementById("block2");
const space = document.getElementById("space");

let position_ud = 0;
let position_lr = 0;
let position_ud2 = 0;
let position_lr2 = 700;


addEventListener('keypress', (e) => {

    if(e.key == 'p'){
        alert(position_lr)
        alert(position_lr2)
    }

    if(e.key === 's' && position_ud != 500){
        position_ud += 10
        let pace_ud = `${position_ud}px`
        block.style.marginTop = `${pace_ud}`
    }

    if(e.key === 'w' && position_ud != -500){
        position_ud -= 10
        let pace_ud = `${position_ud}px`
        block.style.marginTop = `${pace_ud}`
    }

    if(e.key === 'a' && position_lr != -700 && position_lr2 > -500){
        position_lr -= 10
        let pace_lr = `${position_lr}px`
        block.style.marginLeft = `${pace_lr}`
    }

    if(e.key === 'd' && position_lr2 > 500 && position_lr != 700 && position_lr != 500){
        position_lr += 10
        let pace_lr = `${position_lr}px`
        block.style.marginLeft = `${pace_lr}`
    }
    
    if(e.key === 'w' && position_ud2 != -500){
        position_ud2 -= 10
        let pace_ud2 = `${position_ud2}px`
        block2.style.marginTop = `${pace_ud2}`
    }

    if(e.key === 's' && position_ud2 != 500){
        position_ud2 += 10
        let pace_ud2 = `${position_ud2}px`
        block2.style.marginTop = `${pace_ud2}`
    }

    if(position_lr <= -500 && position_lr2 != -710){
        if(e.key === 'a' && position_lr2 != -700 && position_lr2 != -500){
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


