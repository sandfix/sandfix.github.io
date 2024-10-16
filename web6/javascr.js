window.addEventListener("DOMContentLoaded", function () {
   // console.log(this.document.documentElement);
    const goodsPriceList = { "n1": 100, "n2": 200, "n3": 300, "n4": 400 };
    let amount = document.getElementById("myinput");
    let product = document.getElementById("myselect");
    let selector = document.getElementById("selector");
    //let button = document.getElementById("button1");
    let result = document.getElementById("result");
    let checkdiv = document.getElementById("divcheckbox");
    let check = document.getElementById("mycheckbox");
    let r = document.getElementById("myradios");
    let group1 = document.getElementsByName("group1");
    let forma = this.document.querySelector("form");
    function changeState(){
        // console.log(event.target);
        // let radio = event.target; 
        if (group1[0].checked) {
            checkdiv.style.display = "none";
            product.style.display = "none";
        }
        if (group1[1].checked) {
            checkdiv.style.display = "none";
            product.style.display = "block";
        }
        if (group1[2].checked) {
            checkdiv.style.display = "block";
            product.style.display = "none";
        }
    }
    function calculate(){
        let buf = amount.value;
        let res = 0;
        console.log("kekis");
        if (buf.match(/^\d+$/) !== null) {
            if (group1[0].checked) {
                res = 50*buf;
                result.innerText = res;
            }
            if (group1[1].checked) {
                res = goodsPriceList[selector.value]*buf;
                result.innerText = res;
            }
            if (group1[2].checked) {
                res = 125*buf;
                if(check.checked){
                    res = res*1.5;
                }
                result.innerText = res;
            }
        } else {
            result.innerText = "Некорректный ввод";
        }
    }
    forma.addEventListener('input', calculate);
    forma.addEventListener('input', changeState);
});