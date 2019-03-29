var link = document.querySelector(".write-us-button");
var popup = document.querySelector(".modal-write-us");
var close = document.querySelector(".modal-close");
var form = popup.querySelector(".write-us-form");
var writeusname = popup.querySelector(".write-us-name");
var writeusemail = popup.querySelector(".write-us-email");

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("writeusname");
} catch (err) {
  isStorageSupport = false;
}

link.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
  writeusname.focus();
  if (storage) {
    writeusname.value = storage;
    writeusemail.focus();
  } else {
    writeusname.focus();
  }
});

close.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
  popup.classList.remove("modal-error");
});

form.addEventListener("submit", function(evt) {
  if (!writeusname.value || !writeusemail.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
  }
  else {
    if (isStorageSupport) {
    localStorage.setItem("writeusname", writeusname.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
if (evt.keyCode === 27) {
  evt.preventDefault();
  if (popup.classList.contains("modal-show")) {
    popup.classList.remove("modal-show");
  }
}
});
