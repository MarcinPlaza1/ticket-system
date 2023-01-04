document.addEventListener("DOMContentLoaded", function() {
  // Ukryj pozostałe elementy formularza
  document.querySelector("#attachment, #notification, button[type='submit']").style.display = "none";

  // Po zmianie wyboru w select
  document.querySelector("#category").addEventListener("change", function() {
    // Pobierz wybraną opcję
    var option = this.value;

    // Ukryj wszystkie textarea
    var textareas = document.querySelectorAll("textarea");
    for (var i = 0; i < textareas.length; i++) {
      textareas[i].style.display = "none";
    }

    // Wyświetl odpowiednią textarea
    document.querySelector("#description-" + option).style.display = "block";

    // Wyświetl pozostałe elementy formularza
    document.querySelector("#attachment, #notification, button[type='submit']").style.display = "block";
  });
});
