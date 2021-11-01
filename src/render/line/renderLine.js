/**
 * [] 상행 셀렉트 렌더
 * [] 하행 셀렉트 렌더
 * [] 시작할때 노선도 출력
 */

import { $ } from "../../utils/dom.js";
import { store } from "../../store.js";

let $startLineSelector = $("#line-start-station-selector");
let $endLineSelector = $("#line-end-station-selector");
let $lineListContainer = $(".station-line-list-container");
function returnLineHtml(station) {
  return `<option value="${station}">${station}</option>`;
}

function renderLineSelector() {
  let stations = store.getStation();
  let template = stations
    .map((e) => {
      return returnLineHtml(e);
    })
    .join("");
  $startLineSelector.innerHTML = template;
  $endLineSelector.innerHTML = template;
}

function lineListTemplate(lineNumbers, startStations, endStations) {
  return lineNumbers
    .map((line, index) => {
      return `<tr data-line-id=${line}>
        <td >${line} 호선</td>
        <td>${startStations[index]}</td>
        <td>${endStations[index]}</td>
        <td>
          <button class="line-delete-button">삭제</button>
        </td>
      </tr>`;
    })
    .join("");
}

export function renderLineList() {
  let lines = store.getLines();
  let stations = [];
  let startStations = [];
  let endStations = [];
  let lineNumbers = [];
  let $lineList = $(".line-table-body");
  for (let key in lines) {
    stations = lines[key];
    lineNumbers.push(key);
    startStations.push(stations[0]);
    endStations.push(stations[stations.length - 1]);
    console.log(lineNumbers);
  }
  let template = lineListTemplate(lineNumbers, startStations, endStations);
  $lineList.innerHTML = template;
}

function initRenderLineList() {
  let template = `<table border="1" class="line-table">
                  <thead>
                    <tr>
                      <th>노선이름</th>
                      <th>상행역</th>
                      <th>하행역</th>
                      <th>설정</th>
                    </tr>
                  </thead>
                  <tbody class="line-table-body">
                  </tbody>           
                  </table> `;
  $lineListContainer.innerHTML = template;
}
export function initRenderLine() {
  renderLineSelector();
  initRenderLineList();
  renderLineList();
}
