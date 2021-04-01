$(document).ready(function(){

    $nav = $('.nav');
    $toggleCollapse = $('.toggle-collapse');

    // Click even on toggle menu
    $toggleCollapse.click(function(){
        $nav.toggleClass('collapse')
    })

})