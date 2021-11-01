import { $ } from "../../utils/dom.js";
import { store } from "../../store.js";
import { DeleteStationEvent } from "../../controller/initColtroller.js";

export function initRenderStation() {
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
  renderStation();
  DeleteStationEvent();
  return;
}

function renderStation() {
  let stationTable = $(".station-table-body");
  const stations = store.getStation();
  if (stations) {
    const template = stations
      .map((item, index) => {
        return `<tr data-station-id=${index}>
                  <td>${item}</td>
                  <td>
                    <button class="station-delete-button">삭제</button>
                  </td>
                </tr>`;
      })
      .join("");
    stationTable.innerHTML = template;
  }
}
