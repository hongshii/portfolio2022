/*
var path = document.querySelector('.zigzag .cls-1');
var length = path.getTotalLength(); 
*/
//스와이퍼
var ww = $(window).width();
var mySwiper = undefined;

function initSwiper() {

    if (ww < 1023 && mySwiper == undefined) {
        mySwiper = new Swiper(".mySwiper", {
            slidesPerView: 4,
            freeMode: true,
        });
    } else if (ww >= 1023 && mySwiper != undefined) {
        mySwiper.destroy();
        mySwiper = undefined;
    }
}

// 풀페이지
//기본 이벤트 제거
window.addEventListener("wheel", function(e){
	e.preventDefault();
},{passive : false});

//페이지 선언
var $html = $("html");
var page = 1;
var lastPage = $(".fullpage").length;

$html.animate({scrollTop:0},10);

// 휠 이벤트
$(window).on("wheel", function(e){

    if($html.is(":animated")) return;

    if(e.originalEvent.deltaY > 0){
        if(page== lastPage) return;

        page++;
    }else if(e.originalEvent.deltaY < 0){
        if(page == 1) return;

        page--;
    }
    var posTop = (page-1) * $(window).height();

    $html.animate({scrollTop : posTop});

});

// 프로필 - 드롭다운
let subToggle=true;
$(".id").click(()=>{
    if(subToggle){
        $(".dropdown").slideDown(300);
        $(".fa-chevron-down").addClass('active');
    }else{
        $(".dropdown").slideUp(300);
        $(".fa-chevron-down").removeClass('active');
    }
    subToggle=!subToggle;
});

//헤더 반응형
$('.bar-icon').on('click', function(){
    $('.mobile-menu').addClass('active');
});
$('.close, .dimmed').on('click', function(){
    $('.mobile-menu').removeClass('active');
});
/* 스와이퍼
    var swiper = new Swiper(".mySwiper", {
    slidesPerView: 5,
    freeMode: true,
    pagination: {
        el: ".swiper-pagination"
    }
    }); */