/**
 *  1. 역관리
 * [] 역 추가 버튼을 누를시 역이름을 로컬 스토리지에 저장
 * [] 로컬 스토리지에 저장된 데이터를 지하철 역 목록에 출력하기
 * [] 삭제버튼을 누를시 로컬 스토리지에서 삭제하고 다시 렌더링하기
 *
 *
 */
const $ = (e) => document.querySelector(e);

function addStationEvent() {
  console.log($("#station-name-input"));
}

function initEvent() {
  addStationEvent();
}

function subwayApp() {
  console.log("tst");
  initEvent();
}
console.log("test");
subwayApp();
