(function(){
    var namesList = ["Shubham","John","Jack","Ashutosh","Jai","Arpit","Ravi","Kinshuk"];

    for (let i = 0; i < namesList.length; i++) {
        var startLetter = namesList[i].charAt(0).toLowerCase();

        if(startLetter == 'j'){
            speakBye(namesList[i]);
        }
        else{
            speakHello(namesList[i]);
        }
        
    }
})();