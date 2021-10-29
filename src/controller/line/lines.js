import { store } from "../../store.js";
import { checkEmpty } from "../../utils/check.js";
import { $, getLineInput } from "../../utils/dom.js";

let $startLineSelector = $("#line-start-station-selector");
let $endLineSelector = $("#line-end-station-selector");
let lines = {};

/**
 * [] 인풋값을 가져온디
 * [] 값을 정제힌다
 * [] 값을 넣은다;
  [] 해당 배열이 null 일수있다..
*/

function getSelectedStation() {}

function checkLineInput(lineNum, startStation, endStation) {
  let lines = store.getLines();
  console.log(lines[lineNum.toString()] === null);
  if (checkEmpty(lineNum.toString())) {
    alert("노선 번호를 입력해주세요");
    return false;
  }
  let lineStations = lines[lineNum.toString()];
  if (lineStations) {
    console.log(lineStations.includes(startStation));
    if (
      lineStations.includes(startStation) ||
      lineStations.includes(endStation)
    ) {
      alert("해당 노선에 중복된 역이 있습니다.");
      return false;
    }
    return true;
  }
  return true;
}

function inputLine(lineNum, startStation, endStation) {
  if (lines[lineNum]) {
    lines[lineNum].push(startStation, endStation);
    store.setLine(lines);
  } else {
    console.log("2");
    lines[lineNum] = [];
    lines[lineNum].push(startStation, endStation);
    lineNum = "";
    store.setLine(lines);
  }
}

export function addLineEvent() {
  $("#line-add-button").addEventListener("click", (e) => {
    if ($startLineSelector.value === $endLineSelector.value) {
      alert("상행과 하행역이 같습니다");
      return;
    }
    let lineNum = getLineInput();
    if (
      checkLineInput(lineNum, $startLineSelector.value, $endLineSelector.value)
    ) {
      inputLine(lineNum, $startLineSelector.value, $endLineSelector.value);
    }
  });
}
