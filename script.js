// ****** SELECTED ITEMS OR ELEMENTS
const FORM = document.querySelector(".form");
const EMAIL = document.querySelector("#email");
const ALERT = document.querySelector(".alert");
const YEAR = document.querySelector(".year");
const CLOSEMENU = document.querySelector(".closemenu");
const OPENMENU = document.querySelector(".menu");
const MENU = document.querySelector(".mobileMenu");
const SLIDER = document.querySelector(".slider");
const FIRSTFIELDSET = document.querySelectorAll(".sReview")[0];
const POINTER = document.querySelectorAll(".circle");
const SINGLEREVIEW = document.querySelectorAll(".sReview");
const TEAMWORK = document.querySelector(".teamwork");
const tpicone = document.querySelector(".tpicone");
const tpictwo = document.querySelector(".tpictwo");

// ********* DIRECT FUNCTIONS
YEAR.textContent = new Date().getFullYear();

// ********* OPTIONS OR CONDITIONS
let dragging = false;
let prevPageX;
let prevScrollLeft;
let width;
let changeNum = 0;

setInterval(() => {
    width = FIRSTFIELDSET.clientWidth;
}, 1000)// tackling when we change device view width


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
SLIDER.addEventListener("touchmove", slide);

SLIDER.addEventListener("mousedown", dragStart);
SLIDER.addEventListener("touchstart", dragStart);

SLIDER.addEventListener("mouseup", dragStop);
SLIDER.addEventListener("touchend", dragStop);

SLIDER.addEventListener("mouseenter", () => {
    SLIDER.style.cursor = "grab";
});

window.addEventListener("scroll", displayReview);


// ******* FUNCTIONS
//function to display the reviews 
function displayReview() {
    let pageY = window.pageYOffset;// the window page y scroll

    SINGLEREVIEW.forEach(review => {
        if (pageY >= review.offsetTop - 200) {
            review.classList.add("showReview")
        }else {
            review.classList.remove("showReview");
        }
    })

    let picHeight = TEAMWORK.offsetTop;

    if (pageY >= picHeight - 300) {
        animation ("showPic", "anime");
    }else {
        removeAnimation ("showPic", "anime");
    }
}
// function to remove animation
function removeAnimation(klass, animstyle) {
    tpicone.classList.remove(klass);
    tpictwo.classList.remove(klass);
    tpicone.classList.remove(animstyle);
    tpictwo.classList.remove(animstyle);
}
// function animation
function animation(klass, animstyle) {
    tpicone.classList.add(klass)
    tpictwo.classList.add(klass);
    setTimeout(() => {
        tpicone.classList.add(animstyle)
        tpictwo.classList.add(animstyle);
    }, 3000);
}

// function to slide
function slide(e) {
    if(!dragging) return;
    e.preventDefault();
    posdiff = e.pageX - prevPageX || e.touches[0].pageX - prevPageX;
    SLIDER.scrollLeft = prevScrollLeft - posdiff;

    changeNum = SLIDER.scrollLeft
    console.log(changeNum)

    console.log(changeNum);
    if (changeNum >= width) {
        showLocation(1);
    }
    if (changeNum >= width *2) {
        showLocation(2);
    }
    if (changeNum >= width * 3) {
        showLocation(3);
    }
    if(changeNum <= width) {
        showLocation(0);
    }
}
// function to show the location of the image i am on
function showLocation(number) {
    POINTER.forEach(point => {
        point.classList.remove("active")
        POINTER[number].classList.add("active");
    })
}
// function drag start
function dragStart(e) {
    dragging = true;
    prevPageX = e.pageX || e.touches[0].pageX;
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