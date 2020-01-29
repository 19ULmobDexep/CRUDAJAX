AOS.init({
    duration: 1200,
})

/*/ ===================== Afficher la liste de voitures =======================
============================================================================/*/


fetch('http://jihane.fr/dwmg2/api/voiture/liste.php')

.then(
    function(response) {
        return response.json()
    }
)

.then(
    function(voitures) {




        for (i = 0; i < voitures.length; i++) {
            console.log(voitures[i]);


            var tr = document.createElement('tr');
            var td = document.createElement('td');

            tr.innerHTML += "<td>" + voitures[i].id + "</td>" + "<td>" + voitures[i].marque + "</td>" + "<td>" + voitures[i].model + "</td>" + "<td>" + voitures[i].gamme + "</td>" + "<td>" + voitures[i].prix + "</td><td>" + '<button class="btn btn-warning" onclick="reveal(' + voitures[i].id + ')"><i class="far fa-eye"></i></button>' + "</td></tr> ";

            var parent = document.getElementById('Ibody')
            parent.appendChild(tr);

        }

    }
)



/*/======================= Afficher 1er Modal et 2ème Modal ==================================/*/


$("#myBtn").click(function() {
    $("#myModal").modal('show');
})




function reveal(idv) {



    $("#myModal2").modal('show');

    $.get({
        url: 'http://jihane.fr/dwmg2/api/voiture/liste.php',

        data: {
            id: idv
        },
        success: function(voiture) {
            $("#marque").val(voiture.marque)
            $("#modele2").val(voiture.model)
            $("#gamme2").val(voiture.gamme)
            $("#prix2").val(voiture.prix)

        },
        dataType: "json"
    })

}



/*/============================= Créer une nouvelle voiture ==================================/*/


function ajout() {

    var form = new FormData(document.getElementById('formdata'));

    fetch('http://jihane.fr/dwmg2/api/voiture/create.php', {
            method: 'POST',
            body: form

        })
        .then(function(response) {
            return response.json();
        })
        .then(function(voitures) {
            console.log(voitures[i])
            marque = document.getElementById("#marque").value()
            model = document.getElementById('#modele').value()
            gamme = document.getElementById('#gamme').value()
            prix = document.getElementById('#prix').value()

        });

}

$("#myBtn2").click(function() {
    $("#myModal").modal('hide');
})