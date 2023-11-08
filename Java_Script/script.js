// Functions show and hide hidden menu 
function showMenu() 
{
  document.getElementById('hiddenMenu').classList.toggle('showMenu');
  document.querySelector('.backgroundBlur').classList.toggle('showMenu');
  document.querySelector('.navBtn').classList.toggle('navBtnCross');
}

// this even listener ensure that html is loaded first
document.addEventListener("DOMContentLoaded", function(event) { 

});

$(document).ready(function() 
{  

  const header = document.querySelector('header');
  window.addEventListener('scroll',headerColor);

  function headerColor()
  {
    const scrollTop = window.scrollY;

    if(scrollTop > 100)
    {
        header.classList.add('change');
        header.classList.remove('reset');
    }
    else if(scrollTop <100)
    {
        header.classList.remove('change');
        header.classList.add('reset');
    }
  }

  $(window).scroll(function() 
  {
    var scrollPos = $(window).scrollTop();
    $('section.candySale').each(function() 
    {
      // following two lines will calculate the height of the active section 
      var sectionTop = $(this).offset().top; 
      var sectionBottom = sectionTop + $(this).outerHeight();

      if (scrollPos >= sectionTop-500 && scrollPos < sectionBottom) 
      {
        // Here we get the id of current section and apply css to corresponding heading in aside
        $('section.candySale > div:nth-child(4)').css('width', '11em');  
      }
      else 
      {
        $('section.candySale >div:nth-child(4)').css('width', '0em');  
      }
      if (scrollPos >= sectionTop-200 && scrollPos < sectionBottom) 
      {
        $('section.candySale > div:nth-child(5)').css('width', '9em');    
        
      }
      else
      {
        $('section.candySale >div:nth-child(5)').css('width', '0em');  

      }
    });
    $('section.customizeCandy').each(function() 
    {
      // following two lines will calculate the height of the active section 
      var sectionTop = $(this).offset().top; 
      var sectionBottom = sectionTop + $(this).outerHeight();

      if (scrollPos >= sectionTop-500 && scrollPos < sectionBottom) 
      {
        // Here we get the id of current section and apply css to corresponding heading in aside
        $('section.customizeCandy > div:nth-child(3)').css('width', '11em');  
      }
      else 
      {
        $('section.customizeCandy >div:nth-child(3)').css('width', '0em');  
      }
      if (scrollPos >= sectionTop-300 && scrollPos < sectionBottom) 
      {
        $('section.customizeCandy > div:nth-child(4)').css('width', '11em');    
        
      }
      else
      {
        $('section.customizeCandy >div:nth-child(4)').css('width', '0em');  

      }
    });
    $('section.nutrition').each(function() 
    {
      // following two lines will calculate the height of the active section 
      var sectionTop = $(this).offset().top; 
      var sectionBottom = sectionTop + $(this).outerHeight();

      if (scrollPos >= sectionTop-300 && scrollPos < sectionBottom) 
      {
        // Here we get the id of current section and apply css to corresponding heading in aside
        $('section.nutrition > div:nth-child(3)').css('width', '11em');  
      }
      else 
      {
        $('section.nutrition >div:nth-child(3)').css('width', '0em');  
      }
      if (scrollPos >= sectionTop-100 && scrollPos < sectionBottom) 
      {
        $('section.nutrition > div:nth-child(4)').css('width', '11em');    
        
      }
      else
      {
        $('section.nutrition >div:nth-child(4)').css('width', '0em');  

      }
    });
  });


  
});


  