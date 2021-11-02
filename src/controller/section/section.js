import { renderSectionInput } from "../../render/section/renderSection.js";
import { store } from "../../store.js";
import { $, delegate } from "../../utils/dom.js";

function selectHandler(e) {
  if (e.target.classList.contains("section-line-menu-button")) {
    const line = e.target.dataset.lineId;
    renderSectionInput(line);
    sectionDeleteEvent(line);
  }
}

function checkSectionData() {
  let lineNum = document.querySelector(".section-line").dataset.sectionId;
  let line = store.getLines()[lineNum];
  if (line.length < 3) {
    alert("해당 구간의 역의 갯수는 2개이하가 될수없습니다");
    return false;
  }
  return true;
}

function sectionDeleteHandler(e) {
  if (confirm("해당 노선을 삭제하시겠습니까?")) {
    if (checkSectionData()) {
      console.log(e.target.closest("tr").dataset.sectionOrderId);
    }
  }
}

function sectionDeleteEvent() {
  let section = $(".section-table");
  let btn = "station-delete-button";
  delegate(section, btn, sectionDeleteHandler);
}

function selectLineEvent() {
  let selectContainer = $(".line-select-container");
  let btn = "section-line-menu-button";
  delegate(selectContainer, btn, selectHandler);
}

export function initSectionEvent() {
  selectLineEvent();
}
