let queue = [];
let currNum = '';
const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const answer = document.querySelector('.answer');
const reset = document.querySelector('.reset');
const equals = document.querySelector('#equals');
const posneg = document.querySelector('#posneg');

reset.addEventListener('click', () => {
    queue = [];
    currNum = '';
    answer.textContent = '0';
});

numbers.forEach((number) => {
    number.addEventListener('click', (event) => {
        const clickedNumber = event.target;
        if (currNum[currNum.length - 3] !== '.') {
            currNum += clickedNumber.textContent;
            answer.textContent = currNum;
            console.log('ok');
            console.log(queue);
        }
    });
});

operators.forEach((operator) => {
    operator.addEventListener('click', (event) => {
        if (currNum !== '') {
            queue.push(Number(currNum));
            currNum = '';
        }
        const clickedOperator = event.target;
        queue.push(clickedOperator.textContent);
        if (queue.length >= 3) {
            const firstNum = Number(queue[0]);
            const oldOperator = queue[1];
            const newOperator = queue[3];
            const secondNum = Number(queue[2]);
            let result = 0;
            if (oldOperator === '+') {
                result = firstNum + secondNum;
            } else if (oldOperator === '-') {
                result = firstNum - secondNum;
            } else if (oldOperator === '*') {
                result = firstNum * secondNum;
            } else if (oldOperator === '/') {
                result = firstNum / secondNum;
            } else if (oldOperator === '%') {
                result = firstNum % secondNum;
            }
            result.toFixed(2);
            if (result.length > 9) {
                result = result.substring(0, 9);
            }
            queue = [];
            queue.push(result);
            if (newOperator !== '=') {
                queue.push(newOperator);
            }
            currNum = '';
            answer.textContent = result;
        }
        console.log(currNum);
        console.log(queue);
    });
});

posneg.addEventListener('click', () => {
    if (currNum !== '') {
        currNum = Number(currNum) * -1;
        answer.textContent = currNum;
    }
});
