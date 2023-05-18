(function(window){
    var speakingWord = "Hello";
    var speakHello = function(name){
        console.log(speakingWord + " " + name);
    }
    window.speakHello = speakHello
})(window);