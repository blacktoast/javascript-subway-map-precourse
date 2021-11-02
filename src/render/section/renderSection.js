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

function sectionInputTemplate(lineNum) {
  let stations = getStationsTemplate();
  console.log(lineNum);
  return `<h2>${lineNum} 호선</h2>
            <h4>구간 등록</h4>
          <div class="section-input" >
          <select id="section-station-selector">${stations}</select>
            <input
              id="section-order-input"
              placeholder="역 이름을 입력해주세요."
            />
            <button id="section-add-button">역 추가</button>
          </div>`;
}
export function renderSectionInput(lineNum) {
  let $sectionContainer = $(".section-input-container");
  $sectionContainer.innerHTML = sectionInputTemplate();
}
function renderSection() {}
export function initRenderSection() {
  renderLineSelect();
}
