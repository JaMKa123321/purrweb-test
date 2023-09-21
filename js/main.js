window.onscroll = function() { sticky_header() };

var header = document.getElementById("fixed-header");
var mobile_menu = document.getElementById("mobile-menu");
const body = document.getElementById("html");
mobile_menu.style.display = "none";

var sticky = header.offsetTop;

function show_mobile_menu() {
    mobile_menu.style.display = "block";
    body.style.overflowY = "hidden";
}

function sticky_header() {
    if (window.scrollY > sticky) {
        header.classList.add("sticky-header");
    } else {
        header.classList.remove("sticky-header");
}
}

if (window.innerWidth < 640) {
    let tcsb = document.getElementById("top-contact-sales-button");
    header.removeChild(tcsb);
    mobile_menu.appendChild(tcsb);

    let temp_element = document.createElement("img");
    temp_element.src = "img/burger_img.png";
    temp_element.classList.add("burger-img");
    header.appendChild(temp_element);
    temp_element.onclick = show_mobile_menu;

    temp_element = document.getElementById("second-block-img");
    document.getElementById("about-budss-container").removeChild(temp_element);

    let footer_upper_links = [];
    let contact_sales_button = document.getElementById("footer-contact-sales-button");
    let as_gp_div = document.getElementById("footer-as-gp-buttons");
    let buttons_block = document.getElementById("footer-buttons-block");
    let lower_block = document.getElementById("footer-lower-block");
    let upper_block = document.getElementById("footer-upper-block");
    let logo = document.getElementById("logo");

    for (let i = 2; i < 5; i++)
        footer_upper_links.push( document.getElementById("moveable-link-" + i) );

    let footer_links_block = document.getElementById("footer-links-block");
    while(footer_links_block.firstChild)
        footer_links_block.removeChild(footer_links_block.lastChild);

    lower_block.removeChild(footer_links_block);

    for (let i = 0; i < footer_upper_links.length; i++)
        buttons_block.appendChild(footer_upper_links[i]);


    let fbm = document.getElementById("footer-buttons-mobile");
    while(fbm.firstChild)
        fbm.removeChild(fbm.lastChild);

    while(upper_block.firstChild)
        upper_block.removeChild(upper_block.lastChild);

    let logo_and_links_block = document.createElement("div");
    logo_and_links_block.classList.add("logo-and-links-footer-block");
    logo_and_links_block.appendChild(logo);
    logo_and_links_block.appendChild(buttons_block);

    upper_block.appendChild(logo_and_links_block);
    upper_block.appendChild(contact_sales_button);
    upper_block.appendChild(as_gp_div);
}