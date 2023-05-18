(function(window){
    var speakingWord = "Good Bye";
    var speakBye = function(name){
        console.log(speakingWord + " " + name);
    }
    window.speakBye = speakBye
})(window);