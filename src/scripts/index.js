$('.m-menu__item m-menu__item--submenu').click(function(){
    $(this).closest('>li').find('.m-menu__submenu').css('display','block')

})