$(document).ready(function () {
  
  let teamStatsMap = {};
  let queryURL = "https://www.balldontlie.io/api/v1/teams/";
  let teamURL =
    "https://www.thesportsdb.com/api/v1/json/1/lookup_all_teams.php?id=4387";
  Promise.all([
    $.ajax({
      url: queryURL,
      method: "GET",
    }),
    $.ajax({
      url: teamURL,
      method: "GET",
    }),
  ]).then(function (responses) {
    let bdlTeams = responses[0].data;
    let sportsDBTeams = responses[1].teams;
    
    for (let i = 0; i < sportsDBTeams.length; i++) {
      let sdTeam = sportsDBTeams[i];
      teamStatsMap[sdTeam.strTeamShort] = {
        teamBadge: sdTeam.strTeamBadge,
        city: sdTeam.strStadiumLocation,
        year: sdTeam.intFormedYear,
        arena: sdTeam.strStadium,
        capacity: sdTeam.intStadiumCapacity,
      };
    }

    function showStats(bdlTeamName) {
      let $img = $("<img>").attr("src", teamStatsMap[bdlTeamName].teamBadge).addClass('teamLogo');
      $(".logo").empty().append($img);
      $(".year").empty().append(teamStatsMap[bdlTeamName].year);
      $(".city").empty().append(teamStatsMap[bdlTeamName].city);
      $(".arena").empty().append(teamStatsMap[bdlTeamName].arena);
      $(".capacity").empty().append(teamStatsMap[bdlTeamName].capacity);
    }

    console.log(teamStatsMap);

    for (let i = 0; i < bdlTeams.length; i++) {
      let team = bdlTeams[i];
      let option = $("<option>");
      option.text(team.full_name);
      option.attr("value", team.abbreviation);
      $("#teamselect").append(option);
    }
    $("#teamselect").on("change", function () {
      let teamName = this.value;
      localStorage.setItem("teamName", teamName);
      showStats(teamName);
    });
  });
});