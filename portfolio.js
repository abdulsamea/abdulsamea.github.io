window.onload = function() {

    // function to dynamically add 'highlight' to clicked nav link.
    var checks = document.querySelectorAll('.nav-link');
    checks.forEach(function(check){
    check.addEventListener('click', highlightNav);
    })

    function highlightNav(event){
    for (var i = 0; i < document.getElementsByClassName("nav-link").length; i++) {
        document.getElementsByClassName("nav-link")[i].classList.remove('active-nav-link');
    }
    document.getElementsByClassName("nav-link")[Array.from(checks).indexOf(event.target)].classList.add('active-nav-link');
    }

    window.addEventListener("scroll", checkScroll);

    // get my experience
    var now  = new Date();
    var today = moment([moment().year(), moment().month() , moment().date()]);
    var careerStartDate = moment([2018, 08, 17]);
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