const slick = document.getElementById("slick");
const slick_dots = document.getElementById("slick-dots");
var slick_content = [];
var slick_coords = [];
var cant_click_flag = false;
var selected_div = 0;
const slide_time = 10;

for (let i=0; i < 11; i++) {
    slick_coords.push(260 * i);

    let div_pic = document.createElement("div");
    div_pic.id = "div_pic_" + i;
    div_pic.classList.add("div-img");
    
    let img = document.createElement("img");
    let file_num = (i < 10) ? (i + 1) : 1;
    img.src = "img-slick/" + file_num + ".png";
    slick_content.push(img);

    let div_dot = document.createElement("div");
    
    if (i == 0) {
        div_dot.classList.add("slick-current-dot");
    }

    div_pic.appendChild(img);
    slick.appendChild(div_pic);

    if (i == 10) break;

    div_dot.id = "div_dot_" + i;
    div_dot.classList.add("slick-dot");
    slick_dots.appendChild(div_dot);

    div_dot.onclick = function() {
        if (cant_click_flag)
            return;
        if (document.getElementById("div_dot_" + i).classList.contains("slick-current-dot"))
            return;
        document.getElementById("div_dot_" + selected_div).classList.remove("slick-current-dot");
        document.getElementById("div_dot_" + i).classList.add("slick-current-dot");

        let interval_id = null;
        pos = slick_coords[selected_div];
        cant_click_flag = true;
        clearInterval(interval_id);
        interval_id = setInterval(function() {
            if (Math.abs(slick_coords[i] - pos) <= 0.1) {
                clearInterval(interval_id);
                document.getElementById("slick").style.left = -slick_coords[i] + "px";
                selected_div = i;
                cant_click_flag = false;
            } else {
                pos += (slick_coords[i] - slick_coords[selected_div]) / slide_time;
                document.getElementById("slick").style.left = -pos + "px";
            }
        }, 1);
    };
}

function next() {
    if (cant_click_flag)
        return;

    let next_div = selected_div + 1;
    document.getElementById("div_dot_" + selected_div).classList.remove("slick-current-dot");

    let interval_id = null;
    pos = slick_coords[selected_div];
    cant_click_flag = true;
    clearInterval(interval_id);
    interval_id = setInterval(function() {
        if (Math.abs(slick_coords[next_div] - pos) <= 0.1) {
            clearInterval(interval_id);
            document.getElementById("slick").style.left = -slick_coords[next_div] + "px";
            selected_div = next_div;
            cant_click_flag = false;
            if (next_div == slick_content.length - 1) {
                document.getElementById("slick").style.left = "0";
                document.getElementById("div_dot_0").classList.add("slick-current-dot");
                selected_div = 0;
            } else {
                document.getElementById("div_dot_" + next_div).classList.add("slick-current-dot");
            }
        } else {
            pos += (slick_coords[next_div] - slick_coords[selected_div]) / slide_time;
            document.getElementById("slick").style.left = -pos + "px";
        }
    }, 1);
    
}

function prev() {
    if (cant_click_flag)
        return;

    let next_div = selected_div - 1;
    document.getElementById("div_dot_" + selected_div).classList.remove("slick-current-dot");
    if (next_div < 0) {
        document.getElementById("slick").style.left = slick_coords[slick_coords.length - 1];
        selected_div = slick_coords.length - 1;
        next_div = slick_coords.length - 2;
    }

    let interval_id = null;
    pos = slick_coords[selected_div];
    cant_click_flag = true;
    clearInterval(interval_id);
    interval_id = setInterval(function() {
        if (Math.abs(slick_coords[next_div] - pos) <= 0.1) {
            clearInterval(interval_id);
            document.getElementById("slick").style.left = -slick_coords[next_div] + "px";
            selected_div = next_div;
            cant_click_flag = false;
            document.getElementById("div_dot_" + next_div).classList.add("slick-current-dot");
        } else {
            pos += (slick_coords[next_div] - slick_coords[selected_div]) / slide_time;
            document.getElementById("slick").style.left = -pos + "px";
        }
    }, 1);
    
}