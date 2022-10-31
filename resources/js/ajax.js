$(document).ready(function() {

    $("#create-folder").click(function(event) {
        let name = $('#name').val();
        let url = $(this).data("url")
        $.ajax({
            type: "POST",
            url: url,
            data: { name: name },
            dataType: 'json',
            headers: {
                'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')
            },
            success: function(result) {
                let new_folder = '<div class="top-cover center-block"></div>';
                new_folder += '<p class="top-name center-block text-center"><a href="#"><img src="' + window.location.origin + '/storage/images/folder.png" alt="" width="100" height="100"></a></p>'
                new_folder += '<p class="top-name center-block text-center">' + result['name'] + '</p>'
                new_folder += '<p class="top-name center-block text-center">'
                new_folder += '<button class="btn btn-primary" id="edit-folder"type="button">✎</button>'
                new_folder += '<button class="btn btn-danger delete-folder"data-url="' + window.location.origin + '/folders/' + result['id'] + '" type="button">X</button></p>'
                $('#new_folder').html(new_folder)
                $('#new_folder').removeAttr('id')
                let newDivFolder = '<div class="col-lg-2 col-md-3 col-sm-3 col-xs-6" id="new_folder"></div>'
                $('.folders').append(newDivFolder)
            },
            error: function(result) {
                console.log(result);
            }
        });

    });
    $(".delete-folder").click(function(event) {
        // let id = $('#id').val();
        $(this).closest(".folder").remove();
        let url = $(this).data("url")
        $.ajax({
            type: "DELETE",
            url: url,
            data: { _method: "delete" },
            dataType: 'json',
            headers: {
                'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')
            },
            success: function(result) {
                $(this).parent(".folder")
            },
            error: function(result) {
                console.log(result);
            }
        });

    });
});
