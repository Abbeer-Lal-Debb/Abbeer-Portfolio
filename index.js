// ========================================
// creating a Responsive Navbar component
// ========================================

const mobile_nav = document.querySelector(".mobile-navbar-btn");
const nav_header = document.querySelector(".header");
const navbar_lists = document.querySelector(".navbar-lists");

const toggleNavbar = () => {
    nav_header.classList.toggle("active");
};

mobile_nav.addEventListener("click", () => toggleNavbar());

const navbar_link = document.querySelectorAll(".navbar-link");

navbar_link.forEach(element => element.addEventListener("click", ()=>{
    nav_header.classList.remove("active");
}));


// ========================================
// Typed JS Effect
// ========================================

var typingEffect = new Typed(".typedText",{
    strings : ["Software Developer","FullStack Developer","Programmer!"],
    loop : true,
    typeSpeed : 65, 
    backSpeed : 35,
 })

// ========================================
//  scroll to top Button
// ========================================

const heroSection = document.querySelector('.header')
const footerElem = document.querySelector('.section-footer')

const scrollElement = document.createElement('div');
scrollElement.classList.add('scrollTop-style');

// I am adding the button element inside the div element
scrollElement.innerHTML = `<ion-icon name="arrow-up-outline" class="scroll-top"></ion-icon>`;

// add to the bottom of the page
footerElem.after(scrollElement);

// deleting the dom element
const scrollTop = () => {
    heroSection.scrollIntoView({ behavior: "smooth" })
}

scrollElement.addEventListener('click', scrollTop)

// ========================================
//  smooth scrolling
// ========================================

const portfolioSection = document.querySelector(".section-portfolio");
const contactSection = document.querySelector(".section-contact");
const freelancingSection = document.querySelector(".section-freelancing");

document.querySelector(".portfolio-link").addEventListener("click", (e) => {
    e.preventDefault();
    portfolioSection.scrollIntoView({ behavior: "smooth" });
});

document.querySelector(".hireme-btn").addEventListener("click", (e) => {
    e.preventDefault();
    contactSection.scrollIntoView({ behavior: "smooth" });
});

// ========================================
//  animated counter number
// ========================================

const workSection = document.querySelector(".section-work-data");

const workSectionObserve = (entries) => {
    const [entry] = entries;
    if (!entry.isIntersecting) return;
    console.log(entries);


    const counterNum = document.querySelectorAll(".counter-numbers");
    // console.log(counterNum);
    const speed = 200;

    counterNum.forEach((curNumber) => {
        const updateNumber = () => {
            const targetNumber = parseInt(curNumber.dataset.number);
            // console.log(targetNumber);
            const initialNumber = parseInt(curNumber.innerText);
            // console.log(initialNumber);
            const incrementNumber = Math.trunc(targetNumber / speed);
            // i am adding the value to the main number
            // console.log(incrementNumber);

            if (initialNumber < targetNumber) {
                curNumber.innerText = `${initialNumber + incrementNumber}+`;
                setTimeout(updateNumber, 10);
            } else {
                curNumber.innerText = `${targetNumber}+`;
            }

        };
        updateNumber();
    });

    const counterNum1 = document.querySelectorAll(".counter-numbers-1");
    // console.log(counterNum);
    const speed1 = 5;

    counterNum1.forEach((curNumber) => {
        const updateNumber = () => {
            const targetNumber = parseInt(curNumber.dataset.number);
            // console.log(targetNumber);
            const initialNumber = parseInt(curNumber.innerText);
            // console.log(initialNumber);
            const incrementNumber = Math.trunc(targetNumber / speed1);
            // i am adding the value to the main number
            // console.log(incrementNumber);

            if (initialNumber < targetNumber) {
                curNumber.innerText = `${initialNumber + incrementNumber}`;
                setTimeout(updateNumber, 640);
            } else {
                curNumber.innerText = `${targetNumber}`;
            }

        };
        updateNumber();
    });
};

const workSecObserver = new IntersectionObserver(workSectionObserve, {
    root: null,
    threshold: 0,
});

workSecObserver.observe(workSection);

// ========================================
//  Clear the contact details on submitting the contact form
// ========================================

function resetForm (){
    let submit = document.getElementById('submit');
    submit.reset();
}
