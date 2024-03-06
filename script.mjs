  
  /* Set the width of the side navigation to 0 */





  function closeNav() {
    x.style.width = "0"; 
    y.style.marginLeft = "0";
  }

  function myFunction() {
    
   x.style.width = "250px"; 
   y.style.marginLeft = "250px";
  }


  function resize() {

    if (z.style.display == 'none') { 
      z.style.display = 'block';
    } else {
      z.style.display = 'none';
    }

  }


  z.addEventListener('click', resize);

  const x = document.getElementById("mySidenav");
  const y = document.getElementById("main");
  const z = document.getElementById("icon");
 

  