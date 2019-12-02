const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// ============ Task 1 and 2 ============ 

// Add links to nav
let navLinks = document.querySelectorAll("nav a");
let item = 1;

for (a of navLinks)
{
    a.textContent = siteContent.nav["nav-item-" + item];
    item += 1;
}

// Add CTA text
let ctaH1Formatted = siteContent.cta.h1.replace(/ /g, "<br />");

let ctaText = document.querySelector(".cta-text h1");
ctaText.innerHTML = ctaH1Formatted;

// Add CTA button
let ctaButton = document.querySelector(".cta-text button");
ctaButton.textContent = siteContent.cta.button;

// Add CTA Image
let ctaImage = document.getElementById("cta-img");
ctaImage.src = siteContent.cta["img-src"];

// Add Top Content section: Features and About
let topContentDivs = document.querySelectorAll(".top-content .text-content");

// Add Features section
let featuresH4 = topContentDivs[0].querySelector("h4");
featuresH4.textContent = siteContent["main-content"]["features-h4"];

let featuresDescription = topContentDivs[0].querySelector("p");
featuresDescription.textContent = siteContent["main-content"]["features-content"];

// Add About section
let aboutH4 = topContentDivs[1].querySelector("h4");
aboutH4.textContent = siteContent["main-content"]["about-h4"];

let aboutDescription = topContentDivs[1].querySelector("p");
aboutDescription.textContent = siteContent["main-content"]["about-content"];

// add middle image
let middleImg = document.getElementById("middle-img");
middleImg.src = siteContent["main-content"]["middle-img-src"];

// Add Bottom Content section: Services, Product, Vision
let bottomContentDivs = document.querySelectorAll(".bottom-content .text-content");

// Add Serivces section
let servicesH4 = bottomContentDivs[0].querySelector("h4");
servicesH4.textContent = siteContent["main-content"]["services-h4"];

let servicesDescription = bottomContentDivs[0].querySelector("p");
servicesDescription.textContent = siteContent["main-content"]["services-content"];

// Add Product section
let productH4 = bottomContentDivs[1].querySelector("h4");
productH4.textContent = siteContent["main-content"]["product-h4"];

let productDescription = bottomContentDivs[1].querySelector("p");
productDescription.textContent = siteContent["main-content"]["product-content"];

// Add Vision section
let visionH4 = bottomContentDivs[2].querySelector("h4");
visionH4.textContent = siteContent["main-content"]["vision-h4"];

let visionDescription = bottomContentDivs[2].querySelector("p");
visionDescription.textContent = siteContent["main-content"]["vision-content"];

// Add contact section
let contactH4 = document.querySelector(".contact h4");
contactH4.textContent = siteContent.contact["contact-h4"];

// Add address, phone number, and email
let contactParagraphs = document.querySelectorAll(".contact p");

let addressFormatted = siteContent.contact.address.replace("Street", "Street<br>")

contactParagraphs[0].innerHTML = addressFormatted;
contactParagraphs[1].textContent = siteContent.contact.phone;
contactParagraphs[2].textContent = siteContent.contact.email;

// Add footer
let copyright = document.querySelector("footer p");
copyright.textContent = siteContent.footer.copyright;

// ============ Task 3 ============ 

