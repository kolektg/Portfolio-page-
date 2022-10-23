const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    
  });


  let menu_icon = document.querySelector('.menu-icon');
  let menu = document.querySelector('.menu');
  let close_menu = document.querySelector('#close-menu');
  let menu_buttons = document.querySelectorAll('a[href^="#"');
  let services_icons = document.querySelector('.ilustrations');
  let services_h1 = document.querySelector('.services h1');
  
  window.addEventListener('scroll', () => {
    let mql = window.matchMedia('(min-width: 1000px)');
    const scrolled = window.scrollY;
    
    
    if (!mql.matches){
      return
    }
    if (scrolled > 300) {
      services_icons.classList.add('slide-in-services')
      services_h1.classList.add('slide-in-services')
      
    }
  });
  


  // HIDING MENU WHEN SCROLLING****************************************
  var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;

  
  
  if (currentScrollPos > 60 ) {
    document.getElementById("navbar").style.top = "-80px";
  }
  if (prevScrollpos   > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } 
  prevScrollpos = currentScrollPos;
}

// ***********************************************
// *********************** SLIDING MENU **************************\\
  menu_icon.addEventListener('click',  () => {
    menu.classList.remove('slide-out');
    menu_icon.classList.remove('slide-in-icon')
    menu_icon.classList.add('slide-out-icon', 'animation')
    menu.classList.add('animation', 'slide-in')
    
  })

  close_menu.addEventListener('click', () => {
    
    menu.classList.remove('slide-in');
    menu_icon.classList.remove('slide-out-icon')
    menu_icon.classList.add('slide-in-icon')
    menu.classList.add('slide-out')
    
  })

  for (let i = 0; i < menu_buttons.length; i++) {
  menu_buttons[i].addEventListener('click', () => {
    
    let mql = window.matchMedia('(max-width: 1000px)');
    if (mql.matches === true ) {
      menu.classList.remove('slide-in');
      menu_icon.classList.remove('slide-out-icon')
      menu_icon.classList.add('slide-in-icon')
      menu.classList.add('slide-out')
    } else return;


    
  })
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

//******************* PARALAX ****************************//

let main_photo = document.getElementById('main-photo');
let about_us_photo = document.querySelector('.about-us-photo');

window.addEventListener('scroll' ,() => {
  let mql = window.matchMedia('(min-width: 1300px)');
  let value = window.scrollY;
  if (mql.matches === true) {
    main_photo.style.transform = `translateY(${value * .55 + 'px'} )`;
        
  }else return

  if (value > 1500  && mql.matches === true ) {
    about_us_photo.style.transform = `translateY(${(value - 2249) * .45 + 'px'} )`;
  }else return
  

})


// ***************** PAROWNICA PHOTO ***************************// 

let service_button = document.querySelector('.parownica');
let service_photo = document.querySelector('.parownica-photo')

service_button.addEventListener('click', () => {
  let mql = window.matchMedia('(max-width: 1200px)');
  
  service_photo.style.scale = "2.3"
  if (mql.matches === true) {
    service_photo.style.scale = "1.3"
  }return
    
})

document.addEventListener("click", (event) => {
  // If user clicks inside the element, do nothing
  if (event.target.closest(".parownica")) return
  // If user clicks outside the element, hide it!
  if (service_photo.style.scale > 1) {
    service_photo.style.scale = "0"
  }
  
})

  