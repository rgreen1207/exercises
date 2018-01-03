(function () {

  var s = {
    menu: document.getElementById("drop_menu"),
    showClassName: 'show'
  };


  var menu = document.getElementById("drop_menu");
  document.getElementById('drop-arrow').addEventListener('click', function (e) {
    menu.classList.toggle(s.showClassName);
  });

  window.onclick = function (event) {
    if (!event.target.matches('.menu_drop_button_holder') && !event.target.matches('.menu_drop_button')) {
      menu.classList.remove(s.showClassName);
    }
  }
})();