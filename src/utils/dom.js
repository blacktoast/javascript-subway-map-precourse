export const $ = (e) => document.querySelector(e);
export function getLineInput() {
  return $("#line-name-input").value.trim();
}
export function emptyInputValue(inputDom) {
  inputDom = "";
}

export function delegate(parent, selector, eventHandler) {
  parent.addEventListener("click", (e) => {
    if (e.target.classList.contains(selector)) {
      eventHandler(e);
      return;
    }
  });
}
