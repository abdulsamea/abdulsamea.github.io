jQuery(document).ready(function () {

    // get my experience
    var now  = new Date();
    var today = moment([now.getUTCFullYear(), now.getUTCMonth() + 1, now.getUTCDate()]);;
    var careerStartDate = moment([2018, 09, 17]);
    var totalExperience = moment.duration(today.diff(careerStartDate));
    var totalExperienceFormatted = totalExperience.years()  + "." + totalExperience.months();
    document.getElementsByClassName("experience-number")[0].innerHTML = totalExperienceFormatted;

function checkScroll(){
    var startY = $('.navbar').height() * 2; //The point where the navbar changes in px

    if($(window).scrollTop() > startY){
        $('.navbar').addClass("scrolled");
    }else{
        $('.navbar').removeClass("scrolled");
    }
}

if($('.navbar').length > 0){
    $(window).on("scroll load resize", function(){
        checkScroll();
    });
}

});