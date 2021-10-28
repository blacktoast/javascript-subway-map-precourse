import { $ } from "../../utils/dom.js";
import { store } from "../../store.js";

export function renderStation() {
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
