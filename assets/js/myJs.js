// Btn Back to top 
window.onscroll = function () { scrollFunction() };
function scrollFunction() {
    if (document.body.scrollTop > 900 || document.documentElement.scrollTop > 900) {
        document.getElementById("btn-back-to-top").style.display = "block";
    } else {
        document.getElementById("btn-back-to-top").style.display = "none";
    }
}

document.getElementById('btn-back-to-top').addEventListener("click", function () {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

// Scroll fixed navbar
document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener('scroll', function () {
        if (window.scrollY > 350) {
            document.getElementById('navbar_top').classList.add('fixed-top');
            document.getElementById('navbar_top').style.boxShadow = "rgb(159 162 191 / 18%) 0px 19px 23px, rgb(159 162 191 / 32%) 0px 2px 5px";
            // add padding top to show content behind navbar
            navbar_height = document.querySelector('.navbar').offsetHeight;
            document.body.style.paddingTop = navbar_height + 'px';
        } else {
            document.getElementById('navbar_top').classList.remove('fixed-top');
            document.getElementById('navbar_top').style.boxShadow = "none";
            // remove padding top from body
            document.body.style.paddingTop = '0';
        }
    });
});


//detail
const productCover = document.querySelector('.product-cover img')
let productCoverATB = productCover.getAttribute('src')

const productSlickImg = document.querySelectorAll('.product-slick-img');
productSlickImg.forEach((item) => {
    item.addEventListener('click', handleGetItem)
    function handleGetItem(e) {
        productCover.setAttribute('src', e.target.getAttribute('src'))
    }
})

const setColor = document.querySelectorAll(".product-info .color span");
setColor.forEach((item) => {
    item.onclick = () => {
        let curren = document.querySelector('.product-info .color span.active');
        curren.classList.remove('active');
        item.classList.add('active');
    }
})




