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
    let observer = new IntersectionObserver(onEnttry, options);
    let elements = $('.skills');
    elements.each((i, el) => {
       observer.observe(el); 
    });
    
   
    
 }); 

function onEntry (entry){
    entry.forEach(change => {
       if (change.isIntersecting){
           change.target.classList.add('show-animation')
       } 
    });
}

