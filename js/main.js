var flag = 1;
$(".dropdown-arrow").click(function(){
    if(flag == 1){
        flag = 0;
        $("#course_topics").slideDown(300, 'linear');
        $(".dropdown-arrow").removeClass('fa-angle-down');
        $(".dropdown-arrow").addClass('fa-angle-up');
    }
    else if(flag == 0){
        flag = 1;
        $("#course_topics").slideUp(300, 'linear');
        $(".dropdown-arrow").removeClass('fa-angle-up');
        $(".dropdown-arrow").addClass('fa-angle-down');
    }
});  

var drop = 1;
function dropdownMini(){
    if(drop == 1){
        drop = 0;
        $(".dropdown-mini").slideDown(200, 'linear');
    }
    else if(drop == 0){
        drop = 1;
        $(".dropdown-mini").slideUp(200, 'linear');
    }
}

var sidebar = 1;
function openSidebar(){
    if(sidebar == 1){
        sidebar = 0;
        $(".sidebar").animate({
            width: "toggle"
          }, 200, function() {
            $('#main').css('display', 'none');
            $('#mini').css('display', 'block');
          });
    }
    else if(sidebar == 0){
        sidebar = 1;
        $(".sidebar").animate({
            width: "toggle"
          }, 200, function() {
            $('#main').css('display', 'block');
            $('#mini').css('display', 'none');
          });
    }
}
