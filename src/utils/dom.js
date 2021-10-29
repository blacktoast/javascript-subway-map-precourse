export const $ = (e) => document.querySelector(e);
export function getLineInput() {
  return $("#line-name-input").value.trim();
}
export function emptyInputValue(inputDom) {
  inputDom = "";
}
