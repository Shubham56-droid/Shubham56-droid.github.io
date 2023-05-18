(function () {
  var namesList = [
    "Yaakov",
    "John",
    "Jen",
    "Jason",
    "Paul",
    "Frank",
    "Larry",
    "Paula",
    "Laura",
    "Jim",
  ];

  for (let i = 0; i < namesList.length; i++) {
    var startLetter = namesList[i].charAt(0).toLowerCase();

    if (startLetter == "j") {
      speakBye(namesList[i]);
    } else {
      speakHello(namesList[i]);
    }
  }
})();
