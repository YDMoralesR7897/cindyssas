
    //Cuando se cargue el contenido ejecutamos el siguiente script
document.addEventListener('DOMContentLoaded', function() {

    //Buscamos en el DOM el elemento con el id event
    var calendarEl = document.getElementById('event');

    //Le agregamos opciones al calendario que provee fullCalendar
    var calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: 'dayGridMonth'
    });

    //Mostramos el Calendario
    calendar.render();
  });