

(function() {
    var names = ["Siri", "Manish", "Chinnu", "Jas", "Vikas", "Sharan", "Jabhay", "jinkya", "bharadwaj", "harshita"];
    for (var b = 0; b < names.length; b++) {
        var first = names[b].charAt(0).toLowerCase();
        if (first === 'j') {
            bye.speak(names[b]);
        } else {
            hello.speak(names[b]);
        }
    }
})();
	