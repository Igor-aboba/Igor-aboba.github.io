$(document).ready(function(){

    /* Загрузчик */
    
$(".preloader").css("display", "none");   
    
        
  /* Калькулятор */ 
    
function calculate(){
    
let sum = parseInt($("#select1 option:selected").val()) + parseInt($("#select2 option:selected").val()) + parseInt($("#select3 option:selected").val());
let days = parseInt($("#select1 option:selected").attr("days")) + parseInt($("#select2 option:selected").attr("days")) + parseInt($("#select3 option:selected").attr("days")); 
       
   $(".sroki .digit").text(days);
   $(".price .digit").text(sum); 
     
}    
 $("select").on("change", function(){
  calculate();   
 });   
calculate();   
    
    

  /* Подсвечивание */
    
$(window).scroll(() => {
   
    let scrollDistance = $(window).scrollTop();
    
    $('.section').each((i, el) => {
        
        if ($(el).offset().top - $('nav').outerHeight() <= scrollDistance) {
            $('nav a').each((i, el) => {
               
                if ($(el).hasClass('active')) {
                    $(el).removeClass('active');
                }
                
            });
            
            $('nav li:eq(' + i + ')').find('a').addClass('active');
        }
        
    });
    
}); 
    
    
  /* Отложенная анимация */
    
    let options = {threshold: [1]};
    let observer = new IntersectionObserver(onEntry, options);
    let elements = $('.element-animation');
    elements.each((i, el) => {
       observer.observe(el); 
    });
    
    function onEntry (entry){
    entry.forEach(change => {
       if (change.isIntersecting){
           change.target.classList.add('show-animation');
       } 
    });
}
   
    /* Модальное окно по таймеру */
    
    setTimeout(function () {
        const myModal = new bootstrap.Modal('#Modal', {
            keyboard: false
        });
       modalToggle = document.getElementById('togglemodal');
        myModal.show(modalToggle);
        
    }, 3000);
    
    /* Бегущие цифры */
    
     let optionsRun = {
            threshold: [0.5]
        };
        let observerRun = new IntersectionObserver(onEntryStat, optionsStat);
        let elementsRun = $('.RunAnimation');

        elementsRun.each((i, el) => {
            observerRun.observe(el);
        });


        function onEntryStat(entry) {
            entry.forEach(change => {
                if (change.isIntersecting) {
                    if(!$('.RunAnimation').hasClass("done")){
                        $('.RunAnimation').addClass("done");
                        $('.RunAnimation').spincrement({
                         thousandSeparator: "",
                         duration: 3000
                    });
                  }
                }
            });
        }
    
   
 }); 



