// =========================================
// TOP COURSES HORIZONTAL SCROLLER
// =========================================

function scrollCourses(direction) {

    const slider = document.getElementById("courseSlider");

    if (!slider) {
        return;
    }


    slider.scrollBy({

        left: direction * 400,

        behavior: "smooth"

    });

}