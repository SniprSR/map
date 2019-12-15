// Check if item is hidden then switch hidden and change text
function itemSwitch() {
    var img_item = document.getElementById("items");
    var btn_item = document.getElementById("item");
    if (img_item.hidden) {
        img_item.hidden = false;
        btn_item.innerHTML = "Items Off";
    } else {
        img_item.hidden = true;
        btn_item.innerHTML = "Items On";
    }
}

function mapSwitch() {
    var img_map = document.getElementById("maps");
    var btn_map = document.getElementById("bt-map");
    if (img_map.hidden) {
        img_map.hidden = false;
        btn_map.innerHTML = "Maps Off";
    } else {
        img_map.hidden = true;
        btn_map.innerHTML = "Maps On";
    }
}

function spraySwitch() {
    var img_spray = document.getElementById("sprays");
    var btn_spray = document.getElementById("spray");
    if (img_spray.hidden) {
        img_spray.hidden = false;
        btn_spray.innerHTML = "Sprays Off";
    } else {
        img_spray.hidden = true;
        btn_spray.innerHTML = "Sprays On";
    }
}

function sheetSwitch() {
    var img_sheet = document.getElementById("sheets");
    var btn_sheet = document.getElementById("sheet");
    if (img_sheet.hidden) {
        img_sheet.hidden = false;
        btn_sheet.innerHTML = "Sheets Off";
    } else {
        img_sheet.hidden = true;
        btn_sheet.innerHTML = "Sheets On";
    }
}

function heartSwitch() {
    var img_heart = document.getElementById("hearts");
    var btn_heart = document.getElementById("heart");
    if (img_heart.hidden) {
        img_heart.hidden = false;
        btn_heart.innerHTML = "Hearts Off";
    } else {
        img_heart.hidden = true;
        btn_heart.innerHTML = "Hearts On";
    }
}

function bossSwitch() {
    var img_boss = document.getElementById("bosses");
    var btn_boss = document.getElementById("boss");
    if (img_boss.hidden) {
        img_boss.hidden = false;
        btn_boss.innerHTML = "Bosses Off";
    } else {
        img_boss.hidden = true;
        btn_boss.innerHTML = "Bosses On";
    }
}

function cannonSwitch() {
    var img_cannon = document.getElementById("cannons");
    var btn_cannon = document.getElementById("cannon");
    if (img_cannon.hidden) {
        img_cannon.hidden = false;
        btn_cannon.innerHTML = "Cannons Off";
    } else {
        img_cannon.hidden = true;
        btn_cannon.innerHTML = "Cannons On";
    }
}