import { render } from "./render/initrender.js";
import { initEvent } from "./controller/initColtroller.js";
const MIN_STRING_LENGTH = 2;

function subwayApp() {
  render();
  initEvent();
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
 * [x] 삭제버튼을 누를시 로컬 스토리지에서 삭제하고 다시 렌더링하기
 *
 *
 *2. 노선관리
    [x] 역정보를 가져와서 상행 하행 셀럭트 렌더하기
    [x] 노선추가 이벤트 작성
*   [] 노선테이블 렌더링
      [] 로컬스토리지에서 전체 라인 데이터 가져와서 렌더링하기
 * 


    3. 구간 관리
    [x] 노선 데이터를 가져와서  버튼 메뉴출력
    [x] 역 데이타 가져와서 seleect 태그 렌더링
    [] 노선에 있는 역 데이터 가져와서 렌더링
    [] 인풋값 입력 받아서 노선 로컬스토리지에 순서에 맞게 입력
    [] 노선데이터를 가져와서 구간에 출력
 * ! 어려운점
 *  dom접근을 어떻게 하면 좋을까..
 *  const 변수를 할당해서 전역에서 접근할 수 있게 할까?
 */
