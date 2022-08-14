$(document).ready(function() {
  $('.image-link').magnificPopup({type:'image'});
});

/*$(document).ready(function(){
 
    let options = {threshold: [0.5]};
    let observer = new IntersectionObserver(onEntry, options);
    let elements = $('.elementAnimation');
    elements.each((i, el) => {
       observer.observe(el); 
    });
    
    
    function onEntry (entry){
        entry.forEach(change => {
            if(change.isIntersecting){
                change.target.classList.add('showAnimation');
            }
            
        });
    }
    

    
    
$("img").click(function(){
    $(this).fadeOut(500, function(){
       $(this).attr("src","img/myphoto.png").fadeIn(500);
    });
});   
       
       
});
*/