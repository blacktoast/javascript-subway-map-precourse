import { store } from "../../store.js";
import { $ } from "../../utils/dom.js";

let $startLineSelector = $("#line-start-station-selector");
let $endLineSelector = $("#line-end-station-selector");

function checkLineInput() {}
function getSelectedStation() {}

export function addLineEvent() {
  $("#line-add-button").addEventListener("click", (e) => {
    console.log($startLineSelector.value);
    console.log($endLineSelector.value);
  });
}
