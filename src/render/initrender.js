import { $ } from "../utils/dom.js";
import { store } from "../store.js";
import { initRenderLine } from "./line/line.js";
import { renderStation } from "./station/station.js";

function initRemoveEvent() {
  let $stationTable = $(".station-table");
  $stationTable.addEventListener("click", (e) => {
    if (e.target.classList.contains("station-delete-button")) {
      let id = e.target.closest("tr").dataset.stationId;
      let stations = store.getStation();
      console.log(id);
      stations.splice(id, 1);
      store.setStation(stations);
      renderStation();
    }
  });
}

function initRenderStation() {
  let stationTable = $(".station-table-container");
  const template = `<table border="1" class="station-table">
                      <thead>
                      <tr>
                        <th>역이름</th>
                        <th>설정</th>
                        </tr>
                        </thead>
                      <tbody class="station-table-body">
                      </tbody>           
                      </table> `;
  stationTable.innerHTML = template;
  console.log(stationTable);
  renderStation();
  initRemoveEvent();
  return;
}

export function render() {
  initRenderStation();
  initRenderLine();
}
