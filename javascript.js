// JavaScript Document


// index page slideshow


//form validation
// reference:  http://www.tizag.com/javascriptT/javascriptform.php
function formValidator(){
	// Make quick references to our fields
	var firstname = document.getElementById("firstname");
	var surname = document.getElementById("surname");
	var email = document.getElementById("email");
	
	// Check each input in the order that it appears in the form!
	if(isAlphabet(firstname,"Enter your first name,only letters please")){
		if(isAlphabet(surname,"Enter your surname,only letters please")){
			if(emailValidator(email, "Please enter a valid email address")){
							return true;
				
			}
		}
	}
	
	
	return false;
	
}

function notEmpty(elem, helperMsg){
	if(elem.value.length == 0){
		alert(helperMsg);
		elem.focus(); // set the focus to this input
		return false;
	}
	return true;
}



function isAlphabet(elem, helperMsg){
	var alphaExp = /^[a-zA-Z]+$/;
	if(elem.value.match(alphaExp)){
		return true;
	}else{
		alert(helperMsg);
		elem.focus();
		return false;
	}
}

function emailValidator(elem, helperMsg){
	var emailExp = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
	if(elem.value.match(emailExp)){
		return true;
	}else{
		alert(helperMsg);
		elem.focus();
		return false;
	}
}

// logo fade in effect
// reference: http://clagnut.com/sandbox/imagefades

function initImage() {
  imageId = "logo_img";
  image = document.getElementById(imageId);
  setOpacity(image, 0);
  image.style.visibility = 'visible';
  fadeIn(imageId,0);
}
function setOpacity(obj, opacity) {
  opacity = (opacity == 100)?99.999:opacity;
  
  // IE/Win
  obj.style.filter = "alpha(opacity:"+opacity+")";
  
  // Safari<1.2, Konqueror
  obj.style.KHTMLOpacity = opacity/100;
  
  // Older Mozilla and Firefox
  obj.style.MozOpacity = opacity/100;
  
  // Safari 1.2, newer Firefox and Mozilla, CSS3
  obj.style.opacity = opacity/100;
}
function fadeIn(objId,opacity) {
  if (document.getElementById) {
    obj = document.getElementById(objId);
    if (opacity <= 100) {
      setOpacity(obj, opacity);
      opacity += 10;
      window.setTimeout("fadeIn('"+objId+"',"+opacity+")", 300);
    }
  }
}



-->