const $ = (e) => document.querySelector(e);

const store = {
  setStation(stations, stationName) {
    localStorage.setItem(
      "stations",
      JSON.stringify(`${stations} ${stationName}`)
    );
  },
  getStation() {
    return localStorage.getItem("stations");
  },
};

function addStationEvent() {
  $("#station-name-input").addEventListener("click", (e) => {
    let stations = [];
    stations = JSON.parse(localStorage.getItem("stations"));
    //stations.push($("#station-name-input").value);
    store.setStation(stations, $("#station-name-input").value);
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
 * [] 로컬 스토리지에 저장된 데이터를 지하철 역 목록에 출력하기
 * [] 삭제버튼을 누를시 로컬 스토리지에서 삭제하고 다시 렌더링하기
 *
 *
 */
