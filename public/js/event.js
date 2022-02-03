
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
      },
      eventClick: function(info){
        
        let event = info.event;
        console.log(event)

      //recuperamos datos para edicion
        axios.post("http://127.0.0.1:8000/event/edit/"+info.event.id).
      then(
        function (response) {
          form.id.value = response.data.id;

          form.title.value = response.data.title;

          form.description.value = response.data.description;

          form.start.value = response.data.start;

          form.end.value = response.data.end;

          $("#eventModal").modal("show");
        }
        ).catch(
          error=>{
            if(error.response){
              console.log(error.response.data)
            }
          }
        )

      }
    });

    //Mostramos el Calendario
    calendar.render();

    //Agarramos los datos al hacer click en el boton guardar
    document.getElementById("btnGuardar").addEventListener("click",function(){
      
      sendData("http://127.0.0.1:8000/event/add");

    })
    document.getElementById("btnEliminar").addEventListener("click",function(){

      sendData("http://127.0.0.1:8000/event/delete/"+form.id.value);

    });
    
    const sendData = (url) => {
      
      const data = new FormData(form);

    //se envian los datos a la ruta para ser almacenados en DB
      axios.post(url, data).
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

    }

  });