let main_cat = document.getElementById("main-cat");
let sub1_cat = document.getElementById("sub1-cat");
let sub2_cat = document.getElementById("sub2-cat");
let path;

var xhr = new XMLHttpRequest();
xhr.open("GET", "categories.json");

xhr.send();
let data;
xhr.addEventListener("load", function () {
  if (xhr.status == 200) {
    data = JSON.parse(xhr.response);
    // console.log(data);
    for (let cat in data) {
      main_cat.innerHTML += `
            <div class="item d-flex align-items-center border-bottom p-1" style="height:45px" role="button" id="${cat}" onclick="showSubCategories(this)">
            <img src="${data[cat].icon}" height="30px" width="70px" style="padding: 0px 20px;"> 
            <p style="margin-bottom: 0; font-size: small;" class="me-auto">${cat}</p>
            <img src="./images/svg/arrow-right.svg" height="14px" class="pr-1">
          </div>`;
    }
  }
});

function showSubCategories(th) {
  let items = data[th.id].subcategories;
  sub1_cat.innerHTML = "";
  sub2_cat.innerHTML = "";
  path = `${th.id} / `;
  console.log(path);
  // console.log(data[th.id].subcategories);
  for (let cat in items) {
    if (typeof items[cat] == "string") {
      sub1_cat.innerHTML += `
        <div class="item d-flex justify-content-between align-items-center border-bottom p-1" style="height: 45px;" role="button" id="${items[cat]}" onclick=
        "openAttributes(this)">
        <a class="text-decoration-none text-black" style="font-size:small; padding-left:20px">${items[cat]}</a>
        `;
    } else {
      sub1_cat.innerHTML += `<div class="item d-flex justify-content-between align-items-center border-bottom p-1" style="height: 45px;"role="button" id="${th.id}" onclick="showSub2Categories(this,${cat})">
            <div style="font-size:small; padding-left:20px">${items[cat].title}</div>
            <img src="./images/svg/arrow-right.svg" height="14px" class="pr-1">
          </div>`;
    }
  }
}

function showSub2Categories(th, cat) {
  let items = data[th.id].subcategories[cat].subcategories;
  sub2_cat.innerHTML = "";
  path += `${data[th.id].subcategories[cat].title} / `;
  // console.log(items);
  for (let cat in items) {
    sub2_cat.innerHTML += `
        <div class="item d-flex align-items-center border-bottom p-1 check" style="height: 45px;"id="${items[cat]}"role="button" onclick=
        "openAttributes(this)">
            <a class="text-decoration-none text-black" style="font-size:small; padding-left:20px">${items[cat]}</a>
          </div>`;
  }
}

function openAttributes(th) {
  path += `${th.id}`;
  console.log(path);
  localStorage.setItem("path", path);
  location.href = "./attributes.html";
}

function openHome() {
  location.href = "./home.html";
}
