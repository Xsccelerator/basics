let blocks = document.querySelectorAll('.block1')

for(let i = 0; i < blocks.length; i++){
    this.onclick = function(){
        console.log('hello')
    }
}






//Одинарное нажатие ЛКМ
document.querySelector('.onclick').onclick = ()=>{
    console.log('click')
}

//Двойное нажатие ЛКМ
document.querySelector('.on2click').ondblclick = ()=>{
    console.log('2xclick')
}
//Событие срабатывает когда двигаем курсором в пределах объекта
//Срабатывает пока мы двигаем сколько успеет
document.querySelector('.mousemove').onmousemove = ()=>{
    console.log('Mousemove')
}
//Срабатывает когда наводим мышь на элемент
//Срабатывает один раз. Очень похоже на hover
document.querySelector('.onmouseenter').onmouseenter = ()=>{
    console.log('onmouseenter')
}
//Срабатывает когда мышь покидает элемент
document.querySelector('.onmouseleave').onmouseleave = ()=>{
    console.log('onmouseleave')
}
//Срабатывает когда мышь покидает элемент
document.querySelector('.onmouseleave').onmouseleave = ()=>{
    console.log('onmouseleave')
}
//Срабатывает при прокрутке мыши.
document.querySelector('.onmousewheel').onmousewheel = ()=>{
    console.log('onmousewheel')
    return  false;      //Благодаря этой строке при наведении 
                       //на элемент прокрутка перестает прокручивать страницу
}
//Срабатывает при нажатии правой кнопки мыши
document.querySelector('.oncontextmenu').oncontextmenu = ()=>{
    console.log('oncontextmenu')
    return  false;      //Благодаря этой строке при наведении 
                       //на элемент прокрутка перестает прокручивать страницу
}

//Срабатывает при прокрутке мыши.
document.querySelector('.onselect').select = ()=>{
    console.log('onselect')
      
                       
}