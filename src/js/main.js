// const hidden = function() {
//     $('.expandable-list-link').click(function(){
//         if( $(this).children().text() == 'Показать все' ){
//             $(this).prev().children().removeClass('hidden');
//             $(this).children().text('Скрыть');
//         }else{
//             $(this).prev().find( $('li[data-hide]') ).addClass('hidden');
//             $(this).children().text('Показать все');
//         }
//         return false;
//     });
const hid = document.getElementsByClassName('main-hidden').onclick = function() {
    document.getElementsByClassName('hidden').hidden = true;
}