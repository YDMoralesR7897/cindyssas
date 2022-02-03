
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
      events:"http://127.0.0.1:8000/event/show",
      dateClick:function(info){
        form.reset();
        form.start.value = info.dateStr;
        form.end.value = info.dateStr;
        $("#eventModal").modal('show');
      }
    });

    //Mostramos el Calendario
    calendar.render();

    //Agarramos los datos al hacer click en el boton guardar
    document.getElementById("btnGuardar").addEventListener("click",function(){
      const data = new FormData(form);

      axios.post("http://127.0.0.1:8000/event/add", data).
      then(
        function (response) {
          calendar.refetchEvents();
          $("#eventModal").modal("hide");
        }
        ).catch(
          error=>{
            if(error.response){
              console.log(error.response.data)
            }
          }
        )
    })

  });