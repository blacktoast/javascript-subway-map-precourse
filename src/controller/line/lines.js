import { initRenderLine } from "../../render/line/renderLine.js";
import { store } from "../../store.js";
import { checkEmpty } from "../../utils/check.js";
import { $, delegate, getLineInput } from "../../utils/dom.js";

let $startLineSelector = $("#line-start-station-selector");
let $endLineSelector = $("#line-end-station-selector");

let lines = store.getLines() ? store.getLines() : {};

/**
 * [] 인풋값을 가져온디
 * [] 값을 정제힌다
 * [] 값을 넣은다;
  [] 해당 배열이 null 일수있다.. 어떻게 체킹하지?
  [] 배열값이 들어오면 
*/

function getSelectedStation() {}

function checkLineInput(lineNum, startStation, endStation) {
  let lines = store.getLines();
  let lineStations = lines[lineNum.toString()];
  console.log(lines[lineNum.toString()] === null);
  if (checkEmpty(lineNum.toString())) {
    alert("노선 번호를 입력해주세요");
    return false;
  }
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
  if (!lines[lineNum]) {
    lines[lineNum] = [];
    store.setLine(lines);
  }
  if (checkLineInput(lineNum, startStation, endStation)) {
    lines[lineNum].push(startStation, endStation);
    lineNum = "";
    store.setLine(lines);
  }
}

function deleteLineHandler(e) {
  if (confirm("해당 노선을 삭제 하겠습니까?")) {
    let key = e.target.closest("tr").dataset.lineId;
    let lines = store.getLines();
    delete lines[key];
    store.setLine(lines);
    initRenderLine();
  }
}

export function deleteLineEvent() {
  let $lineTable = $(".line-table");
  const $deleteLineBtn = "line-delete-button";
  delegate($lineTable, $deleteLineBtn, deleteLineHandler);
}

export function addLineEvent() {
  $("#line-add-button").addEventListener("click", (e) => {
    if ($startLineSelector.value === $endLineSelector.value) {
      alert("상행과 하행역이 같습니다");
      return;
    }
    let lineNum = getLineInput();
    inputLine(lineNum, $startLineSelector.value, $endLineSelector.value);
    initRenderLine();
  });
}
