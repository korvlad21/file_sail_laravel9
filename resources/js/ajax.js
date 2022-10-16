$(document).ready(function() {

    $("#create-folder").click(function(event) {
        let name = $('#name').val();

        $.ajax({
            type: "POST",
            url: "/folders",
            data: { name: name },
            dataType: 'json',
            headers: {
                'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')
            },
            success: function(result) {
                console.log(result);
            },
            error: function(result) {
                console.log(result);
            }
        });

    });
});
