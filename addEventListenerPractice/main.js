(function main() {
    const readInputs = () => {
        const num1 = document.querySelector("#num1");
        const num2 = document.querySelector("#num2");
        const button = document.querySelector("#myButton")
        return {
            num1,
            num2,
            button
        }
    }
    const p = document.createElement('p');
    const container = document.querySelector("#container");
    container.appendChild(p);
    const clearButton = document.createElement('button');
    clearButton.innerText = 'Clear';
    p.insertAdjacentElement('beforebegin', clearButton);
    const changeDom = (number) => {
        if (typeof number != 'number') {
            return
        }
        p.textContent = number;
    }

    const sumHandler = {
        handleEvent: (event) => {
            event.preventDefault();
            changeDom(Number.parseInt(readInputs().num1.value) + Number.parseInt(readInputs().num2.value));
        }
    }

    const scrollHandler = () => {
        const number = Math.round((10*Math.random()));
        changeDom(number)
    }

    const clearResult = (event) => {
        event.preventDefault();
        readInputs().num1.value = "";
        readInputs().num2.value = "";
    };
    
    readInputs().button.addEventListener('click', sumHandler);
    document.addEventListener('dblclick', scrollHandler);
    clearButton.addEventListener('click', clearResult);
})();