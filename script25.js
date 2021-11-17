

var friends1 = [
    "Mari",
    "MaryJane",
    "CaptianAmerica",
    "Munnabai",
    "Jeff",
    "AAK chandran"
    ];

    var friends2 = [
    "Gabbar",
    "Rajinikanth",
    "Mass",
    "Spiderman",
    "Jeff",
    "ET"
    ];
    

function dataHandling(friends1,friends2){
    let result=[...friends1,...friends2];
    return result.sort();

}
console.log(dataHandling(friends1,friends2));