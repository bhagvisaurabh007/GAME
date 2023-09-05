document.addEventListener("DOMContentLoaded", function(event) {
    // sticky navbar 
    window.addEventListener('scroll', function () {
        var header = document.querySelector('header');
        header.classList.toggle('sticky', window.scrollY > 0);
    })
    // flexbile card 
    let list = document.querySelectorAll('.list');
    let card = document.querySelectorAll('.card');
    for (let i = 0; i < list.length; i++) {
        list[i].addEventListener('click', function () {
            for (let j = 0; j < list.length; j++) {
                list[j].classList.remove('active');
            }
            this.classList.add('active');
            let dataFilter = this.getAttribute('data-filter');
            for (let k = 0; k < card.length; k++) {
                card[k].classList.remove('active');
                card[k].classList.add('hide');
                if (card[k].getAttribute('data-item') == dataFilter || dataFilter == 'all') {
                    card[k].classList.remove('hide');
                    card[k].classList.add('active');
                }
            }
        })
    }
    // flexible cards 
    // responsive navbar
    function toggleMenu() {
        const toggleMenu = document.querySelector('.toggleMenu');
        const nav = document.querySelector('.nav');
        toggleMenu.classList.toggle('active')
        nav.classList.toggle('active')
    }
    // scrolling animation effect 
    window.addEventListener('scroll', function () {
        var anime = document.querySelectorAll('.animeX');
        for (var s = 0; s < anime.length; s++) {
            var windowheight = window.innerHeight;
            var animetop = anime[s].getBoundingClientRect().top;
            var animepoint = 150;
            if (animetop < windowheight - animepoint) {
                anime[s].classList.add('active');
            }
            else {
                anime[s].classList.remove('active');
            }
        }
    })
    // smooth scrolling
    // slides 
    document.addEventListener("DOMContentLoaded", function (event) {
        let slideIndex = 0;
        showSlides();
        function showSlides() {
            let i;
            let slides = document.getElementsByClassName("mySlides");
            let dots = document.getElementsByClassName("dot");
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            slideIndex++;
            if (slideIndex > slides.length) { slideIndex = 1 }
            for (i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" active", "");
            }
            slides[slideIndex - 1].style.display = "block";
            dots[slideIndex - 1].className += " active";
            setTimeout(showSlides, 3000); // Change image every 3 seconds
        }
        // Get all the filter buttons
        const filterBtns = document.querySelectorAll('.filter-btn');
        // Get all the items to be filtered
        const items = document.querySelectorAll('.item');
        // Add click event listener to each filter button
        filterBtns.forEach(function (btn) {
            btn.addEventListener('click', function () {
                const category = btn.dataset.item;
                // Loop through all the items
                items.forEach(function (item) {
                    // Check if the item's data-category matches the selected category or if the selected category is 'all'
                    if (item.dataset.item === category || category === 'all') {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                });
                // Add the active class to the clicked button
                filterBtns.forEach(function (btn) {
                    btn.classList.remove('active');
                });
                btn.classList.add('active');
            });
        });
    })
  });
  // slides
