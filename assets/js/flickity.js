
function slide(){
    $('.main-carousel').flickity({
        // options
        cellAlign: 'left',
        contain: true,
        "freeScroll": false,// ảnh dừng sẽ ko bị đứt
        "imagesLoaded": true, //cần dùng khi dùng freescroll
        "lazyLoad": 1,
        "draggable": true,
        "prevNextButtons": true,
        "pageDots": true,
        "groupCells": true, //quấn đến cuối sẽ ko ấn đc nữa, nếu ko dùng vẫn ấn đc 2-3 lần mới hết
        "wrapAround":true, //Quấn quanh không dừng lại
      });
}
slide();
//slick