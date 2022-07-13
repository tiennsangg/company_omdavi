const listBox = document.querySelectorAll('.new_product_image1');
const wrapperBox = document.querySelector('.main_container_new_product');
const btnLeft = document.querySelector('.new_product_prev');
const btnRight = document.querySelector('.new_product_next');
const reviewDiv = document.querySelector('.heading_new_product');

document.addEventListener('DOMContentLoaded', function() {
    make_slide(4);
});
const make_slide = (amountSlideAppear) => {
    const widthItemAndMargin = reviewDiv.offsetWidth / amountSlideAppear; //offsetWidth lấy chiều cao và chiều rộng 
    console.log(widthItemAndMargin);
}