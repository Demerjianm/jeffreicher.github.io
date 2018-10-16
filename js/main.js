// $(document).ready(function() {
//   clickHandlers();
//   smoothScroll();
// });

// function clickHandlers() {
//   $(".ion-ipad").on("click", function() {
//     $("#pricing-image").attr(
//       "src",
//       "../images/devices/baseline_screenshots_1.png"
//     );
//     console.log("clicked");
//   });
// }

// function smoothScroll() {
//   // Add smooth scrolling to all links
//   $("a").on("click", function(event) {
//     // Make sure this.hash has a value before overriding default behavior
//     if (this.hash !== "") {
//       // Prevent default anchor click behavior
//       event.preventDefault();

//       // Store hash
//       var hash = this.hash;

//       // Using jQuery's animate() method to add smooth page scroll
//       // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
//       $("html, body").animate(
//         {
//           scrollTop: $(hash).offset().top
//         },
//         800,
//         function() {
//           // Add hash (#) to URL when done scrolling (default click behavior)
//           window.location.hash = hash;
//         }
//       );
//     }
//   });
// }

document.addEventListener("DOMContentLoaded", function() {
  var callback = function() {
    // Handler when the DOM is fully loaded
    eventHandlers();
    // smoothScroll();
    // anchorLinkHandler();
    // FadeIn();
    // showDropDown();
  };

  if (
    document.readyState === "complete" ||
    (document.readyState !== "loading" && !document.documentElement.doScroll)
  ) {
    callback();
  } else {
    document.addEventListener("DOMContentLoaded", callback);
  }
});

// function smoothScroll() {
//   var aTag = document.getElementsByTagName("a");
//   for (var i = 0; i < aTag.length; i++) {
//     aTag[i].addEventListener("click", function(event) {
//       // Make sure this.hash has a value before overriding default behavior
//       if (this.hash !== "") {
//         // Prevent default anchor click behavior
//         event.preventDefault();

//         // Store hash
//         var hash = this.hash;

//         // Using jQuery's animate() method to add smooth page scroll
//         // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
//         document.querySelectorAll("html, body").animate(
//           {
//             scrollTop: document.querySelectorAll(hash).offset().top
//           },
//           800,
//           function() {
//             // Add hash (#) to URL when done scrolling (default click behavior)
//             window.location.hash = hash;
//           }
//         );
//       }
//     });
//   }
//   // Add smooth scrolling to all links
//   document.querySelectorAll("a");
// }

// function FadeIn() {
//   // $(function () {
//   var trigger = new ScrollTrigger({
//     toggle: {
//       visible: "customFadeInUp"
//     },
//     offset: {
//       y: 150
//     },
//     once: true
//   });
//   // });
// }

function anchorLinkHandler(e) {
  const distanceToTop = el => Math.floor(el.getBoundingClientRect().top);

  e.preventDefault();
  const targetID = this.getAttribute("href");
  const targetAnchor = document.querySelector(targetID);
  if (!targetAnchor) return;
  const originalTop = distanceToTop(targetAnchor);

  window.scrollBy({ top: originalTop, left: 0, behavior: "smooth" });

  const checkIfDone = setInterval(function() {
    const atBottom =
      window.innerHeight + window.pageYOffset >= document.body.offsetHeight - 2;
    if (distanceToTop(targetAnchor) === 0 || atBottom) {
      targetAnchor.tabIndex = "-1";
      targetAnchor.focus();
      window.history.pushState("", "", targetID);
      clearInterval(checkIfDone);
    }
  }, 100);
}

function eventHandlers() {
  const linksToAnchors = document.querySelectorAll('a[href^="#"]');
  const pricingId = document.querySelector("#pricing-image");
  linksToAnchors.forEach(each => (each.onclick = anchorLinkHandler));

  document.querySelector(".ion-ipad").addEventListener("click", function() {
    pricingId.setAttribute(
      "src",
      "./images/devices/employee/ipad_employee_details.png"
    );
    pricingId.classList.remove("mobile-phone-image");
    pricingId.classList.add("ipad-image");
    console.log("clicked");
  });

  document.querySelector(".ion-monitor").addEventListener("click", function() {
    pricingId.setAttribute(
      "src",
      "./images/devices/employee_documents_desktop.jpg"
    );
    pricingId.classList.remove("mobile-phone-image", "ipad-image");
    console.log("clicked");
  });

  document.querySelector(".ion-iphone").addEventListener("click", function() {
    pricingId.setAttribute(
      "src",
      "./images/devices/admin/admin_company_details_mobile.jpg"
    );
    pricingId.classList.add("mobile-phone-image");
    pricingId.classList.remove("ipad-image");

    console.log("clicked");
  });

  let dropdownItems = document.querySelectorAll(".nav-item.dropdown");
  // console.log(dropdownItems);
  for (let i = 0; i < dropdownItems.length; i++) {
    dropdownItems[i].addEventListener("mouseenter", function() {
      dropdownItems[i].classList.add("show");
      console.log("hovered");
    });
    dropdownItems[i].addEventListener("mouseleave", function() {
      dropdownItems[i].classList.remove("show");
      console.log("left");
    });
  }

  function showDropDown() {}
  // document
  //   .querySelectorAll(".nav-link .dropdown-toggle")
  //   .addEventListener("click", function() {
  //     document
  //       .querySelectorAll(".nav-link .dropdown-toggle")
  //       .classList.add("show");
  //   });
  console.log("hovered");
}
