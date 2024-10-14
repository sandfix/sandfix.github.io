window.addEventListener("DOMContentLoaded", function () {
    const goodsPriceList = {"n1": 100, "n2": 200, "n3": 300, "n4": 400};

    let amount = document.getElementById("myinput");
    let product = document.getElementById("myselect");
    let button = document.getElementById("button1");
    let result = document.getElementById("result");
    let r = document.getElementById("myradios");
    r.addEventListener("change",function(event){
        let radio = event.target;
        let check = document.getElementById("mycheckbox");
        if(radio.value === "1"){
            check.style.display = "none";
            product.style.display = "none";
            }
        if(radio.value === "2"){
        check.style.display = "none";
        product.style.display = "none";
        }
        if(radio.value === "2"){
            check.style.display = "none";
            product.style.display = "none";
            }
    });
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