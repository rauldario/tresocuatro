//scrollTop

var timeOut;
function scrollToTop() {
	if (document.body.scrollTop!=0 || document.documentElement.scrollTop!=0){
		window.scrollBy(0,-50);
		timeOut=setTimeout('scrollToTop()',15);
	}
	else clearTimeout(timeOut);
}

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 120 || document.documentElement.scrollTop > 120) {
    document.getElementById("btnTop").style.display = "block";
  } else {
    document.getElementById("btnTop").style.display = "none";
  }
}
