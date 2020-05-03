 document.querySelectorAll('.modal-show').forEach(function(element){ //Получаем массив кнопок открытия
     element.onclick = showModal;
 });

 document.querySelectorAll('.modal-close').forEach(function(element){ //Получаем массив кнопок закрытия
     element.onclick = closeModal;
 })
 document.querySelectorAll('.modal-wrap').forEach(function(element){ //Получаем массив кнопок закрытия
     element.onclick = closeModalWrap;
    
 })




 function showModal(){
     let modalId = this.dataset.modal //связываем кнопку с модальным окном по id
     document.querySelector(modalId).parentElement.classList.remove('hide')
     document.querySelector(modalId).classList.remove('hide')
     document.onkeydown = function(e){
        if(event.keyCode === 27){
           document.querySelectorAll('.modal-wrap').forEach(function(element){ //Получаем массив кнопок закрытия
               element.classList.add('hide')
               element.children[0].classList.add('hide')
               console.log('hi')
               document.onkeydown = null;
           })
        }
    }
 };
 function closeModal(){
    let modalId = this.dataset.modal //связываем кнопку с модальным окном по id
    document.querySelector(modalId).parentElement.classList.add('hide')
    document.querySelector(modalId).classList.add('hide')
    document.onkeydown = null;

 }
 function closeModalWrap(){
    this.classList.add('hide')
    this.children[0].classList.add('hide')
    document.onkeydown = null;

 }

