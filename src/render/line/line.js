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
  console.log(stations);
  let template = stations
    .map((e) => {
      return returnLineHtml(e);
    })
    .join("");
  $startLineSelector.innerHTML = template;
  $endLineSelector.innerHTML = template;
}

function RenderLineList(){
  
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
  console.log($lineListContainer);
}
export function initRenderLine() {
  renderLineSelector();
  initRenderLineList();
}
