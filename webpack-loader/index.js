import 'normalize.css'; // 모듈을 포함한 상태로 만듦.
import styles from './index.css';


function component() {
    const elem = document.createElement('div');
    elem.innerHTML = 'Hello, Webpack !';

    console.log(styles);
    elem.classList = styles.hellowebpack;

    return elem;
}

document.body.appendChild(component());