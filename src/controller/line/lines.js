import { store } from "../../store.js";
import { $ } from "../../utils/dom.js";

let $startLineSelector = $("#line-start-station-selector");
let $endLineSelector = $("#line-end-station-selector");

function checkLineInput() {}
function getSelectedStation() {}
function getLine() {
  return $("#line-name-input").value;
}

export function addLineEvent() {
  $("#line-add-button").addEventListener("click", (e) => {
    if ($startLineSelector.value === $endLineSelector.value) {
      alert("상행과 하행역이 같습니다");
      return;
    }
    console.log(getLine());
  });
}
