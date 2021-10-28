import { store } from "../../store.js";
import { $, getLineInput } from "../../utils/dom.js";

let $startLineSelector = $("#line-start-station-selector");
let $endLineSelector = $("#line-end-station-selector");
let lines = { 3: [2] };

function checkLineInput() {}
function getSelectedStation() {}

export function addLineEvent() {
  $("#line-add-button").addEventListener("click", (e) => {
    if ($startLineSelector.value === $endLineSelector.value) {
      alert("상행과 하행역이 같습니다");
      return;
    }
    let lineNum = getLineInput();
    if (lines[lineNum.value]) {
      lines[lineNum.value].push(4);
      console.log(lines);
    } else {
      console.log("2");
      lines[lineNum.value] = [];
      lines[lineNum.value].push(4);
      lineNum.value = "";
      console.log(lines);
    }
  });
}
