// ****** SELECTED ITEMS OR ELEMENTS
const FORM = document.querySelector(".form");
const EMAIL = document.querySelector("#email");
const ALERT = document.querySelector(".alert");
const YEAR = document.querySelector(".year");
const CLOSEMENU = document.querySelector(".closemenu");
const OPENMENU = document.querySelector(".menu");
const MENU = document.querySelector(".mobileMenu");
const SLIDER = document.querySelector(".slider");

// ********* DIRECT FUNCTIONS
YEAR.textContent = new Date().getFullYear();


// ********* EVENT LISTENERS 
FORM.addEventListener("submit", validate);

EMAIL.addEventListener("keyup", alerting);

OPENMENU.addEventListener("click", () => {
    showMenu("show");
});

CLOSEMENU.addEventListener("click", () => {
    showMenu("show");
})

SLIDER.addEventListener("mousemove", slide);
SLIDER.addEventListener("mousedown", dragStart);
SLIDER.addEventListener("mouseup", dragStop);
SLIDER.addEventListener("mouseenter", () => {
    SLIDER.style.cursor = "grab";
});


// ******* FUNCTIONS
// function to slide
// ********* OPTIONS OR CONDITIONS
let dragging = false;
let prevPageX;
let prevScrollLeft;
function slide(e) {
    if(!dragging) return;
    e.preventDefault();
    let positiondiff = e.pageX - prevPageX;
    SLIDER.scrollLeft = prevScrollLeft - positiondiff;
}

// function drag start
function dragStart(e) {
    dragging = true;
    prevPageX = e.pageX;
    prevScrollLeft = SLIDER.scrollLeft;
    SLIDER.style.cursor = "grabbing";
}

//function drag stop
function dragStop () {
    dragging = false;
    SLIDER.style.cursor = "grab";
}

// function to show menu 
function showMenu (klass) {
    if (MENU.classList.contains(klass)) {
        MENU.classList.remove(klass)
    }else {
        MENU.classList.add(klass);
    }
}

// function validate 
function validate(e) {
    e.preventDefault();
    value = EMAIL.value;
    atVal = value.indexOf(".com");
    
    if (value && atVal > -1) {
        displayAlert("Correct Email Setup")
    }else if (value && atVal < 0) {
        displayAlert("This is not an Email");
    }else {
        displayAlert("input valid email")
    }

}
// function displayAlert;
function displayAlert(msg) {
    ALERT.textContent = msg;
    setTimeout (() => {
        ALERT.textContent = "";
    }, 4000)
}
// function alerting
function alerting() {
    value = EMAIL.value;
    atVal = value.indexOf(".com");
    
    if (value && atVal > -1) {
        displayAlert("Correct Email Setup")
    }else if (value && atVal < 0) {
        displayAlert("This is not an Email");
    }else {
        displayAlert("input valid email")
    }
}