function showNavMenu() {
    var options = ["Home", "About", "Gallery", "Events", "News", "Contact"]
    for (var i = 0; i < options.lenght; i++) {
        document.write('<option value="' + options[i] + '">' + options[i] + '</options>');
    }
}