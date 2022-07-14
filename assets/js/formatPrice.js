const numberFormat = new Intl.NumberFormat('vi-VN', { //nhận 2 fil style kiểu tiền tệ, fil 2 là viết tắt của nước muốn hiển t hị
        style: 'currency', 
        currency: 'VND',
    });
    const price = numberFormat.format(1000000);
    console.log(price)
    document.getElementById("price_1_1").innerHTML = price;
    document.getElementById("price_1").innerHTML = price;
    document.getElementById("price_2_2").innerHTML = price;
    document.getElementById("price_2").innerHTML = price;
    document.getElementById("price_3").innerHTML = price;
    document.getElementById("price_3_3").innerHTML = price;
    document.getElementById("price_4").innerHTML = price;
    document.getElementById("price_4_4").innerHTML = price;
    document.getElementById("price_5").innerHTML = price;
    document.getElementById("price_5_5").innerHTML = price;
    document.getElementById("price_6").innerHTML = price;
    document.getElementById("price_6_6").innerHTML = price;
    document.getElementById("price_7").innerHTML = price;
    document.getElementById("price_7_7").innerHTML = price;
    document.getElementById("price_8").innerHTML = price;
    document.getElementById("price_8_8").innerHTML = price;
    document.getElementById("price_9").innerHTML = price;
    document.getElementById("price_9_9").innerHTML = price;
    document.getElementById("price_10").innerHTML = price;
    document.getElementById("price_10_10").innerHTML = price;
    document.getElementById("price_11").innerHTML = price;
    document.getElementById("price_11_11").innerHTML = price;
    document.getElementById("price_12").innerHTML = price;
    document.getElementById("price_12_12").innerHTML = price;
    document.getElementById("price_13").innerHTML = price;
    document.getElementById("price_13_13").innerHTML = price;
    document.getElementById("price_14").innerHTML = price;
    document.getElementById("price_14_14").innerHTML = price;
    document.getElementById("price_15").innerHTML = price;
    document.getElementById("price_15_15").innerHTML = price;
    document.getElementById("price_16").innerHTML = price;
    document.getElementById("price_16_16").innerHTML = price;
    document.getElementById("price_17").innerHTML = price;
    document.getElementById("price_17_17").innerHTML = price;
    document.getElementById("price_18").innerHTML = price;
    document.getElementById("price_18_18").innerHTML = price;
    document.getElementById("price_19").innerHTML = price;
    document.getElementById("price_19_19").innerHTML = price;
    document.getElementById("price_20").innerHTML = price;
    document.getElementById("price_20_20").innerHTML = price;

