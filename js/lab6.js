let popup = document.querySelector(".popup");

let contacts_button = document.querySelector(".contacts");
let cross_popup_button = document.querySelector(".popup_close");

function makePopupVisible() {
    popup.style.visibility = "visible";
}

function makePopupHidden() {
    popup.style.visibility = "hidden";
}

contacts_button.addEventListener("click", makePopupVisible);
cross_popup_button.addEventListener("click", makePopupHidden);


const pics = [
    'images/profile-picture.jpg',
    'images/cat.jpg',
];

let userpic = document.querySelector(".userpic");
let pics_index = 0;

function changeUserpic() {
    pics_index += 1;
    pics_index %= pics.length;
    userpic.style.background = "url(" + pics[pics_index] + ") no-repeat center center / cover";
}

userpic.addEventListener("click", changeUserpic);