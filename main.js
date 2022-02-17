const tree = document.getElementById("tree");
const app = document.getElementById("append");
let node;
let nodeElement;
let temp;

function iterobj(obj) {
  for (val in obj) {
    if (typeof obj[val] == "object") {
      if (obj[val].hasOwnProperty("name")) {
        nodeElement = document.getElementById(node);
        nodeElement.innerHTML += `
          <li> ${obj[val].name}
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
            console.log(document.getElementById(x.name.split(/\s+/).join("")));
            // document.getElementById(x.name).remove();
          }
        }
      }
      iterobj(obj[val]);
    } else {
      // CODE PENDING
    }
  }
}

$(document).ready(() => {
  $.ajax({
    type: "GET",
    url: "data.js",
    success: (res) => {
      data = JSON.parse(res);

      for (parent of data) {
        app.innerHTML += `
          <li> ${parent.name} 
           <ul id="${parent.name.split(/\s+/).join("")}"></ul>
          </li>
        `;
        node = parent.name.split(/\s+/).join("");
        temp = node;
        iterobj(parent);
      }
    },
  });
});
console.clear();
