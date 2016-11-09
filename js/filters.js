;
(function () {

    $('.filter_add, .filter_remove, .filter_item_name').on('click', function (e) {
        var plus = $(this).parent().find('.filter_add');
        var minus = $(this).parent().find('.filter_remove');
        var local_plus = $(this).parent().find('.filter_add');
        var local_minus = $(this).parent().find('.filter_remove');


        if (plus.hasClass('active')) {
            plus.animate({
                opacity: 0,
            })
            plus.removeClass('active');


        } else if (e.target.classList.contains('filter_add')) {
            $(this).addClass('active');
            $(this).animate({
                opacity: 1,
            });
            if (local_minus.hasClass('active')) {
                local_minus.animate({
                    opacity: 0,
                });
                local_minus.removeClass('active');
            }
        } else if (minus.hasClass('active')) {
            minus.animate({
                opacity: 0,
            });
            minus.removeClass('active');


        } else if (e.target.classList.contains('filter_remove')) {
            $(this).addClass('active');
            $(this).animate({
                opacity: 1,
            });

            if (local_plus.hasClass('active')) {
                local_plus.animate({
                    opacity: 0,
                })
                local_plus.removeClass('active');
            }
        }
    })





})();