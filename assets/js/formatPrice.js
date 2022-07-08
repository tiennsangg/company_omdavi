const numberFormat = new Intl.NumberFormat('vi-VN', { //nhận 2 fil style kiểu tiền tệ, fil 2 là viết tắt của nước muốn hiển t hị
        style: 'currency', 
        currency: 'VND',
    });
    const price = numberFormat.format(1000000);
    console.log(price)
    document.getElementById("price1").innerHTML = price;
    document.getElementById("price2").innerHTML = price;
    document.getElementById("price3").innerHTML = price;
    document.getElementById("price4").innerHTML = price;