const tabItem = document.querySelectorAll('.tabs_btn_item')
const tabContent = document.querySelectorAll('.tabs_content_item')
tabItem.forEach(function(element){
    element.addEventListener('click',open);
});
function open(evt){
    const tabTarget = evt.currentTarget;
    const button = tabTarget.dataset.button;
    tabItem.forEach(function(item){
        item.classList.remove('tabs_content_item_active')
    });
    tabContent.forEach(function(item){
        item.classList.remove('tabs_content_item_active')
    });
    tabTarget.classList.add('tabs_content_item_active');
    document.querySelector(`#${button}`).classList.add('tabs_content_item_active');

}
// при клике на ссылку в footer просиходит плавный скролл до верхней части 
document.addEventListener('DOMContentLoaded', function() {
    var linkToTop = document.querySelector('.footer-link');
    
    linkToTop.addEventListener('click', function(e) {
        e.preventDefault();
        
        var scrollOptions = {
            top: 0,
            behavior: 'smooth' 
        };
        
        window.scrollTo(scrollOptions);
    });
});

function darkmode(){
    const body = document.body
    const wasDarkmode = localStorage.getItem('darkmode') === 'true'
    localStorage.setItem('darkmode',!wasDarkmode)
    body.classList.toggle('dark-mode',!wasDarkmode)
}
document.querySelector('#switchMode').addEventListener('click',darkmode)
function onload(){
    document.body.classList.toggle('dark-mode',localStorage.getItem('darkmode') === 'true')
}
document.addEventListener('DOMContentLoaded',onload)