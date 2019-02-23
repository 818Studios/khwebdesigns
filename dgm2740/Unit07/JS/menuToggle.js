function toggleMenu(){
	document.querySelector('#primaryNav').classList.toggle("closed");
} //end function


var x = document.querySelector('#hamburgerBtn');
x.onclick = toggleMenu;