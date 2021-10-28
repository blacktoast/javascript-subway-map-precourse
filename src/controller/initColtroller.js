import { addLineEvent } from "./line/lines.js";
import { store } from "../store.js";
import { $ } from "../utils/dom.js";
import { renderStation } from "../render/station/station.js";
function addStation(stations, stationName) {
  stations.push(stationName);
  store.setStation(stations);
}

function checkValidStationName(stationName) {
  let stations = [];
  if (store.getStation()) {
    stations.push(store.getStation());
    stations = stations.flat();
    if (stations.includes(stationName)) {
      alert("중복된 역이름 입니다");
      return;
    }
    console.log(stations);
    return addStation(stations, stationName);
  }
  return addStation(stations, stationName);
}

function getStationName() {
  let inputtedStationName = $("#station-name-input").value.trim();
  console.log(inputtedStationName);
  if (inputtedStationName.includes(" ")) {
    alert("역이름에 공백이 들어갈수 없습니다");
    return;
  }
  if (inputtedStationName === "") {
    alert("역이름을 입력해주세요");
    return;
  }
  $("#station-name-input").value = "";
  return checkValidStationName(inputtedStationName);
}

function addStationEvent() {
  $("#station-add-button").addEventListener("click", (e) => {
    getStationName();
    renderStation();
  });
}

export function initEvent() {
  addStationEvent();
  addLineEvent();
}
