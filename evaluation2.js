/*/================================================================================================================================================
===================================================================================================================================================
====================================================            Les  Musiques               ======================================================
================================================================================================================================================/*/
AOS.init({
    duration: 1200,
})


/*/======================== Afficher les musiques de l'API =======================================/*/

function rafraichir() {
    $('#Ibody').empty();
    $.get({
        url: 'http://jihane.fr/dwmg2/api/music/liste.php',
        success: function(musiques) {
            console.log(musiques)

            for (i = 0; i < musiques.length; i++) {
                console.log(musiques[i].Titres)

                $('#Ibody').append('<tr><td>' + musiques[i].id + '</td><td>' + musiques[i].Titres + '</td><td>' +
                    musiques[i].Artistes + '</td><td>' + '<button id="bouttone" class="btn btn-warning" onclick="reveal(' + musiques[i].id + ')"><i class="far fa-eye"></i></button>' + '</td></tr>')
            }
        },
        dataType: "json",
    })
}
rafraichir()




/*/======================== Afficher le 1er Modal ================================================/*/

$("#myBtn").click(function() {
    $("#myModal").modal('show');
})


/*/================== Créer une nouvelle Musique, la fermer et réactualiser la page ==============/*/


function ajout() {

    $.post({
        url: 'http://jihane.fr/dwmg2/api/music/create.php',

        data: {
            Titres: $("#titre").val(),
            Artistes: $('#artiste').val(),
            Genres: $('#genre').val(),
            Dates: $('#date').val(),
            Temps: $('#temps').val(),
        },
        success: function(musiques) {
            console.log(musiques);
            rafraichir()
        },
        dataType: "text"
    })

}
$("#myBtn2").click(function() {
    $("#myModal").modal('hide')

})


/*/=================== Afficher le 2ème Modal et les données =============/*/


var mid;

function reveal(idv) {

    mid = idv;

    $("#myModal2").modal('show');

    $.get({
        url: 'http://jihane.fr/dwmg2/api/music/read.php',

        data: {
            id: idv
        },
        success: function(musique) {
            $("#titre2").val(musique.Titres)
            $("#artiste2").val(musique.Artistes)
            $("#genre2").val(musique.Genres)
            $("#date2").val(musique.Dates)
            $("#temps2").val(musique.Temps)
        },
        dataType: "json"
    })
    rafraichir()
}

/*/ ================== Fonction Delete et Modifier =============/*/



function supprimer() {

    $.get({

        url: 'http://jihane.fr/dwmg2/api/music/delete.php',

        data: {
            id: mid

        },
        success: function(musique) {
            $("#titre2").val(musique.Titres)
            $("#artiste2").val(musique.Artistes)
            $("#genre2").val(musique.Genres)
            $("#date2").val(musique.Dates)
            $("#temps2").val(musique.Temps)
            rafraichir()
        },
        dataType: "text"
    })

}
$("#supress").click(function() {
    $("#myModal2").modal('hide');

})



function modifier() {

    $.get({

        url: 'http://jihane.fr/dwmg2/api/music/update.php',

        data: {
            id: mid,

            Titres: $("#titre2").val(),
            Artistes: $("#artiste2").val(),
            Genres: $("#genre2").val(),
            Dates: $("#date2").val(),
            Temps: $("#temps2").val(),

        },
        success: function(musiques) {
            console.log(musiques);
            rafraichir()
        },
        dataType: "text"
    })

}
$("#modify").click(function() {
    $("#myModal2").modal('hide');

})



/*/================================================================================================================================================
===================================================================================================================================================
====================================================            Les  voitures               ======================================================
================================================================================================================================================/*/