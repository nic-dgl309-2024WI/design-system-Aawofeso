  
//   /* Set the width of the side navigation to 0 */

var x = window.matchMedia("(min-width: 200px) and (max-width: 600px)");
var y = window.matchMedia("(min-width: 601px) and (max-width: 1999px)");


function myFunction(x,y) {
  if (x.matches) { // If media query matches
    document.getElementById('iconi').innerHTML = `
        <i class="fa fa-bars"></i>
    `;
    document.getElementById('closeNav').innerHTML = `
    <i class="fa fa-cancel"></i>
    `
  } else if(y.matches) {

    document.getElementById('iconi').style.display = "none";
    
  }
}


  function sideAni(x,y) {
    if(x.matches) {
      document.getElementById('iconi').addEventListener('click', () => {
        document.querySelector('#mySidenav').style.width = "200px"; 
        document.querySelector('#main').style.marginLeft = "200px";
       });

       document.getElementById('closeNav').addEventListener('click', () => {
        document.querySelector('#mySidenav').style.width = "0"; 
        document.querySelector('#main').style.marginLeft = "0";
      });
    } else if (y.matches) {
      document.querySelector('#mySidenav').style.display = "block";
    }
  }




  x.addEventListener("change", function() {
    myFunction(x,y);
  });
  
  x.addEventListener("change", function() {
    sideAni(x,y);
  });
  
  y.addEventListener("change", function() {
    myFunction(x,y);
  });
  
  y.addEventListener("change", function() {
    sideAni(x,y);
  });
  





