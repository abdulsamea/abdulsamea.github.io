window.onload = function() {
    console.log('aaa');
    var now  = new Date();
    var today = moment([now.getUTCFullYear(), now.getUTCMonth() + 1, now.getUTCDate()]);;
    var careerStartDate = moment([2018, 09, 17]);
    var totalExperience = moment.duration(today.diff(careerStartDate));
    var totalExperienceFormatted = totalExperience.years()  + "." + totalExperience.months();
    document.getElementsByClassName("experience-number")[0].innerHTML = totalExperienceFormatted;
}