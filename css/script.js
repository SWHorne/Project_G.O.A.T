$(document).ready(function() {
    let teamIDs = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30'];
            function getTeam(teamID) {
                let queryURL = 'https://www.balldontlie.io/api/v1/teams/' + teamID;
                $.ajax({
                    url: queryURL,
                    method: "GET"
                }).then(function (response) {
                    console.log(response);
                    // let option = $('<option>');
                    // option.text(response.full_name);
                    // $('#teamselect').append(option);

                    console.log(queryURL);
                }).catch(function (error) {
                    console.log(error);
                    
                });
            }
            for (let i = 0; i < teamIDs.length; i++) {
                let teamID=teamIDs[i];
                getTeam(teamID);

            };
        //     function sportsDB(){
        //     let teamURL = 'https://www.thesportsdb.com/api/v1/json/1/lookup_all_teams.php?id=4387';
        //     $.ajax({
        //         url: teamURL,
        //         method: "GET"
        //     }).then(function (response) {
        //         for(let i=0; i<response.teams.length; i++){
        //         console.log(response.teams[i].strTeamLogo);
        //         sportsDB();
        //     }
        //     })
        // };
            
            let queryURL = 'https://www.balldontlie.io/api/v1/teams/';
            $.ajax({
                url: queryURL,
                method: "GET"
            }).then(function (response) {
                for(let i=0; i<response.data.length; i++)
                {let team=response.data[i];
                    console.log(team.full_name);
                    let option = $('<option>');
                    option.text(team.full_name);
                    $('#teamselect').append(option);
                };
                // console.log(response.full_name);
                // let option = $('<option>');
                // option.text(response.full_name);
                // $('#teamselect').append(option);

                console.log(queryURL);
            }).catch(function (error) {
                console.log(error);
                
            });
        });