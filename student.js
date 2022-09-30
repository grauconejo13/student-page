//Vanessa Victorino - 301201653
//Version 2 ~ Updated April 2022

//for navigation bar 
$(document).ready(function(){
    $("#one").click(function(){        
        $("#contact-04").hide(); 
        $("#assignments-03").hide(); 
        $("#about-02").hide(); 
        $("#home-01").slideUp();
    document.getElementById("home-01").style.display = "block";
     
  });
  $("#two").click(function(){   
        $("#home-01").hide(); 
        $("#contact-04").hide(); 
        $("#assignments-03").hide();
        $("#about-02").slideUp();
    document.getElementById("about-02").style.display = "block";   
   
  });
  $("#three").click(function(){     
        $("#about-02").hide(); 
        $("#home-01").hide(); 
        $("#contact-04").hide();
        $("#assignments-03").slideUp();
    document.getElementById("assignments-03").style.display = "block"; 
    
     
  });

});


//---------------------------------------------------------------------------//*/

//---------------------------------------------------------------------------//*/

//---------------------------------------------------------------------------//*/

 
//---------------------------------------------------------------------------//*/