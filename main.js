const tree = document.getElementById("tree");
const app = document.getElementById("append");
let node;
let nodeElement;

function iterobj(obj) {
  for (val in obj) {
    console.log("*" + node);
    nodeElement = document.getElementById(node);
    console.log(nodeElement);

    if (typeof obj[val] == "object") {
      console.log(obj[val].name);
      if (obj[val].hasOwnProperty("name")) {
        nodeElement.innerHTML += `
          <li> ${obj[val].name} 
          <ul id="${obj[val].name.split(/\s+/).join("")}"></ul>
          </li>
        `;
      }
      iterobj(obj[val]);
    } else {
      // console.log(obj[val]);
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
      //   console.log(res);
      //   console.log(data);
      // console.log(data[0].name)
      for (parent of data) {
        app.innerHTML += `
          <li> ${parent.name} 
           <ul id="${parent.name.split(/\s+/).join("")}"></ul>
          </li>
        `;
        node = parent.name.split(/\s+/).join("");
        iterobj(parent);
        console.log("DONE");
      }
    },
  });
});
