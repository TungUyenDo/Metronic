import '../styles/index.scss';

import $ from 'jquery';


//toggle class open on select
$('.ac_select_languages').click(function (e) {
    e.stopPropagation();
    $(this).toggleClass('open')
})

console.log($('.language-menu label input:checked').val())

var value_checked = $('.language-menu label input:checked').val();

if (value_checked == 'vi') {
    $(this).closest('label').addClass('active');
    $(this).closest('.language-menu').find('.en').removeClass('active');

}
if (value_checked == 'en') {
    $(this).closest('label').addClass('active');
    $(this).closest('.language-menu').find('.vi').removeClass('active');
}

// change language when select dropdown
$('.language-menu label').change(function () {

    $('.ac_select_languages').removeClass('open');

    var checked = $('.language-menu label input').filter(':checked');
    var html_vi = '<i class="fa fa-flag"></i>' +
        '<span class="selected">' + 'Vietnamese ' + '<i class="caret"></i>' + '</span>';
    var html_en = '<i class="fa fa-flag"></i>' +
        '<span class="selected">' + 'English' + '<i class="caret"></i>' + '</span>';

    if (checked.val() == 'vi') {
        $(this).closest('.ac_select_languages').find('.dropdown-toggle').html(html_vi)
        $(this).closest('.language-menu').find('.en').removeClass('active')
        $(this).closest('.language-menu').find('.vi').addClass('active')
    }
    else if (checked.val() == 'en') {
        $(this).closest('.ac_select_languages').find('.dropdown-toggle').html(html_en);
        $(this).closest('.language-menu').find('.vi').removeClass('active')
        $(this).closest('.language-menu').find('.en').addClass('active')
    }

});
