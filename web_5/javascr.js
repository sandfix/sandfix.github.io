window.addEventListener("DOMContentLoaded", function () {
    const goodsPriceList = {"n1": 100, "n2": 200, "n3": 300, "n4": 400};

    let amount = document.getElementById("field1");
    let product = document.getElementById("IOT");
    let button = document.getElementById("button1");
    let result = document.getElementById("result");

    button.addEventListener("click", function () {
        let buf = amount.value;

        if (buf.match(/^\d+$/) !== null) {
            let res = goodsPriceList[product.value] * parseInt(buf);

            result.innerText = res;
        } else {
            result.innerText = "Некорректный ввод";
        }
    });
});