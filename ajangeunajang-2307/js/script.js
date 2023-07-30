//1.HTML DOM 엘리먼트 불러오기
const XXX = document.querySelectorAll(".linktree li")

//2. Random Position 값 구하기
Math.round(Math.random() * (window.innerWidth - 0) + 0);  // 화면크기 불러오는 것 window.innerWith 로! Math.round() 안에 넣으면 소숫점 삭제됨ㅎ

//3. HTML DOM 엘리먼트 스타일에 Random Position 적용하기
//list.의 left 속성(왼쪽 위치값에)과 top 포지션에 랜덤값 넣어주기

// XXX[0].style.left = `${Math.round(Math.random() * (window.innerWidth - 0) + 0)}px`
// XXX[0].style.top = `${Math.round(Math.random() * (window.innerHeight - 0) + 0)}px`


//단위를 넣어줘야 위치값이 제대로 들어가 적용된다. 단위는 문자열인데, 
//문자열과 자바스크립트언어(계신식)를 함께 써야할 때는, ~ ` 따옴표 거꾸로된 (왼쪽 위키)와 달러${중괄호} 사용
// `${자바스크립트 구문}px`


//반복문 활용해서 0-3 번째 리스트들 모두에 (랜덤)위치값 넣어주기
// for(let i = 0; i < XXX.length; i ++){
//     XXX[i].style.left = `${Math.round(Math.random() * (window.innerWidth - 0) + 0)}px`
//     XXX[i].style.top = `${Math.round(Math.random() * (window.innerHeight - 0) + 0)}px`
// }


//함수 정의 = 함수 만들어서 최대값, 최소값만 넣으면 알아서 작동되는 랜덤값 추출
const TTTTT = (maxxxx, minnnn) => {
    return Math.round(Math.random() * (maxxxx - minnnn) + minnnn)
}

//확인 = 콘솔에 함수 결과값 띄워보기
console.log(TTTTT(10,100))

//함수를 사용해 랜덤 위치값 추출식을 간단하게 만들기!
for(let i = 0; i < XXX.length; i ++){
    XXX[i].style.left = `${TTTTT(window.innerWidth - 120, 120)}px`
    XXX[i].style.top = `${TTTTT(window.innerHeight-100, 200)}px`
}