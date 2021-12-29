const setColorGLR = document.querySelectorAll(".filter-color");
console.log(setColorGLR);
setColorGLR.forEach((item) => {
    item.onclick = () => {
        let curren = document.querySelector('.filter-color.active');
        curren.classList.remove('active');
        item.classList.add('active');
    }
} )