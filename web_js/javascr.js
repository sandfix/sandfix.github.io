function click1() {
    let kol = (document.getElementsByName("field1"));
    let type = (document.getElementsByName("IOT"));
    let r = document.getElementById("result");
    let m = String(kol[0]).match(/^[0-9]+$/);
    if(m==null)
    {
        let mes = "Ошибка ввода";
        r.innerHTML = mes;
    }
    else{
    let value = Number(kol[0].value)*Number(type[0].value);
    //console.log(value);
    r.innerHTML = value;
    }
    return false;
  }