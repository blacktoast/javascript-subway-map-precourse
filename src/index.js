import { render } from "./render/initrender.js";
import { renderStation } from "./render/station/station.js";
import { initEvent } from "./controller/initColtroller.js";
const MIN_STRING_LENGTH = 2;


function subwayApp() {
  initEvent();
  render();
}

new subwayApp();
/**
 *  1. 역관리
 * [x] 역 추가 버튼을 누를시 역이름을 로컬 스토리지에 저장
 *    [x] 역 이름 입력시 공백 체크
 *    [x] 중복된 역 이름 입력시 체크
 *    []
 * [] 로컬 스토리지에 저장된 데이터를 지하철 역 목록에 출력하기
 *  [x] 로컬스토리지에서 데이터 값을 가져와서 stations 변수에 저장하기
 *  [x] stations 값으로 table 안에서 tr태그로 랜더링하기
 *  [] 삭제버튼도 같이 렌더링 하기
 * [] 삭제버튼을 누를시 로컬 스토리지에서 삭제하고 다시 렌더링하기
 *
 *
 *2. 노선관리
    [] 역정보를 가져와서 상행 하행 셀럭트 렌더하기
    [] 노선추가 이벤트 작성
 * 
 * 
 * ! 어려운점
 *  dom접근을 어떻게 하면 좋을까..
 *  const 변수를 할당해서 전역에서 접근할 수 있게 할까?
 */
