$(document).ready(function() {
$carouselInner = $(".carousel-inner"); 
$.ajaxSetup({
    cache: true,
    async: false
});

//ajax call
function ajaxCall(carousel){
    $selectedId=carousel;
    $.ajax({
        url: "./app/Json/"+$selectedId+".json",
        type: "GET",
        dataType: "json",
        success: function(data) {

            $.each(data, function(index, data) {
                console.log();
                $carouselInner.append('<div class="item"><img src="' + data.image + '" alt=""><div class="absolute-div"><div class="carousel-caption"><div><h3>' + data.title + '</h3><p>' + data.subtext + '</p><br><a href="' + data.ctaURL + '" class="btn btn-warning" role="button">' + data.cta + '</a></div></div></div></div>');
                $('.carousel-inner .item:first').addClass('active');
            });
        },
        error: function() {
            alert('error');
        }
    });
}

//preloaded carousel
$carousel1="Carousel1";
ajaxCall($carousel1);

//Fills the Carousel with the info of the correspoding json
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