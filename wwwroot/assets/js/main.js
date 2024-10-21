//Header Scroll
let nav = document.querySelector(".navbar");
window.onscroll = function () {
    if(document.documentElement.scrollTop > 50) {
        nav.classList.add("header-scrolled");
    }else {
        nav.classList.remove("header-scrolled");
    }
}

//nav hide
let navbar = document.querySelector('.navbar-collapse');
let  navLinks = document.querySelectorAll('.navbar-collapse.collapse');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        link.classList.add('active');

        setTimeout (() => {
            navbar.classList.remove('show');
        }, 1000);
    })
})

//Swiper slider
var swiper = new Swiper(".mySwiper", {
    direction: "vertical",
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 3500,
    },
})





//Select all filter buttons and filterable cards
const filterButtons = document.querySelectorAll(".filter_buttons button");
const filterableCards = document.querySelectorAll(".filterable_cards .card");

//Define the filterCards function
const filterCards = e => {
    document.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");
    
    //Iterate over each filterable card
    filterableCards.forEach(card => {
        //Add "hide" class to hide the card initially
        card.classList.add("hide");
        //check if the card matches the selected filter or "all" is selected
        if(card.dataset.name === e.target.dataset.name || e.target.dataset.name === "all"){
        card.classList.remove("hide");  
        }
    }); 
};

//Add click event listener to each filter button
filterButtons.forEach(button => button.addEventListener("click", filterCards));


// Dropdown on mouse hover
const $dropdown = $(".dropdown");
const $dropdownToggle = $(".dropdown-toggle");
const $dropdownMenu = $(".dropdown-menu");
const showClass = "show";

$(window).on("load resize", function() {
    if (this.matchMedia("(min-width: 992px)").matches) {
        $dropdown.hover(
        function() {
            const $this = $(this);
            $this.addClass(showClass);
            $this.find($dropdownToggle).attr("aria-expanded", "true");
            $this.find($dropdownMenu).addClass(showClass);
        },
        function() {
            const $this = $(this);
            $this.removeClass(showClass);
            $this.find($dropdownToggle).attr("aria-expanded", "false");
            $this.find($dropdownMenu).removeClass(showClass);
        }
        );
    } else {
        $dropdown.off("mouseenter mouseleave");
    }
});