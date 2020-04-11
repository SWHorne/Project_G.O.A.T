$(document).ready(function() {

let teamIDs = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30'];

        function getTeam(teamID) {
            let queryURL = 'https://www.balldontlie.io/api/v1/teams/' + teamID;
            $.ajax({
                url: queryURL,
                method: "GET"
            }).then(function (response) {

                console.log(response);
                console.log(queryURL);
            }).catch(function (error) {
                console.log(error);
            });
        }
        for (let i = 0; i < teamIDs.length; i++) {
            let teamID=teamIDs[i];
            getTeam(teamID);
        }
    });
