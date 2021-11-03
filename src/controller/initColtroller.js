import { addLineEvent, deleteLineEvent } from "./line/addline.js";
import { store } from "../store.js";
import { $, delegate } from "../utils/dom.js";
import { initRenderStation, renderStation } from "../render/station/station.js";
import { checkEmpty, checkInputBlank } from "../utils/check.js";
import { initRenderLine } from "../render/line/renderLine.js";
import { initSectionEvent } from "./section/section.js";
import { initRenderSection } from "../render/section/renderSection.js";
import { initRenderMap } from "../render/map/renderMap.js";
function addStation(stations, stationName) {
  stations.push(stationName);
  store.setStation(stations);
  emptyStation();
}

function emptyStation() {
  $("#station-name-input").value = "";
}
function checkValidStationName(stationName) {
  let stations = [];
  if (store.getStation()) {
    stations.push(store.getStation());
    stations = stations.flat();
    if (stations.includes(stationName)) {
      alert("중복된 역이름 입니다");
      emptyStation();
      return;
    }
    console.log(stations);
    return addStation(stations, stationName);
  }
  return addStation(stations, stationName);
}

function getStationName() {
  let inputtedStationName = $("#station-name-input").value.trim();
  if (checkEmpty(inputtedStationName)) {
    alert("역이름을 입력해주세요");
    emptyStation();
    return;
  }
  if (checkInputBlank(inputtedStationName)) {
    alert("역이름에 공백이 들어갈수 없습니다");
    emptyStation();
    return;
  }

  return checkValidStationName(inputtedStationName);
}

//해당 페런츠에 원하는 이벤트를 위임하는 함수

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
export function DeleteStationEvent() {
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
function initStationEvent() {
  addStationEvent();
  DeleteStationEvent();
}

function selectMenu(id) {
  document.querySelector(".station-manager-page").hidden = !(id & 1);
  document.querySelector(".line-manager-page").hidden = !(id & 2);
  document.querySelector(".section-manager-page").hidden = !(id & 4);
  document.querySelector(".map-print-page").hidden = !(id & 8);
}

function menuSelectHandler(e) {
  let id = e.target.dataset.menuId;
  switch (id) {
    case "station":
      initRenderStation();
      DeleteStationEvent();
      selectMenu(1);
      break;
    case "line":
      initRenderLine();
      deleteLineEvent();
      selectMenu(2);
      break;
    case "section":
      initRenderSection();
      selectMenu(4);
      break;
    case "map":
      initRenderMap();
      selectMenu(8);
      break;
  }
}

function initMenu() {
  let menu = $(".station-menu");
  const btn = "menu";
  delegate(menu, btn, menuSelectHandler);
}

export function initEvent() {
  initMenu();
  initStationEvent();
  addLineEvent();
  deleteLineEvent();
  initSectionEvent();
}
