const PI = 3.14;
const getCircleArea = r => r * r * PI;

// 모듈 객체로 한 번에 묶어서 내보내기
// module.exports = {
//     PI,
//     getCircleArea
// }


//각각 키에 값을 할당하여 내보내기
exports.PI = PI;
exports.getCircleArea = getCircleArea;