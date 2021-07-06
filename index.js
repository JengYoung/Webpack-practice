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
import mathUtil from './mathUtil';


const result = mathUtil.getCircleArea(2);
console.log(result);