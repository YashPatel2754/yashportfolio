// When the menu button is clicked
document.querySelector(".navbar-menu-toggler").addEventListener("click", function () {
    document.querySelector(".sidebar-overlay").classList.add("sidebar-overlay-show");
    document.querySelector(".right-sidebar").classList.add("mobile-sidebar-show");
    document.body.classList.add("overflow-hidden");
  });
  
  // When the overlay is clicked
  document.querySelector(".sidebar-overlay").addEventListener("click", function () {
    document.querySelector(".right-sidebar").classList.remove("mobile-sidebar-show");
    document.body.classList.remove("overflow-hidden");
    
    setTimeout(function () {
      document.querySelector(".sidebar-overlay").classList.remove("sidebar-overlay-show");
    }, 40);
  });
  
  // When any navigation link is clicked
  document.querySelectorAll(".nav-link").forEach(function (navLink) {
    navLink.addEventListener("click", function () {
      document.querySelector(".right-sidebar").classList.remove("mobile-sidebar-show");
      document.body.classList.remove("overflow-hidden");
      
      setTimeout(function () {
        document.querySelector(".sidebar-overlay").classList.remove("sidebar-overlay-show");
      }, 40);
    });
  });