
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
        "pageDots": false,
        "groupCells": true, //quấn đến cuối sẽ ko ấn đc nữa, nếu ko dùng vẫn ấn đc 2-3 lần mới hết
        "wrapAround":false, //Quấn quanh không dừng lại
      });
}
slide();


function slide2(){
  $('.s_container').flickity({
      // options
      cellAlign: 'left',
      contain: true,
      "freeScroll": false,// ảnh dừng sẽ ko bị đứt
      "imagesLoaded": true, //cần dùng khi dùng freescroll
      "lazyLoad": 1,
      "draggable": true,
      "prevNextButtons": true,
      "pageDots": false,
      "groupCells": true, //quấn đến cuối sẽ ko ấn đc nữa, nếu ko dùng vẫn ấn đc 2-3 lần mới hết
      "wrapAround":false, //Quấn quanh không dừng lại
    });
}
slide2();

function slide_ulike(){
  $('.product_u_like').flickity({
      // options
      cellAlign: 'left',
      contain: true,
      "freeScroll": false,// ảnh dừng sẽ ko bị đứt
      "imagesLoaded": true, //cần dùng khi dùng freescroll
      "lazyLoad": 1,
      "draggable": true,
      "prevNextButtons": true,
      "pageDots": false,
      "groupCells": true, //quấn đến cuối sẽ ko ấn đc nữa, nếu ko dùng vẫn ấn đc 2-3 lần mới hết
      "wrapAround":false, //Quấn quanh không dừng lại
    });
}
slide_ulike();