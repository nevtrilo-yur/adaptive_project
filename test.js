document.addEventListener('DOMContentLoaded', function(){

    

// --------------------------------------------------------------------------------------------------------------------------------
    function mobClick(){
        
        if(document.querySelector('.link-mobile').style.display == 'flex'){
            document.querySelector('.link-mobile').style.display = 'none';
            document.querySelector('.burger-flex').style.display = 'flex';
            document.querySelector('.burger-close').style.display = 'none';
            document.querySelector('.header').style.opacity = 0.9
            
        }
        else{
            document.querySelector('.link-mobile').style.display = 'flex';
            document.querySelector('.burger-flex').style.display = 'none';
            document.querySelector('.burger-close').style.display = 'block';
            document.querySelector('.header').style.opacity = 1;
            
        }
    }
    document.querySelector('.header-nav-mob').addEventListener('click',mobClick)


    function mobClick2(){

        document.querySelector('.link-mobile').style.display = 'none';
        document.querySelector('.burger-flex').style.display = 'flex';
        document.querySelector('.burger-close').style.display = 'none';
    }

    let mobItem = document.querySelectorAll('.nav-mob-item');
    for (let elem of mobItem){
        elem.addEventListener('click',mobClick2)
    }

// --------------------------------------------------------------------------------------------------------------------------------
    function range(e){
        document.querySelector('.info-range-per').innerHTML = e.target.value + '%'
    }
    
    document.querySelector('.range').addEventListener('input', range)
    

  // --------------------------------------------------------------------------------------------------------------------------------  
    

})