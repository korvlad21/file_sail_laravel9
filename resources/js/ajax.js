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
                new_folder += '<form action="' + window.location.origin + '/folders/' + result['id'] + '" method="post"class = "top-name center-block text-center" > '
                new_folder += '<input type="hidden" name="_token" value="' + $('meta[name="csrf-token"]').attr('content') + '">'
                new_folder += '<input type="hidden" name="_method" value="delete">'
                new_folder += '<button class="btn btn-primary" type="button">✎</button>'
                new_folder += '<button class="btn btn-danger" type="submit">X</button>'
                new_folder += '</form></p>'
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

    function folder(id, name) {
        console.log(name);
        $.ajax({
            type: "PUT",
            url: window.location.origin + '/folders/' + id,
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
    }

    let edit = document.querySelectorAll('.edit');
    let text = document.querySelectorAll('.text');

    for (let i = 0; i < edit.length; i++) {
        let editMode = false;

        edit[i].addEventListener('click', function() {
            if (editMode) {
                let id = this.dataset.id;

                let name = text[i].innerText;
                folder(id, name);
                this.textContent = "✎";
                text[i].removeAttribute('contentEditable');
            } else {
                this.textContent = "Ok";

                text[i].setAttribute('contentEditable', true);
                text[i].focus();
            }

            editMode = !editMode;
        });
    }
});
