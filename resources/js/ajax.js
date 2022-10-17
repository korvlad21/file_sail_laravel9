$(document).ready(function() {

    $("#create-folder").click(function(event) {
        let name = $('#name').val();
        console.log($('.new_folder').html());
        $.ajax({
            type: "POST",
            url: "/folders",
            data: { name: name },
            dataType: 'json',
            headers: {
                'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')
            },
            success: function(result) {
                let new_folder = '<div class="top-cover center-block"></div>';
                new_folder += '<p class="top-name center-block text-center"><a href="#"><img src="' + window.location.origin + '/storage/images/folder.png" alt="" width="100" height="100"></a></p>'
                new_folder += '<p class="top-name center-block text-center">' + result['name'] + '</p>'
                $('.new_folder').html(new_folder)
                $('.new_folder').removeClass("new_folder")
                let newDivFolder = '<div class="col-lg-2 col-md-3 col-sm-3 col-xs-6 new_folder"></div>'
                $('.folders').append(newDivFolder)
            },
            error: function(result) {
                console.log(result);
            }
        });

    });
    $("#delete-folder").click(function(event) {
        // let id = $('#id').val();
        console.log(2);
        // $.ajax({
        //     type: "POST",
        //     url: "/folders",
        //     data: { name: name },
        //     dataType: 'json',
        //     headers: {
        //         'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')
        //     },
        //     success: function(result) {
        //         let new_folder = '<div class="top-cover center-block"></div>';
        //         new_folder += '<p class="top-name center-block text-center"><a href="#"><img src="' + window.location.origin + '/storage/images/folder.png" alt="" width="100" height="100"></a></p>'
        //         new_folder += '<p class="top-name center-block text-center">' + result['name'] + '</p>'
        //         $('.new_folder').html(new_folder)
        //         $('.new_folder').removeClass("new_folder")
        //         let newDivFolder = '<div class="col-lg-2 col-md-3 col-sm-3 col-xs-6 new_folder"></div>'
        //         $('.folders').append(newDivFolder)
        //     },
        //     error: function(result) {
        //         console.log(result);
        //     }
        // });

    });
});