/* 1. Dynamic Year in Footer */
const yearSpan = document.getElementById("year");
if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}

/* 2. Typewriter Effect in Hero */
const texts = ["Frontend Developer", "CS Student", "Tech Enthusiast"];
let count = 0; 
let index = 0; 
let currentText = ""; 
let letter = "";
const typingElement = document.querySelector(".typing-text");

if (typingElement) {
    (function type() {
        if (count === texts.length) {
            count = 0;
        }
        currentText = texts[count];
        letter = currentText.slice(0, ++index);
        
        typingElement.textContent = letter;

        if (letter.length === currentText.length) {
            count++;
            index = 0;
            setTimeout(type, 2000); 
        } else {
            setTimeout(type, 100); 
        }
    })();
}

/* 3. Back to Top Button */
const mybutton = document.getElementById("myBtn");

window.onscroll = function() {
    if (mybutton) {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            mybutton.style.display = "block";
        } else {
            mybutton.style.display = "none";
        }
    }
};

function topFunction() {
    window.scrollTo({top: 0, behavior: 'smooth'});
}