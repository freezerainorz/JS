const cursor = document.querySelector('.cursor');

//讓圈圈跟著滑鼠走
window.addEventListener('mousemove', (e) => {
    cursor.style.left = e.pageX + 'px';
    cursor.style.top = e.pageY + 'px';
    cursor.setAttribute('data-fromTop', (cursor.offsetTop - scrollY));
});

//解決卷軸滾動時圈圈停在原地的問題
window.addEventListener('scroll', ()=> {
    const fromTop = parseInt(cursor.getAttribute('data-fromTop'));
    cursor.style.top = scrollY + fromTop + 'px';

});

window.addEventListener('click', ()=> {
    if(cursor.classList.contains('click')){
        cursor.classList.remove('click');
        //triggerring a Dom reflow
        void cursor.offsetWidth;
        cursor.classList.add('click');
    }else {
        cursor.classList.add('click') 
    }
})