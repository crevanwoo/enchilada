$(document).ready(function () {


    //   $(".tab_1_content, .tab_2_content, .tab_3_content").customScrollbar();

});


//$('.tab').each(setHeight(this))

$('.tab').on('click', function () {
    if (!$(this).hasClass('active')) {
        switchTabs(this);
        // setHeight(this);
        // $(".content").customScrollbar("remove");
        //   $(".content").customScrollbar("resize", true);
    }
})



/* Switch tabs begins */

function switchTabs(obj) {
    hideTab($('.tab.active').attr('data-tab'));
    showTab($(obj).attr('data-tab'));
    switchTabButtons(obj);
}

function switchTabButtons(obj) {
    $('.tab.active').removeClass('active');
    $(obj).addClass('active');
}

function hideTab(prevBtn) {
    // $('.content').find('[data-tab="' + prevBtn + '"]').attr('hidden', '');
    $('.content').find('[data-tab="' + prevBtn + '"]').css('z-index', '0')
}

function showTab(currentBtn) {
    // $('.content').find('[data-tab="' + currentBtn + '"]').removeAttr('hidden');
    $('.content').find('[data-tab="' + currentBtn + '"]').css('z-index', '10')
}

/* Switch tabs ends */


/* Set content height in px begins */
function setHeight(obj) {
    setHeightToDefault(obj);
    $('.content').find('[data-tab="' + $(obj).attr('data-tab') + '"]').css('height', calcHeight(obj))


}

function setHeightToDefault(obj) {
    $('.content').find('[data-tab="' + $(obj).attr('data-tab') + '"]').css('height', 'auto');
}

function calcHeight(obj) {
    return $('.content').find('[data-tab="' + $(obj).attr('data-tab') + '"]').innerHeight()

}


/* Set content height in px ends */


/**/

$('.single_order').on('click', function () {
    $(this).addClass('active')
})
$('.payment_info').on('click', function () {
    $(this).removeClass('cash card').addClass('done')
})

$('.close_order_button').on('click', function () {
    $(this).parent().parent().parent().animate({
        height: 0
    })
})

/**/




var tab_1_h = 0;

function f_tab_1_h() {
    $('.tab_1_content >*').each(function () {
        tab_1_h += $(this).innerHeight();

    })
    return tab_1_h
}
console.log(f_tab_1_h())
//$('.tab_1_content').css('height', f_tab_1_h())
//$('.tab_1_content').css('height', f_tab_1_h())
console.log($('.tab_1_content .comment .text').outerHeight())

