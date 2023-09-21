const dark_bg = document.getElementById("form-dark-bg");
const contact_sales_form = document.getElementById("contact-sales-form");
const success = document.getElementById("form-success");
close_popup();

function close_popup() {
    dark_bg.style.display = "none";
    contact_sales_form.style.display = "none";
    success.style.display = "none";
    mobile_menu.style.display = "none";
    body.style.overflowY = "visible";
}

function button_click(summon_form) {
    let buttons = [
        document.getElementById("top-contact-sales-button"),
        document.getElementById("contact-sales-in-description"),
        document.getElementById("pre-footer-contact-sales-button"),
        document.getElementById("footer-contact-sales-button"),
        document.getElementById("form-button")
    ];
    let isDark = [true, true, false, true, false];
    for (let i = 0; i < 4; i++) {
        let load_img = document.createElement("img");
        if (isDark[i]) {
            load_img.src = "img/loading_dark.png";
        } else {
            load_img.src = "img/loading_light.png";
        }
        load_img.classList.add("loading-img");
        buttons[i].innerHTML = "";
        buttons[i].appendChild(load_img);
    }

    let load_imgs = document.querySelectorAll(".loading-img");
    let rot = 0;
    let interval_id = setInterval(function() {
        if (rot >= 360) {
            clearInterval(interval_id);
            for (let i = 0; i < buttons.length; i++) {
                buttons[i].removeChild(buttons[i].lastChild);
                buttons[i].innerHTML = "Contact sales";
            }
            if (summon_form) {
                dark_bg.style.display = "inline";
                contact_sales_form.style.display = "flex";
                body.style.overflowY = "hidden";
            }
        } else {
            for (let i = 0; i < load_imgs.length; i++)
                load_imgs[i].style.transform = `rotate(${rot}deg)`;
            rot += 5;
        }
    }, 1);
}
