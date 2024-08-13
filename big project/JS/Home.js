
////// clinic slider

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
    el: ".swiper-pagination",
    clickable: true,
    },
    navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    },
    },
);

////read more button
function scrollToSection() {
    
    var targetElement = document.getElementById("readmore");

    targetElement.scrollIntoView({ behavior: 'smooth' });
}

/// book now
function redirectToPage() {
    
    var targetPageUrl = '../Html/Create.html'; 

    
    window.location.href = targetPageUrl;
}
/// contact us
function openOutlook() {
    var recipient = 'recipient@example.com';
    var subject = 'Subject Here';
    var body = 'Body Text Here';

    // Construct the mailto URL
    var mailtoLink = 'mailto:' + recipient +
                     '?subject=' + encodeURIComponent(subject) +
                     '&body=' + encodeURIComponent(body);

    // Open the default email client
    window.location.href = mailtoLink;
}

//// dark mode

var foot = document.getElementById("foot");
var check=document.getElementById("choose");
var part = document.getElementById('part');
var we = document.getElementById('we');
var prov = document.getElementById('prov');
var how = document.getElementById('how');
var begin = document.getElementById('begin');
var clinic1=document.getElementById('c1');
var clinic2=document.getElementById('c2');
var clinic3=document.getElementById('c3');
var clinic4=document.getElementById('c4');
var clinic5=document.getElementById('c5');
var rhead=document.getElementById('rhead');
var num1=document.querySelector('#num1');
var num2=document.querySelector('#num2');
var php1 = document.getElementById('php1');
var php2 = document.querySelector('#php22');
var php3 = document.querySelector('#php3');
var php4 = document.querySelector('#php4');
var title = document.querySelector('#title');
var fh = document.querySelector('#fh');
var fh1 = document.querySelector('#fh1');
check.addEventListener("click",()=>{
    if(check.checked){
        document.body.style.backgroundImage='url("../Images/my\ saad\ project\ ground.png")';
        foot.style.backgroundColor = ' rgba(245, 249, 254, 1)';
        part.style.color='#0F2F64';
        we.style.color='#0F2F64';
        prov.style.color='#0F2F64';
        how.style.color='#0F2F64';
        begin.style.color='#0F2F64';
        clinic1.style.backgroundColor='white';
        clinic2.style.backgroundColor='white';
        clinic3.style.backgroundColor='white';
        clinic4.style.backgroundColor='white';
        clinic5.style.backgroundColor='white';
        rhead.style.color='#0F2F64';
        num1.style.color='#0F2F64';
        num2.style.color='#0F2F64';
        php1.style.color='#0F2F64';
        php2.style.color='#0F2F64';
        php3.style.color='#0F2F64';
        php4.style.color='#0F2F64';
        title.style.color='#0F2F64';
        fh.style.color='#0F2F64';
        fh1.style.color='#0F2F64';
    }else{
        document.body.style.backgroundImage='url("../Images/my\ saad\ project\ ground2.png")';
      
        foot.style.backgroundColor = '#393939';
        part.style.color='#acacac';
        we.style.color='#acacac';
        prov.style.color='#acacac';
        begin.style.color='#acacac';
        how.style.color='#dfdfdf';
        clinic1.style.backgroundColor='#292929';
        clinic2.style.backgroundColor='#292929';
        clinic3.style.backgroundColor='#292929';
        clinic4.style.backgroundColor='#292929';
        clinic5.style.backgroundColor='#292929';
        rhead.style.color='#acacac';
        num1.style.color='#acacac';
        num2.style.color='#acacac';
        php1.style.color='#dfdfdf';
        php2.style.color='#dfdfdf';
        php3.style.color='#dfdfdf';
        php4.style.color='#dfdfdf';
        title.style.color='#acacac';
       fh.style.color='#dfdfdf';
       fh1.style.color='#dfdfdf';
    }})

