import { $ } from "../utils/dom.js";
import { store } from "../store.js";
import { initRenderLine } from "./line/renderLine.js";
import { initRenderStation } from "./station/station.js";
import { initRenderSection } from "./section/renderSection.js";

export function render() {
  initRenderStation();
  initRenderLine();
  initRenderSection();
}
