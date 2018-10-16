document.addEventListener("DOMContentLoaded", function() {
  var callback = function() {
    eventHandlers();
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
  });

  document.querySelector(".ion-monitor").addEventListener("click", function() {
    pricingId.setAttribute(
      "src",
      "./images/devices/employee_documents_desktop.jpg"
    );
    pricingId.classList.remove("mobile-phone-image", "ipad-image");
  });

  document.querySelector(".ion-iphone").addEventListener("click", function() {
    pricingId.setAttribute(
      "src",
      "./images/devices/admin/admin_company_details_mobile.jpg"
    );
    pricingId.classList.add("mobile-phone-image");
    pricingId.classList.remove("ipad-image");
  });

  let dropdownItems = document.querySelectorAll(".nav-item.dropdown");
  for (let i = 0; i < dropdownItems.length; i++) {
    dropdownItems[i].addEventListener("mouseenter", function() {
      dropdownItems[i].classList.add("show");
    });
    dropdownItems[i].addEventListener("mouseleave", function() {
      dropdownItems[i].classList.remove("show");
    });
  }
}
