const tree = document.getElementById("tree");
const app = document.getElementById("append");
let node;
let nodeElement;
let temp;
let list;
let arr = [];

function iterobj(obj) {
  // console.log(obj);
  for (val in obj) {
    if (typeof obj[val] == "object") {
      if (obj[val].hasOwnProperty("name")) {
        nodeElement = document.getElementById(node);
        nodeElement.innerHTML += `
          <li class="${obj[val].name.split(/\s+/).join("")}"> ${obj[val].name}
          <ul id="${obj[val].name.split(/\s+/).join("")}"></ul>
          </li>
        `;

        if (obj[val].hasOwnProperty("children")) {
          for (x of obj[val].children) {
            // console.log(x.name);
            document.getElementById(obj[val].name).innerHTML += `
            <li> ${x.name}
            <ul id="${x.name.split(/\s+/).join("")}+"></ul>
            </li>
            `;
            arr.push(x.name);
            // console.log(x.name.split(/\s+/).join(""));
            // document.getElementsByClassName(x.name)[0]
            // list = document.getElementsByClassName(x.name);
            //   console.log(list[0]);
          }
        }
      }
      iterobj(obj[val]);
    } else {
      // CODE PENDING

      for (let x of arr) {
        list = document.getElementsByClassName(x);
        // console.log(list[0])
        if(list[0] != undefined && list[0] != null)
        list[0].remove();
      }
    }
  }
}

$(document).ready(() => {
  $.ajax({
    type: "GET",
    url: "data.js",
    async: true,
    datatype: "JSON",
    success: (res) => {
      // console.log(res);
      data = JSON.parse(res);
      // console.log(data);
      for (parent of data) {
        // console.log(parent);
        app.innerHTML += `
        <li class="${parent.name.split(/\s+/).join("")}"> ${parent.name} 
        <ul id="${parent.name.split(/\s+/).join("")}"></ul>
        </li>
        `;
        node = parent.name.split(/\s+/).join("");
        iterobj(parent);
      }
    },
  });
});
console.clear();
// list = document.getElementsByClassName(x.name);
// console.log(list[0]);
