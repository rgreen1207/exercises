function showhideNavMenu() {
    document.getElementById("drop_menu").classList.toggle("show");
}

window.onclick = function (event) {
    if (!event.target.matches('.menu_drop_button_holder') && !event.target.matches('.menu_drop_button')) {
        document.getElementById("drop_menu").classList.remove('show');
    }
}

window.screen.width = function (event) {
    document.getElementById("drop_menu").classList.remove('show');
}