const PI = 3.14;
const getCircleArea = r => r * r * PI;

// 모듈 객체로 한 번에 묶어서 내보내기
// module.exports = {
//     PI,
//     getCircleArea
// }


//각각 키에 값을 할당하여 내보내기
// exports.PI = PI;
// exports.getCircleArea = getCircleArea;


/*
    npm install esm
    node -r esm [파일명]
    * commonJS와 esm 표준 방식으로 둘다 읽을 수 있다.
*/ 
// export {
//     PI,
//     getCircleArea,
// }

export default {
    PI,
    getCircleArea
}