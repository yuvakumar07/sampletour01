
$(document).on('click', '.advance-step-with-target', function() {

    var dataGroupId = $(this).attr('data-grouptarget');
    $('.advance-step-container[data-advance-step-id="'+dataGroupId+'"]').show();

});

$(document).on('change', 'input[name="radio-b1"]', function() {
    if ($("input[name='radio-b1']").prop("checked")) {
        $('.actions .advance-step-next').prop('disabled', false);
    }
});

$(document).on('click', '.advance-step-next', function() {

    var radioB1 = $("input[name='radio-b1']:checked").val();

    $('.advance-step-container[data-group-id="'+radioB1+'"]').show();

});

