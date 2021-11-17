const friends = [
    "Mari",
    "MaryJane",
    "CaptianAmerica",
    "Munnabai",
    "Jeff",
    "AAK chandran"
    ];
    function dataHandling(input, name){
    for (var i = 0; i < input.length; i++) {
        if(friends[i]=="Jeff"){
            console.log("Jeff is friend")

        }
    
    }
    return friends;
    }
    let found = dataHandling(friends,"Jeff");
    console.log(found);