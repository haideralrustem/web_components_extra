// JavaScript cheat sheet


// add class - classlist
element.classList.add("my-class");


// add html - innerhtml - DOMString

result = '<ul><li>Hello</li></ul>';
document.getElementById("result").innerHTML = result;





// redirecting
let url_redirect = response['url_redirect'];
          if (url_redirect) {
              window.location.href = url_redirect;


// reloading
location.reload();



// on change input - onchange
firstNameField.addEventListener("input", function(){});



// on scroll - onscroll event - scroll to element
window.onscroll = function(){
    let windowTop =  window.pageYOffset || document.documentElement.scrollTop; 
    
    let panel = document.querySelector(".feedback-panel");
    let panelTopPosition = panel.getBoundingClientRect().top;

    // document.querySelector(".feedback-panel").style.top = $0.getBoundingClientRect().top + 'px';
        
    if (windowTop >= panelTopPosition + 15) {
      console.log(`Scrolled to element! any Event should fire now!!! `);
            
    }
};



// change css - change style
document.elm.style.border = "3px solid #FF0000"



// next sibling - good for accordion
document.getElementById("item1").nextElementSibling



// get radio value
document.querySelector('input[name="genderS"]:checked').value;
document.forms.history_form.elements.input-name.value



// incldues - substring - string contains - string.contains
str.toLowerCase().includes("world") 

//