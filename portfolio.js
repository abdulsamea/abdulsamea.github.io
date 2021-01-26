window.onload = function() {
    // get my experience
    var now  = new Date();
    var today = moment([now.getUTCFullYear(), now.getUTCMonth() + 1, now.getUTCDate()]);;
    var careerStartDate = moment([2018, 09, 17]);
    var totalExperience = moment.duration(today.diff(careerStartDate));
    var totalExperienceFormatted = totalExperience.years()  + "." + totalExperience.months();
    document.getElementsByClassName("experience-number")[0].innerHTML = totalExperienceFormatted;

    function checkScroll(){
        //The point where the navbar changes in px
        var navBar = document.getElementsByClassName("navbar")[0];
        var startY = navBar.offsetHeight * 2;
        
        if(document.documentElement.scrollTop > startY){
            navBar.classList.add("scrolled");
        }else{
            navBar.classList.remove("scrolled");
        }
    }
    // change navbar on scroll, load and resize events
    if(document.getElementsByClassName("navbar").length > 0){
        window.addEventListener("scroll", checkScroll);
        window.addEventListener("load", checkScroll);
        window.addEventListener("resize", checkScroll);
    }
}