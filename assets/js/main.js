/**
 * Template Name: TheEvent - v4.7.0
 * Template URL: https://bootstrapmade.com/theevent-conference-event-bootstrap-template/
 * Author: BootstrapMade.com
 * License: https://bootstrapmade.com/license/
 */
(function () {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim();
    if (all) {
      return [...document.querySelectorAll(el)];
    } else {
      return document.querySelector(el);
    }
  };

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all);
    if (selectEl) {
      if (all) {
        selectEl.forEach((e) => e.addEventListener(type, listener));
      } else {
        selectEl.addEventListener(type, listener);
      }
    }
  };

  /**
   * Easy on scroll event listener
   */
  const onscroll = (el, listener) => {
    el.addEventListener("scroll", listener);
  };

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select("#navbar .scrollto", true);
  const navbarlinksActive = () => {
    let position = window.scrollY + 200;
    navbarlinks.forEach((navbarlink) => {
      if (!navbarlink.hash) return;
      let section = select(navbarlink.hash);
      if (!section) return;
      if (
        position >= section.offsetTop &&
        position <= section.offsetTop + section.offsetHeight
      ) {
        navbarlink.classList.add("active");
      } else {
        navbarlink.classList.remove("active");
      }
    });
  };
  window.addEventListener("load", navbarlinksActive);
  onscroll(document, navbarlinksActive);

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let header = select("#header");
    let offset = header.offsetHeight;

    if (!header.classList.contains("header-scrolled")) {
      offset -= 20;
    }

    let elementPos = select(el).offsetTop;
    window.scrollTo({
      top: elementPos - offset,
      behavior: "smooth",
    });
  };

  /**
   * Toggle .header-scrolled class to #header when page is scrolled
   */
  let selectHeader = select("#header");
  if (selectHeader) {
    const headerScrolled = () => {
      if (window.scrollY > 100) {
        selectHeader.classList.add("header-scrolled");
      } else {
        selectHeader.classList.remove("header-scrolled");
      }
    };
    window.addEventListener("load", headerScrolled);
    onscroll(document, headerScrolled);
  }

  /**
   * Back to top button
   */
  let backtotop = select(".back-to-top");
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add("active");
      } else {
        backtotop.classList.remove("active");
      }
    };
    window.addEventListener("load", toggleBacktotop);
    onscroll(document, toggleBacktotop);
  }

  /**
   * Mobile nav toggle
   */
  on("click", ".mobile-nav-toggle", function (e) {
    select("#navbar").classList.toggle("navbar-mobile");
    this.classList.toggle("bi-list");
    this.classList.toggle("bi-x");
  });

  /**
   * Mobile nav dropdowns activate
   */
  on(
    "click",
    ".navbar .dropdown > a",
    function (e) {
      if (select("#navbar").classList.contains("navbar-mobile")) {
        e.preventDefault();
        this.nextElementSibling.classList.toggle("dropdown-active");
      }
    },
    true
  );

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on(
    "click",
    ".scrollto",
    function (e) {
      if (select(this.hash)) {
        e.preventDefault();

        let navbar = select("#navbar");
        if (navbar.classList.contains("navbar-mobile")) {
          navbar.classList.remove("navbar-mobile");
          let navbarToggle = select(".mobile-nav-toggle");
          navbarToggle.classList.toggle("bi-list");
          navbarToggle.classList.toggle("bi-x");
        }
        scrollto(this.hash);
      }
    },
    true
  );

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener("load", () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash);
      }
    }
  });

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: ".glightbox",
  });

  /**
   * Gallery Slider
   */
  new Swiper(".gallery-slider", {
    speed: 400,
    loop: true,
    centeredSlides: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    slidesPerView: "auto",
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      575: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      992: {
        slidesPerView: 5,
        spaceBetween: 20,
      },
    },
  });

  /**
   * Initiate gallery lightbox
   */
  const galleryLightbox = GLightbox({
    selector: ".gallery-lightbox",
  });

  /**
   * Buy tickets select the ticket type on click
   */
  on("show.bs.modal", "#buy-ticket-modal", function (event) {
    select("#buy-ticket-modal #ticket-type").value =
      event.relatedTarget.getAttribute("data-ticket-type");
  });

  /**
   * Animation on scroll
   */
  window.addEventListener("load", () => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  });
})();




document.getElementById("2").style.display = "none";
document.getElementById("3").style.display = "none";
document.getElementById("4").style.display = "none";




document.getElementById("item2").style.display = "none";
document.getElementById("item3").style.display = "none";
document.getElementById("item4").style.display = "none";
document.getElementById("item5").style.display = "none";
document.getElementById("item6").style.display = "none";
document.getElementById("item7").style.display = "none";
document.getElementById("item8").style.display = "none";
document.getElementById("item9").style.display = "none";
document.getElementById("item10").style.display = "none";



function myFunction(inp) {
  if (inp == 'what')
  {
    
    document.getElementById("1").style.display = "none";
    document.getElementById("2").style.display = "table";
    // document.getElementById("2").classList.add("align-items-center")
    document.getElementById("3").style.display = "none";
    document.getElementById("4").style.display = "none";
  
  }
  if (inp == 'who')
  {
    document.getElementById("1").style.display = "table";
    document.getElementById("2").style.display = "none";
    document.getElementById("3").style.display = "none";
    document.getElementById("4").style.display = "none";
  
  }
  if (inp == 'where')
  {
    document.getElementById("1").style.display = "none";
    document.getElementById("2").style.display = "none";
    document.getElementById("3").style.display = "table";
    document.getElementById("4").style.display = "none";
  
  }
  if (inp == 'when')
  {
    document.getElementById("1").style.display = "none";
    document.getElementById("2").style.display = "none";
    document.getElementById("3").style.display = "none";
    document.getElementById("4").style.display = "table";
  
  }
// For all the triples
  if (inp == 'item1')
  {
    document.getElementById("item1").style.display = "table";
    document.getElementById("item2").style.display = "none";
    document.getElementById("item3").style.display = "none";
    document.getElementById("item4").style.display = "none";
    document.getElementById("item5").style.display = "none";
    document.getElementById("item6").style.display = "none";
    document.getElementById("item7").style.display = "none";
    document.getElementById("item8").style.display = "none";
    document.getElementById("item9").style.display = "none";
    document.getElementById("item10").style.display = "none";
  
  }

  if (inp == 'item2')
  {
    document.getElementById("item1").style.display = "none";
    document.getElementById("item2").style.display = "table";
    document.getElementById("item3").style.display = "none";
    document.getElementById("item4").style.display = "none";
    document.getElementById("item5").style.display = "none";
    document.getElementById("item6").style.display = "none";
    document.getElementById("item7").style.display = "none";
    document.getElementById("item8").style.display = "none";
    document.getElementById("item9").style.display = "none";
    document.getElementById("item10").style.display = "none";
  
  }

  if (inp == 'item3')
  {
    document.getElementById("item1").style.display = "none";
    document.getElementById("item2").style.display = "none";
    document.getElementById("item3").style.display = "table";
    document.getElementById("item4").style.display = "none";
    document.getElementById("item5").style.display = "none";
    document.getElementById("item6").style.display = "none";
    document.getElementById("item7").style.display = "none";
    document.getElementById("item8").style.display = "none";
    document.getElementById("item9").style.display = "none";
    document.getElementById("item10").style.display = "none";
  
  }

  if (inp == 'item4')
  {
    document.getElementById("item1").style.display = "none";
    document.getElementById("item2").style.display = "none";
    document.getElementById("item3").style.display = "none";
    document.getElementById("item4").style.display = "table";
    document.getElementById("item5").style.display = "none";
    document.getElementById("item6").style.display = "none";
    document.getElementById("item7").style.display = "none";
    document.getElementById("item8").style.display = "none";
    document.getElementById("item9").style.display = "none";
    document.getElementById("item10").style.display = "none";
  
  }

  if (inp == 'item5')
  {
    document.getElementById("item1").style.display = "none";
    document.getElementById("item2").style.display = "none";
    document.getElementById("item3").style.display = "none";
    document.getElementById("item4").style.display = "none";
    document.getElementById("item5").style.display = "table";
    document.getElementById("item6").style.display = "none";
    document.getElementById("item7").style.display = "none";
    document.getElementById("item8").style.display = "none";
    document.getElementById("item9").style.display = "none";
    document.getElementById("item10").style.display = "none";
  
  }

  if (inp == 'item6')
  {
    document.getElementById("item1").style.display = "none";
    document.getElementById("item2").style.display = "none";
    document.getElementById("item3").style.display = "none";
    document.getElementById("item4").style.display = "none";
    document.getElementById("item5").style.display = "none";
    document.getElementById("item6").style.display = "table";
    document.getElementById("item7").style.display = "none";
    document.getElementById("item8").style.display = "none";
    document.getElementById("item9").style.display = "none";
    document.getElementById("item10").style.display = "none";
  
  }

  if (inp == 'item7')
  {
    document.getElementById("item1").style.display = "none";
    document.getElementById("item2").style.display = "none";
    document.getElementById("item3").style.display = "none";
    document.getElementById("item4").style.display = "none";
    document.getElementById("item5").style.display = "none";
    document.getElementById("item6").style.display = "none";
    document.getElementById("item7").style.display = "table";
    document.getElementById("item8").style.display = "none";
    document.getElementById("item9").style.display = "none";
    document.getElementById("item10").style.display = "none";
  
  }

  if (inp == 'item8')
  {
    document.getElementById("item1").style.display = "none";
    document.getElementById("item2").style.display = "none";
    document.getElementById("item3").style.display = "none";
    document.getElementById("item4").style.display = "none";
    document.getElementById("item5").style.display = "none";
    document.getElementById("item6").style.display = "none";
    document.getElementById("item7").style.display = "none";
    document.getElementById("item8").style.display = "table";
    document.getElementById("item9").style.display = "none";
    document.getElementById("item10").style.display = "none";
  
  }

  if (inp == 'item9')
  {
    document.getElementById("item1").style.display = "none";
    document.getElementById("item2").style.display = "none";
    document.getElementById("item3").style.display = "none";
    document.getElementById("item4").style.display = "none";
    document.getElementById("item5").style.display = "none";
    document.getElementById("item6").style.display = "none";
    document.getElementById("item7").style.display = "none";
    document.getElementById("item8").style.display = "none";
    document.getElementById("item9").style.display = "table";
    document.getElementById("item10").style.display = "none";
  
  }

  if (inp == 'item10')
  {
    document.getElementById("item1").style.display = "none";
    document.getElementById("item2").style.display = "none";
    document.getElementById("item3").style.display = "none";
    document.getElementById("item4").style.display = "none";
    document.getElementById("item5").style.display = "none";
    document.getElementById("item6").style.display = "none";
    document.getElementById("item7").style.display = "none";
    document.getElementById("item8").style.display = "none";
    document.getElementById("item9").style.display = "none";
    document.getElementById("item10").style.display = "table";
  
  }
 
 
}

$("#csv").click(function() {
  // hope the server sets Content-Disposition: attachment!

  if (document.getElementById("item1").style.display != "none")
  {
    window.location = 'triple_tables/Documentary.csv';

  }
  if (document.getElementById("item2").style.display != "none")
  {
    window.location = 'triple_tables/Frida Kahlo An Open Life-Table 1.csv';

  }
  if (document.getElementById("item3").style.display != "none")
  {
    window.location = 'triple_tables/Trotsky and Kahlo-Table 1.csv';

  }
  if (document.getElementById("item4").style.display != "none")
  {
    window.location = 'triple_tables/TED-Ed.csv';

  }

  if (document.getElementById("item5").style.display != "none")
  {
    window.location = 'triple_tables/Letter.csv';

  }
  if (document.getElementById("item6").style.display != "none")
  {
    window.location = 'triple_tables/Museum-Table 1.csv';

  }
  if (document.getElementById("item7").style.display != "none")
  {
    window.location = 'triple_tables/Article.csv';

  }
  if (document.getElementById("item8").style.display != "none")
  {
    window.location = 'triple_tables/The Broken Column-Table 1.csv';

  }
  if (document.getElementById("item9").style.display != "none")
  {
    window.location = 'triple_tables/Frida Kahlo Portrait-Table 1.csv';

  }
  if (document.getElementById("item10").style.display != "none")
  {
    window.location = 'triple_tables/Diary.csv';

  }

  
});