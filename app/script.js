// home page table number
let table = document.getElementById("table");
let num = document.getElementById("num");
let ceo = table.rows.length;
let me = ceo - 1;
num.innerText = me;
// end script 0

// home page  total hours
var minutes = 0;
var seconds = 0;

if (localStorage.getItem("sessionTime")) {
  var storedTime = parseInt(localStorage.getItem("sessionTime"));
  minutes = Math.floor(storedTime / 60);
  seconds = storedTime % 60;
  document.getElementById("minutes").innerText = minutes;
  document.getElementById("seconds").innerText = seconds;
}

setInterval(function () {
  seconds++;
  if (seconds == 60) {
    minutes++;
    seconds = 0;
  }
  document.getElementById("minutes").innerText = minutes;
  document.getElementById("seconds").innerText = seconds;

  localStorage.setItem("sessionTime", minutes * 60 + seconds);
}, 1000);
// end script 00

// Discount Dashboard
// Catageories Dashboard
document.addEventListener("DOMContentLoaded", function () {
  var forms = document.querySelectorAll(".discount-form");

  forms.forEach(function (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      var image = form.querySelector(".image").files[0];
      var name = form.querySelector(".name").value;
      var id = form.querySelector(".id").value;

      if (image) {
        var reader = new FileReader();
        reader.onload = function (e) {
          var newRow =
            '<tr><td>     <div class="bg_img" style="background-image: url(' +
            e.target.result +
            ');"></div></td><td>' +
            name +
            "</td><td>" +
            id +
            '</td><td><button class="delete-btn">Delete</button></td></tr>';
          form.parentNode.querySelector(".discount-table").innerHTML += newRow;
          form.reset();
        };
        reader.readAsDataURL(image);
      } else {
        alert("Please select an image.");
      }
    });
  });

  document.addEventListener("click", function (event) {
    if (event.target && event.target.className == "delete-btn") {
      event.target.parentNode.parentNode.remove();
    }
  });
});

// remove item
document
  .getElementById("discountForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    var code = document.getElementById("discountCode").value;
    var value = document.getElementById("discountValue").value;
    var newRow =
      "<tr><td>" +
      code +
      "</td><td>" +
      value +
      '</td><td><button class="custom-delete-btn">Delete</button></td></tr>';
    document.getElementById("discountTable").innerHTML += newRow;
    document.getElementById("discountForm").reset();
  });

document.addEventListener("click", function (event) {
  if (event.target && event.target.className == "custom-delete-btn") {
    event.target.parentNode.parentNode.remove();
  }
});

// end script 1

window.onload = function () {
  var elements = document.getElementsByClassName("divs");
  elements[0].style.display = "block";
};

function changeElement(elementId) {
  var elements = document.getElementsByClassName("divs");
  for (var i = 0; i < elements.length; i++) {
    elements[i].style.display = "none";
  }

  document.getElementById(elementId).style.display = "block";
}

// end script code 001122334455

// hiding div

function showDiv(divId) {
  // Hide all divs
  var divs = document.getElementsByClassName("content");
  for (var i = 0; i < divs.length; i++) {
    divs[i].style.display = "none";
  }
  document.getElementById(divId).style.display = "block";
}

//

window.onload = function () {
  let _block_div = document.querySelectorAll("._block_div");
  _block_div.forEach(function (e) {
    e.style.display = "block";
  });
};
