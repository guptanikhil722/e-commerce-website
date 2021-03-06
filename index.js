$(document).ready(function(){
    
    //banner owl-carousel 

    $("#banner-area .owl-carousel").owlCarousel({
        dots: true,
        items: 1
    });

    // top products owl-carousel

    $("#top-products .owl-carousel").owlCarousel({
        loop: true,
        nav: true,
        dots: false,
        responsive: {
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items: 5 
            }
        }
    });

});

// isotope filter
var $grid= $(".grid").isotope({
    itemSelector: ".grid-item",
    layoutMode: "fitRows",
})

// filter items on button click
$(".button-group").on("click","button" ,function(){
    var filtervalue = $(this).attr("data-filter");
    $grid.isotope({filter:filtervalue});
})

// on-trends owl carousel
$("#on-trends .owl-carousel").owlCarousel({
    loop: true,
    nav: false,
    dots: true,
    responsive: {
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items: 5 
        }
    }
});

// blogs owl-carousel
$("#blogs .owl-carousel").owlCarousel({
    loop: true,
    nav: false,
    dots: true,
    responsive: {
        0:{
            items:1
        },
        600:{
            items:3
        }
    }
});

// pruduct qty
let $qty_up = $(".qty .qty-up");
let $qty_down = $(".qty .qty-down");
let $input = $(".qty .qty-input");

// click on qty-up
$qty_up.click(function(e){
    if($input.val()>=1 && $input.val()<=9){
        $input.val(function(i,oldval){
        return ++oldval;
        });
    }

});
// cick on qty-down
$qty_down.click(function(e){
    if($input.val()>=2 && $input.val()<=10){
        $input.val(function(i,oldval){
        return --oldval;
        });
    }

});



