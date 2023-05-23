var icon = document.getElementById("logo1");

   icon.onclick = function(){
       document.body.classList.toggle("dark-theme");
       if(document.body.classList.contains("dark-theme")){
           icon.src = "pic/moon.png";
       }else{
            icon.src = "pic/sun.png";
       }

   }