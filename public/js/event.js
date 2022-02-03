
    //Cuando se cargue el contenido ejecutamos el siguiente script
document.addEventListener('DOMContentLoaded', function() {

    let form = document.querySelector("form");

    //Buscamos en el DOM el elemento con el id event
    let calendarEl = document.getElementById('event');

    //Le agregamos opciones al calendario que provee fullCalendar
    let calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: 'dayGridMonth',
      locale: 'es',
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,listWeek'
      },
      
      dateClick:function(info){
        $("#eventModal").modal('show');
      }
    });

    //Mostramos el Calendario
    calendar.render();

    //Agarramos los datos al hacer click en el boton guardar
    document.getElementById("btnGuardar").addEventListener("click",function(){
      const data = new FormData(form);
    })
  });