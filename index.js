/**
 * 1.원의 넓이를 구하는 공식
 * 2. PI 정의
 * 3. 공식을 통해 결과 얻기
 * */ 

// const { getCircleArea } = require('./mathUtil');
// import { getCircleArea } from './mathUtil';

// const result = getCircleArea(2);
// console.log(result);

// export default로 내보냈을 경우 객체 이름으로 접근해야 함.
// import mathUtil from './mathUtil';


// const result = mathUtil.getCircleArea(2);
// console.log(result);


const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

const { getCircleArea, getSquareArea } = require('./mathUtil');
const { logFigureError, logInput, logResult } = require('./log');

rl.question(
    "넓이를 구하고자 하는 도형을 선택하세요. { 정사각형, 원 } : ",
    figure => {
        console.log(`선택된 도형: ${figure}`);

        switch (figure) {
            case "정사각형":
                rl.question("변의 길이를 입력하세요: ", input => {
                    console.log(logInput(input));
                    console.log(logResult(figure, getSquareArea(input)));
                    rl.close();
                });
                break;
            case "원":
                rl.question(`반지름의 길이를 입력하세요: `, input => {
                    console.log(logInput(input));
                    console.log(logResult(figure, getCircleArea(input)));
                    rl.close();
                })
                break;
            default:
                console.log(
                    logFigureError
                );
                rl.close();
        }
    }
);