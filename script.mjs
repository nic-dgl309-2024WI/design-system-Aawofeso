  
//   /* Set the match media values */

var x = window.matchMedia("(min-width: 200px) and (max-width: 600px)");

x.addEventListener('change', function() {
  sideAni(x);
});


function myFunction(x) {
  if (x.matches) { // If media query matches
    document.getElementById('iconi').innerHTML = `
        <i class="fa fa-bars"></i>
    `;
    document.getElementById('closeNav').innerHTML = `
    &times;
    `
  } else {
    document.getElementById('iconi').style.display = "none";
    document.getElementById('closeNav').style.display = "none";
  }
};


  function sideAni(x) {
    if(x.matches) {
      document.getElementById('iconi').addEventListener('click', () => {
        document.querySelector('#mySidenav').style.width = "200px"; 
        document.querySelector('#main').style.marginLeft = "200px";
       });

       document.getElementById('closeNav').addEventListener('click', () => {
        document.querySelector('#mySidenav').style.width = "0"; 
        document.querySelector('#main').style.marginLeft = "0";
      });
  } else {
    document.querySelector('#mySidenav').style.width = "200px"; 
    document.querySelector('#main').style.marginLeft = "200px";
  }
};

x.addEventListener('change', function() {
  myFunction(x);
});


