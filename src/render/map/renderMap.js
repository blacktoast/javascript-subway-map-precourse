import { store } from "../../store.js";
import { $ } from "../../utils/dom.js";

let mapContanier = $(".map-print-page");

function mapTemplate() {
  let lines = store.getLines();
  let template = "";
  for (let key in lines) {
    console.log(lines);
    template += `<h2>${key} 호선 </h2><ul>`;
    template += lines[key]
      .map((station) => {
        return `<li>${station}</li>`;
      })
      .join("");
    template += "</ul>";
  }
  return template;
}

function renderMap() {
  let template = mapTemplate();
  mapContanier.innerHTML = template;
}

export function initRenderMap() {
  renderMap();
}
