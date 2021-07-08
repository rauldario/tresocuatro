var menuhambMobile = document.getElementById('hamb-nav');

menuhambMobile.addEventListener('click' , navMobile);

function navMobile(){
  var divHide = document.getElementById('hide');
  divHide.classList.toggle('active');
}


function logoClick(){

// Sets the new location of the current window.
//window.location = "https://www.example.com";

// Sets the new href (URL) for the current window.
window.location.href = "index.html";

}
