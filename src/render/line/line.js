/**
 * [] 상행 셀렉트 렌더
 * [] 하행 셀렉트 렌더
 * [] 시작할때 노선도 출력
 */

import { $ } from "../../utils/dom.js";
import { store } from "../../store.js";

let $startLineSelector = $("#line-start-station-selector");
let $endLineSelector = $("#line-end-station-selector");

function returnLineHtml(station) {
  return `<option value="${station}">${station}</option>`;
}

function renderLineSelector() {
  let stations = store.getStation();
  console.log(stations);
  let template = stations
    .map((e) => {
      return returnLineHtml(e);
    })
    .join("");
  $startLineSelector.innerHTML = template;
  $endLineSelector.innerHTML = template;
}

function renderLineList() {}
export function initRenderLine() {
  renderLineSelector();
}
