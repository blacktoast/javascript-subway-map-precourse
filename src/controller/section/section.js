import { renderSectionInput } from "../../render/section/renderSection.js";
import { store } from "../../store.js";
import { $, delegate } from "../../utils/dom.js";

function selectHandler(e) {
  if (e.target.classList.contains("section-line-menu-button")) {
    console.log(e.target.dataset.lineId);
    renderSectionInput("1");
  }
}

function selectLineEvent() {
  let selectContainer = $(".line-select-container");
  let btn = "section-line-menu-button";
  delegate(selectContainer, btn, selectHandler);
}

export function initSectionEvent() {
  selectLineEvent();
}
