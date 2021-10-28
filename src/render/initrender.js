import { $ } from "../utils/dom.js";
import { store } from "../store.js";
import { initRenderLine } from "./line/line.js";

function renderStation() {
  let stationTable = $(".station-table-body");
  const stations = store.getStation();
  if (stations) {
    const template = stations
      .map((item, index) => {
        console.log(item, index);
        return `<tr data-station-id=${index}>
                  <td>${item}</td>
                  <td>
                    <button class="station-delete-button">삭제</button>
                  </td>
                </tr>`;
      })
      .join("");
    stationTable.innerHTML = template;
    console.log(template);
  }
}

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
