
(function(){
    document.querySelectorAll('.modal-show').forEach(function(element){ //Получаем массив кнопок открытия
        element.onclick = showModal;
    });
   
    document.querySelectorAll('.modal-close').forEach(function(element){ //Получаем массив кнопок закрытия
        element.onclick = closeModal;
    })
    document.querySelectorAll('.modal-wrap').forEach(function(element){ //Получаем модальное окно
        element.onclick = closeModal;
       
    })
   
   
   
   
    function showModal(){
        let modalId = this.dataset.modal //связываем кнопку с модальным окном по id
        document.querySelector(modalId).classList.remove('hide')
        document.onkeydown = function(e){
           if(event.keyCode === 27) closeModal()
              
           }
       }
    
    function closeModal(){
       document.querySelectorAll('.modal-wrap').forEach(function(element){ 
           element.classList.add('hide')
           
   
    })
    document.onkeydown = null;
   }
   console.log(this)
   
})()

