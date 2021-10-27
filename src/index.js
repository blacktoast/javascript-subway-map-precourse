const $ = (e) => document.querySelector(e);

const MIN_STRING_LENGTH = 2;

const store = {
  setItem(key) {
    console.log("set test");
    localStorage.setItem("stations", JSON.stringify(key));
  },
  getStation() {
    return JSON.parse(localStorage.getItem("stations"));
  },
};

function addStation(stations, stationName) {
  stations.push(stationName);
  console.log(stations);
  store.setItem(stations);
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
  });
}

function initEvent() {
  addStationEvent();
}

function subwayApp() {
  initEvent();
}

new subwayApp();
/**
 *  1. 역관리
 * [] 역 추가 버튼을 누를시 역이름을 로컬 스토리지에 저장
 *    [x] 역 이름 입력시 공백 체크
 *    [] 중복된 역 이름 입력시 체크
 *    []
 * [] 로컬 스토리지에 저장된 데이터를 지하철 역 목록에 출력하기
 * [] 삭제버튼을 누를시 로컬 스토리지에서 삭제하고 다시 렌더링하기
 *
 *
 */
