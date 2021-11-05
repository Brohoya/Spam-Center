var spam = 0

$(document).on('click', '#spam', () => {
    spam += 1
    $('#nbSpam').text(spam.toString())

    var fd = new FormData();
    fd.append('mail', $('#adresseMail').val());
    fd.append('objet', $('#objet').val());
    fd.append('message', $('#messageMail').val().replace(/\n/g, " <br> "));

    $.ajax({
        type: 'POST',
        method: 'POST',
        url: 'mailer.php',
        data: fd,
        cache: false,
        processData: false,
        contentType: false,
    });
    console.log("Spamed avec succès");
})

$(document).on('click', '#clear', () => {
    $('#messageMail').val("");
    $('#objet').val("");
    $('#adresseMail').val("");
    $('#nbSpam').text("")
})