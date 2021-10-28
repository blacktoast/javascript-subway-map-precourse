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

//해당 페런츠에 원하는 이벤트를 위임하는 함수
function delegate(parent, selector, eventHandler) {
  parent.addEventListener("click", (e) => {
    if (e.target.classList.contains(selector)) {
      eventHandler(e);
      return;
    }
  });
}

//클릭한 역을 삭제하는 함수
function deleteStationHandler(e) {
  if (confirm("해당 역을 삭제 하시겠습니까?")) {
    let id = e.target.closest("tr").dataset.stationId;
    let stations = store.getStation();
    stations.splice(id, 1);
    store.setStation(stations);
    renderStation();
  }
}

//삭제이벤트 초기화 함수
function DeleteStationEvent() {
  let $stationTable = $(".station-table");
  const $stationDeleteBtn = "station-delete-button";
  delegate($stationTable, $stationDeleteBtn, deleteStationHandler);
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
  DeleteStationEvent();
}
