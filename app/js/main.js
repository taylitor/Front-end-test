$(document).ready(function() {
$carouselInner = $(".carousel-inner"); 
$.ajaxSetup({
    cache: true,
    async: false
});

//call the ajax related to the parameter (e.g carousel 1 )
function ajaxCall(carousel){
    $selectedId=carousel;
    $.ajax({
        url: "./app/Json/"+$selectedId+".json",
        type: "GET",
        dataType: "json",
        success: function(data) {

            for (var i = 1; i < data.slides.length; i++) {
                $randomIndex = Math.floor(Math.random()*(3-0))+0;//var to display the content of the carousel randomly
                $carouselInner.append('<div class="item"><img src="' + data.slides[$randomIndex].image + '" alt=""><div class="absolute-div"><div class="carousel-caption"><div><h3>' + data.slides[$randomIndex].title + '</h3><p>' + data.slides[$randomIndex].subtext + '</p><br><a href="' + data.slides[$randomIndex].ctaURL + '" class="btn btn-warning" role="button">' + data.slides[$randomIndex].cta + '</a></div></div></div></div>');
                $('.carousel-inner .item:first').addClass('active');
            }
        },
        error: function() {
            alert('error');
        }
    });
}


//preloaded carousel
$carousel1="Carousel1";
ajaxCall($carousel1);

//when click on menu option call the function ajaxcall with the right carousel
    $("#Carousel1,#Carousel2,#Carousel3").click(function() {
        $selectedId = $(this).attr("id");
        $carouselInner.empty();
        $($selectedId).parent().addClass("active");
        $("li").not($selectedId).parent().removeClass("active");
        ajaxCall($selectedId);
    });

//Footer Functions
    $("#closeFooter").click(function() {
        $("footer").fadeOut("slow", function() {});
    });
});