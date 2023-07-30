//(1) 마우스 움직일 때, 그래픽이 따라오고 sun그림자 방향 (스타일)이 바뀌는 함수/이벤트.
//마우스 위치 좌표값  `${e.x}px` `${e.y}px`
//document.querySelector(".").style.top = `${e.y}`

const kkkk = (e) => {
    document.querySelector(".svgsun").style.top =
        `${(e.y / window.innerHeight) * (window.innerHeight * 0.5)}px`    // `${e.y / 2}px`
    document.querySelector(".svgsun").style.left =
        `${(e.x / window.innerWidth) * (window.innerWidth * 0.5)}px`    // `${e.x / 2}px`

    document.querySelector(".sun").style.boxShadow =
        `inset ${(e.x / window.innerWidth) * 32 - 8}px ${(e.y / window.innerHeight) * 32 - 8}px 26px rgba(0, 0, 0, 0.25)`
}
window.addEventListener("mousemove", kkkk);






//(2) 클릭하면, 새로운 그래픽(이미지/스티커/구름)가 생겨남.
//document.createElement("div");
//innerText = "";
//document.querySelector(".").appendChild();

const pppp = (e) => {
    const oooo = document.createElement("div")
    oooo.innerText = "☻"
    oooo.style.fontSize = `${Math.random() * 8 + 2}rem`
    oooo.style.top = `calc(${e.y}px - 0.7em)`
    oooo.style.left = `calc(${e.x}px - 0.5em)`

    document.querySelector(".snow .gun").appendChild(oooo)
}
window.addEventListener("click", pppp)







//(3) 마우스 움직일 때, 그래픽 위치에 영향을 줌.
//document.querySelectorAll(".").forEach( ⦁ => ⦁.style.top = `${e.y/2}px` )

const rrrr = (e) => {
    document.querySelectorAll(".rain .gradation >div:nth-child(odd)").forEach(
        rrrr13 => rrrr13.style.top = `${e.y / 2}px`
        // forEach는 배열의 요소 각각에 대해 함수를 적용시킴. [ex] 배열이름.forEach( 함수Y )
    )
    document.querySelectorAll(".rain .gradation >div:nth-child(even)").forEach(
        rrrr24 => rrrr24.style.top = `${(window.innerHeight - e.y) / 2 - window.innerHeight / 4}px`
    )
}
window.addEventListener("mousemove", rrrr);







//(4) 클릭하면, 새로운 그래픽(이미지/스티커/구름)가 생겨남. 1초뒤 하나더 생성.
//setTimeout(() => {}, 1000)

const createbubble = (e) => {

    const divcloud = document.createElement("div")
    document.querySelector(".cloud-box").appendChild(divcloud)

    const ratios = [1.6, 2.2]
    const ratio = ratios[Math.floor(Math.random() * 2)]
    const height = window.innerHeight * 0.18
    const width = height * ratio

    divcloud.style.height = `${height}px`
    divcloud.style.width = `${width}px`
    divcloud.style.top = `${e.y - height * 0.5}px`
    divcloud.style.left = `${e.x - width * 0.5}px`


    // setTimeout(함수A,500)    =   0.5초 뒤에 함수A를 실행한다
    setTimeout(() => {
        const divcloud = document.createElement("div")
        document.querySelector(".cloud-box").appendChild(divcloud)

        const height = window.innerHeight * 0.18
        const width = height
        const ratio2 = (ratio > 2) ? 1 : -1
        // 반복문 축약? if(ㅇㅇㅇㅇ) { ㅁ = 2 } else { ㅁ = -2 }  
        // -------  const ㅁ = (ㅇㅇㅇㅇ) ? 1 : -1 

        divcloud.style.height = `${height}px`
        divcloud.style.width = `${width}px`
        divcloud.style.top = `${e.y - height}px`
        divcloud.style.left = `${e.x - width / 4 * ratio2}px`

    }, 300)
}
window.addEventListener("click", createbubble)




//선택적 실행
//if문 활용

if (weatherrr.toLowerCase().includes("clear")) {
    document.querySelector("html").dataset.weatherrrrr = "sunny"
    window.addEventListener("mousemove", kkkk);
} else if (weatherrr.toLowerCase().includes("rain")) {
    document.querySelector("html").dataset.weatherrrrr = "rain"
    window.addEventListener("mousemove", rrrr);
} else if (weatherrr.toLowerCase().includes("cloud")) {
    document.querySelector("html").dataset.weatherrrrr = "cloudy"
    window.addEventListener("click", createbubble)
} else if (weatherrr.toLowerCase().includes("snow")) {
    document.querySelector("html").dataset.weatherrrrr = "snow"
    window.addEventListener("click", pppp)
} else { }