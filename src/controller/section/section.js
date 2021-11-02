import { renderSectionInput } from "../../render/section/renderSection.js";
import { store } from "../../store.js";
import { $, delegate } from "../../utils/dom.js";

function reRender(num) {
  renderSectionInput(num);
  sectionDeleteEvent();
  sectionAddEvent();
}

function selectHandler(e) {
  if (e.target.classList.contains("section-line-menu-button")) {
    const line = e.target.dataset.lineId;
    reRender(line);
  }
}

function getSectionLine() {
  return document.querySelector(".section-line").dataset.sectionId;
}

function checkSectionData() {
  let lineNum = getSectionLine();
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
      let order = e.target.closest("tr").dataset.sectionOrderId;
      let line = store.getLines();
      let lineNum = getSectionLine();
      let lineStations = line[lineNum];
      line[lineNum].splice(order, 1);
      store.setLine(line);
      reRender(lineNum);
    }
  }
}

function sectionAddHandler(e) {
  let station = document.querySelector("#section-station-selector").value;
  let order = $("#section-order-input").value.trim();
  let line = store.getLines();
  let lineStations = line[getSectionLine()];
  if (lineStations.includes(station)) {
    alert("해당 노선에 중복된 구간입니다");
    return;
  }
  lineStations.splice(order, 0, station);
  store.setLine(line);
  reRender(getSectionLine());
}

function sectionAddEvent() {
  document
    .querySelector("#section-add-button")
    .addEventListener("click", (e) => {
      sectionAddHandler(e);
    });
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
