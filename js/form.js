const button = document.getElementById("form-button");
var us_name;
var email;
var phone_number;

const name_el = document.getElementById("form-name");
const email_el = document.getElementById("form-email");
const phone_number_el = document.getElementById("form-phone-number");

const name_error = document.getElementById("name-error");
const email_error = document.getElementById("email-error");
const phone_number_error = document.getElementById("phone-number-error");

var entered_phone_num = 0;

function phone_entry() {
    if (phone_number_el.value == "") {
        entered_phone_num = 0;
        phone_number_el.value += "+7 ";
        entered_phone_num = 3;
    }
    check_for_field_fullness();
}

function is_phone_number(string) {
    return /^\+[0-9]\s[0-9]{3}\s[0-9]{3}\s[0-9]{2}\s[0-9]{2}$/.test(string);
}

function is_email(string) {
    return /[A-Za-z0-9_]+@[A-Za-z0-9]+.[A-Za-z]+/.test(string);
}

function is_name(string) {
    return /^[A-Z][a-z]+\s[A-Z][a-z]+/.test(string);
}

function phone_input() {
    if (phone_number_el.value.length < entered_phone_num)
        return;
    entered_phone_num++;
    if (phone_number_el.value.length == 6) {
        phone_number_el.value += " ";
        entered_phone_num += 1;
    } else if (phone_number_el.value.length == 10) {
        phone_number_el.value += " ";
        entered_phone_num++;
    } else if (phone_number_el.value.length == 13) {
        phone_number_el.value += " ";
        entered_phone_num++;
    }

    check_for_field_fullness();
}

function check_for_field_fullness() {
    us_name = document.getElementById("form-name").value;
    email = document.getElementById("form-email").value;
    phone_number = document.getElementById("form-phone-number").value;

    if (us_name > "" && email > "" && phone_number > "")
        button.removeAttribute("disabled");
}

function can_be_submitted() {
    button_click(false);

    us_name = document.getElementById("form-name").value;
    email = document.getElementById("form-email").value;
    phone_number = document.getElementById("form-phone-number").value;
    let valid = true;

    if (!is_name(us_name)) {
        name_error.innerHTML = us_name.length > 0 ? "Error" : "This field is required.";
        name_el.classList.add("required-input");
        valid = false
    } else {
        name_error.innerHTML = "";
        name_el.classList.remove("required-input");
    }

    if (!is_email(email)) {
        email_error.innerHTML = email.length > 0 ? "Invalid email." : "This field is required.";
        email_el.classList.add("required-input");
        valid = false
    } else {
        email_error.innerHTML = "";
        email_el.classList.remove("required-input");
    }

    if (!is_phone_number(phone_number)) {
        phone_number_error.innerHTML = phone_number.length > 0 ? "Invalid phone number" : "This field is required.";
        phone_number_el.classList.add("required-input");
        valid = false
    } else {
        phone_number_error.innerHTML = "";
        phone_number_el.classList.remove("required-input");
    }

    if (valid) {
        contact_sales_form.style.display = "none";
        success.style.display = "flex";
    }

    return valid;
}