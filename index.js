const toggleMenu = () => {
    const menu = document.querySelector('.nav-links')
    const isOpen = menu.classList.toggle('show');
}






// get slider items || arrey.from [es6 feature]
var sliderimg = Array.from(document.querySelectorAll(".slider-container img"));

// get number of slide
var slidescount = sliderimg.length;

//set current img
var currentimg = 1;

// next and previous

var next = document.getElementById("next");
var pre = document.getElementById("pre");

next.onclick = nextslide;
pre.onclick = preslide;

//slide number element
var slidenumber = document.getElementById("slider-number");

// create tha main ul
var indicatorsUL = document.createElement("ul");

//set id on ul
indicatorsUL.setAttribute("id", "indicators-ul");

// loop to create li
for (var i = 1; i <= slidescount; i++) {
    var indicatorsLi = document.createElement("li");
    // set custom attributes
    indicatorsLi.setAttribute("data-index", i);
    // set li content
    indicatorsLi.appendChild(document.createTextNode(i));

    // append li s to the main parent
    indicatorsUL.appendChild(indicatorsLi);
}

// put ul in the indicators div
var indicators = document.getElementById("indicators");
indicators.appendChild(indicatorsUL);

// get the new created UL

var newul = document.getElementById("indicators-ul");

// get indicators items || arrey.from [es6 feature]
var indiactorsarrey = Array.from(
    document.querySelectorAll("#indicators-ul li")
);

//loop through All bullets items

for (var i = 0; i < indiactorsarrey.length; i++) {
    indiactorsarrey[i].onclick = function () {
        currentimg = parseInt(this.getAttribute("data-index"));
        Cheaker();
    };
}

// cheaker click
Cheaker();

// nest slide function
function preslide() {
    if (pre.classList.contains("disabled")) {
        return false;
    } else {
        currentimg--;
        Cheaker();
    }
}

function nextslide() {
    if (next.classList.contains("disabled")) {
        return false;
    } else {
        currentimg++;
        Cheaker();
    }
}


//Create The Cheaker Function

function Cheaker() {
    //set the Slide Number
    slidenumber.textContent = "Slide #" + currentimg + " of " + slidescount;

    RemoveAllActiveClass();

    // Set Active Class on Current Slide
    sliderimg[currentimg - 1].classList.add("active");
    // set active class on current li
    indicatorsUL.children[currentimg - 1].classList.add("active");

    // cheack if the current img is the First
    if (currentimg == 1) {
        pre.classList.add("disabled");
    } else {
        pre.classList.remove("disabled");
    }

    // cheack if the current img is the Last
    if (currentimg == slidescount) {
        next.classList.add("disabled");
    } else {
        next.classList.remove("disabled");
    }
}

// Remove all active class

function RemoveAllActiveClass() {
    // loop through imgs
    sliderimg.forEach(function (img) {
        img.classList.remove("active");
    });
    // loop through li s
    indiactorsarrey.forEach(function (bullet) {
        bullet.classList.remove("active");
    });
}



