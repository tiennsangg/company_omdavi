const numberFormat = new Intl.NumberFormat('vi-VN', { //nhận 2 fil style kiểu tiền tệ, fil 2 là viết tắt của nước muốn hiển t hị
        style: 'currency', 
        currency: 'VND',
    });
    const price = numberFormat.format(1000000);
    console.log(price)
    document.getElementById("price_1_1").innerHTML = price;
    document.getElementById("price_1").innerHTML = price;
    document.getElementById("price1").innerHTML = price;
    document.getElementById("price2").innerHTML = price;
    document.getElementById("price3").innerHTML = price;
    document.getElementById("price4").innerHTML = price;
    document.getElementById("price_featured1").innerHTML = price;
    document.getElementById("price_featured2").innerHTML = price;
    document.getElementById("price_featured3").innerHTML = price;
    document.getElementById("price_featured4").innerHTML = price;
    document.getElementById("price_featured5").innerHTML = price;
    document.getElementById("price_featured6").innerHTML = price;
    document.getElementById("price_featured7").innerHTML = price;
    document.getElementById("price_featured8").innerHTML = price;
    document.getElementById("price_featured9").innerHTML = price;
    document.getElementById("price_featured10").innerHTML = price;
    document.getElementById("price_featured11").innerHTML = price;
    document.getElementById("price_featured12").innerHTML = price;
    document.getElementById("discount1").innerHTML = price;
    document.getElementById("discount4").innerHTML = price;
    document.getElementById("discount6").innerHTML = price;
    document.getElementById("discount7").innerHTML = price;
    document.getElementById("discount8").innerHTML = price;
    document.getElementById("discount9").innerHTML = price;
    document.getElementById("discount10").innerHTML = price;
    document.getElementById("discount12").innerHTML = price;

