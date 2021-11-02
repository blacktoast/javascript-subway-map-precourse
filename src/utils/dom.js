import { store } from "../store.js";

export const $ = (e) => document.querySelector(e);
export function getLineInput() {
  return $("#line-name-input").value.trim();
}
export function emptyInputValue(inputDom) {
  inputDom = "";
}

export function delegate(parent, selector, eventHandler) {
  parent.addEventListener("click", (e) => {
    console.log(e.target);
    if (e.target.classList.contains(selector)) {
      eventHandler(e);
      return;
    }
  });
}

export function getStationsTemplate() {
  let template;
  if (store.getStation()) {
    let stations = store.getStation();
    template = stations
      .map((e) => {
        return `<option value="${e}">${e}</option>`;
      })
      .join("");
  }
  return template;
}
