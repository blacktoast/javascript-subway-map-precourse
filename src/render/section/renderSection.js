/**
 *  []   3. 구간 관리
    [] 노선 데이터를 가져와서  버튼 메뉴출력
    [] 역 데이타 가져와서 seleect 태그 렌더링
    [] 인풋값 입력 받아서 노선 로컬스토리지에 순서에 맞게 입력
    [] 노선데이터를 가져와서 구간에 출력
 * 
 */

import { store } from "../../store.js";
import { $ } from "../../utils/dom.js";
function lineBtnTemplate(lines) {
  return lines
    .map((line) => {
      return `<button class="section-line-menu-button">${line}호선</button>`;
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

function renderSectionInput() {}
export function initRenderSection() {
  renderLineSelect();
}
