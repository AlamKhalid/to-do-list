// Checking the to dos list

$('ul').on('click', 'li', function() {
    $(this).toggleClass('completed');
});

$('ul').on('click', 'span', function(event) {
    $(this).parent().fadeOut(500, function() {
        $(this).remove();
    });
    event.stopPropagation();
});

$("input[type='text'").keypress(function(event) {
    if (event.which === 13) {
        var text = $(this).val();
        $('ul').append("<li>i class='fa fa - trash'></i> " + text + "</li>");
        $(this).val('');
    }
});

$('.fa-plus').click(function() {
    $('input').fadeToggle();
});