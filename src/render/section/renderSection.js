/**
 *  []   3. 구간 관리
    [] 노선 데이터를 가져와서  버튼 메뉴출력
    [] 역 데이타 가져와서 seleect 태그 렌더링
    [] 인풋값 입력 받아서 노선 로컬스토리지에 순서에 맞게 입력
    [] 노선데이터를 가져와서 구간에 출력
 * 
 */

import { store } from "../../store.js";
import { $, getStationsTemplate } from "../../utils/dom.js";

function lineBtnTemplate(lines) {
  return lines
    .map((line) => {
      return `<button class="section-line-menu-button" data-line-id=${line}>${line}호선</button>`;
    })
    .join("");
}

function sectionInputTemplate(lineNum) {
  let stations = getStationsTemplate();
  return `<h2 data-section-id=${lineNum} class="section-line">${lineNum} 호선</h2>
            <h4>구간 등록</h4>
          <div class="section-input" >
          <select id="section-station-selector">${stations}</select>
            <input
              id="section-order-input"
              placeholder="구간."
            />
            <button id="section-add-button">등록(숫자만)</button>
          </div>
          <table border="1" class="section-table">
                  <thead>
                    <tr>
                      <th>순서</th>
                      <th>이름</th>
                      <th>설정</th>
                    </tr>
                  </thead>
                  <tbody class="section-table-body">
                  </tbody>           
                  </table>
          `;
}

function sectionStationsTemplate(stations) {
  return stations
    .map((station, index) => {
      return `<tr data-section-order-id=${index}>
              <td>${index}</td>
              <td>${station}</td>
              <td>
              <button class="station-delete-button">삭제</button>
              </td>
              </tr>`;
    })
    .join("");
}

function renderSectionStations(lineNum) {
  let $sectionTable = $(".section-table-body");
  let lines = store.getLines();
  let lineStations = lines[lineNum];
  let template = sectionStationsTemplate(lineStations);
  $sectionTable.innerHTML = template;
}

function renderLineSelect() {
  let lines = store.getLines();
  let lineNumbers = [];
  let selectContainer = $(".line-select-container");
  for (let key in lines) {
    lineNumbers.push(key);
  }
  let template = lineBtnTemplate(lineNumbers);
  console.log(template);
  selectContainer.innerHTML = template;
}

export function renderSectionInput(lineNum) {
  let $sectionContainer = $(".section-input-container");
  $sectionContainer.innerHTML = sectionInputTemplate(lineNum);
  renderSectionStations(lineNum);
}
function renderSection() {}
export function initRenderSection() {
  renderLineSelect();
}
