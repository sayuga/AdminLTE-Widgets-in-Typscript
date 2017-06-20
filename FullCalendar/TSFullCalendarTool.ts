namespace testArea {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class fullCalendarTest {         

        public static renderFullCal(targetID: string) {
            AdminLTETools.fullCalBuild(targetID);
            return AdminLTETools.renderFullCalendar(addEvents());
        }
    }

    function addEvents() {
        var date = new Date();
        var d = date.getDate(),
            m = date.getMonth(),
            y = date.getFullYear();

        var myList: AdminLTETools.calendarEntryElements[] = [
            {
                title: 'My All Day Event',
                start: new Date(y, m, 1),
                backgroundColor: '#f56954',
                borderColor: '#f56954'
            },
            {
                title: 'My Long Event',
                start: new Date(y, m, d - 5),
                end: new Date(y, m, d - 2),
                backgroundColor: "#f39c12", //yellow
                borderColor: "#f39c12" //yellow
            },
            {
                title: 'My Meeting',
                start: new Date(y, m, d, 10, 30),
                allDay: false,
                backgroundColor: "#0073b7", //Blue
                borderColor: "#0073b7" //Blue
            },
            {
                title: 'My Lunch',
                start: new Date(y, m, d, 12, 0),
                end: new Date(y, m, d, 14, 0),
                allDay: false,
                url: 'http://google.com/',
                backgroundColor: "#00c0ef", //Info (aqua)
                borderColor: "#00c0ef" //Info (aqua)
            },
            {
                title: 'My Birthday Party',
                start: new Date(y, m, d + 1, 19, 0),
                end: new Date(y, m, d + 1, 22, 30),
                allDay: false,
                backgroundColor: "#00a65a", //Success (green)
                borderColor: "#00a65a" //Success (green)
            },
            {
                title: 'My Click for Google',
                start: new Date(y, m, 28),
                end: new Date(y, m, 29),
                url: 'http://google.com/',
                backgroundColor: "#3c8dbc", //Primary (light-blue)
                borderColor: "#3c8dbc" //Primary (light-blue)
            }
        ];
        return AdminLTETools.fullCalendarEvents(myList);
    }
};

module AdminLTETools {
    //FULL CALENDAR---------------------
    export interface calendarEntryElements {
        title: string,
        start: Date,
        end?: Date,
        allDay?: boolean,
        url?: string,
        backgroundColor: string,
        borderColor: string
    }

    export function fullCalBuild(elementId) {
        var container = document.createElement("div");
        container.id = 'wrap';

        var calevents = document.createElement('div');
        calevents.className = 'col-md-3';
        calevents.appendChild(draggableEventsDOMS());
        calevents.appendChild(createEventsDOMS());
        container.appendChild(calevents);
        container.appendChild(calendarDOMS());

        document.getElementById(elementId).appendChild(container);
    }

    function calendarDOMS() {
        var outerDiv = document.createElement('div');
        outerDiv.className = 'col-md-9';

        var box = document.createElement('div');
        box.className = 'box box-primary';

        var boxBody = document.createElement('div');
        boxBody.className = 'box-body no-padding';

        var calendar = document.createElement('div');
        calendar.id = 'calendar';

        outerDiv.appendChild(box);
        box.appendChild(boxBody);
        boxBody.appendChild(calendar);

        return outerDiv;
    };

    function createEventsDOMS() {
        var container = document.createElement('div');

        var outer = document.createElement('div');
        outer.className = 'box box-solid';

        var header = document.createElement('div');
        header.className = 'box-header with-border';
        header.innerHTML = '<h3 class="box-title">Create Event</h3>';
        outer.appendChild(header);

        var body = document.createElement('div');
        body.className = 'box-body';
        outer.appendChild(body);

        var btnGroup = document.createElement('div');
        body.appendChild(btnGroup);
        btnGroup.className = 'btn-group';
        btnGroup.style.width = '100%';
        btnGroup.style.marginBottom = '10px';

        var ul = document.createElement('ul');
        btnGroup.appendChild(ul);
        ul.className = 'fc-color-picker';
        ul.id = 'color-chooser';

        var colors = ['text-aqua', 'text-blue', 'text-light-blue', 'text-teal',
            'text-yellow', 'text-orange', 'text-green', 'text-lime', 'text-red',
            'text-purple', 'text-fuchsia', 'text-muted', 'text-navy'];

        for (var x in colors) {
            var li = document.createElement('li');
            var a = document.createElement('a');
            a.className = colors[x];
            a.href = '#';
            var i = document.createElement('i');
            i.className = 'fa fa-square';
            a.appendChild(i);
            li.appendChild(a);
            ul.appendChild(li);
        }

        var inputGroup = document.createElement('div');
        body.appendChild(inputGroup);
        inputGroup.className = 'input-group';

        var input = document.createElement('input');
        inputGroup.appendChild(input);
        input.id = 'new-event';
        input.type = 'text';
        input.className = 'form-control'
        input.placeholder = 'Event Title';

        var inputBtn = document.createElement('div');
        inputGroup.appendChild(inputBtn);
        inputBtn.className = 'input-group-btn';

        var btn = document.createElement('button');
        inputBtn.appendChild(btn);
        inputBtn.id = 'add-new-event';
        inputBtn.className = 'btn btn-primary btn-flat';
        inputBtn.innerText = 'Add';

        container.appendChild(outer);

        return container;
    };

    function draggableEventsDOMS() {
        var container = document.createElement('div');
        container.className = 'box box-solid';

        var header = document.createElement('div');
        container.appendChild(header);
        header.className = 'box-header with-border';
        header.innerHTML = '<h4 class="box-title">Draggable Events</h4>';

        var body = document.createElement('div');
        container.appendChild(body);
        body.className = 'box-body';

        var externalEvents = document.createElement('div');
        body.appendChild(externalEvents);
        externalEvents.id = 'external-events';

        var sample = document.createElement('div');
        sample.className = 'external-event ui-draggable ui-draggable-handle';
        sample.innerText = 'sample Entry';
        externalEvents.appendChild(sample);

        var checkLabel = document.createElement('p');
        externalEvents.appendChild(checkLabel);

        var input = document.createElement('input');
        input.type = 'checkbox';
        input.id = 'drop-remove';
        checkLabel.appendChild(input);

        var label = document.createElement('label');
        label.htmlFor = 'drop-remove';
        label.innerText = 'Remove After Drop'
        checkLabel.appendChild(label);

        return container;

    };

    export function fullCalendarEvents(myList: calendarEntryElements[]) {
        var date = new Date();
        var d = date.getDate(),
            m = date.getMonth(),
            y = date.getFullYear();

        var eList: calendarEntryElements[] = [];

        for (var x in myList) {
            eList.push({
                title: myList[x].title,
                start: myList[x].start,
                end: (myList[x].end = undefined) ? null : myList[x].end,
                allDay: (myList[x].end = undefined) ? true : myList[x].allDay,
                url: (myList[x].url = undefined) ? null : myList[x].url,
                backgroundColor: myList[x].backgroundColor, //Info (aqua)
                borderColor: myList[x].borderColor //Info (aqua)
            })
        }

        return eList;
    }

    function dropEvent(date: Date, allDay: boolean) {
        // this function is called when something is dropped

        // retrieve the dropped element's stored Event Object
        var originalEventObject = $(this).data('eventObject');

        // we need to copy it, so that multiple events don't have a reference to the same object
        var copiedEventObject = $.extend({}, originalEventObject);

        // assign it the date that was reported
        copiedEventObject.start = date;
        copiedEventObject.allDay = allDay;
        copiedEventObject.backgroundColor = $(this).css("background-color");
        copiedEventObject.borderColor = $(this).css("border-color");

        (<any>$('#calendar')).fullCalendar('renderEvent', copiedEventObject, true);

        // is the "remove after drop" checkbox checked?
        if ($('#drop-remove').is(':checked')) {
            // if so, remove the element from the "Draggable Events" list
            $(this).remove();
        }
    }

    function initializeEvents() {

        $('#external-events div.external-event').each(function () {

            // create an Event Object (http://arshaw.com/fullcalendar/docs/event_data/Event_Object/)
            // it doesn't need to have a start or end
            var eventObject = {
                title: $.trim($(this).text()) // use the element's text as the event title
            };

            // store the Event Object in the DOM element so we can get to it later
            $(this).data('eventObject', eventObject);

            // make the event draggable using jQuery UI
            $(this).draggable({
                zIndex: 1070,
                revert: true, // will cause the event to go back to its
                revertDuration: 0  //  original position after the drag
            });

        });

    };

    function addEvents(e, currColor) {

        e.preventDefault();
        //Get value and make sure it is not null
        var val = $("#new-event").val();
        if (val.length == 0) {
            return;
        }

        //Create events
        var event = $("<div />");
        event.css({ "background-color": currColor, "border-color": currColor, "color": "#fff" }).addClass("external-event");//.addClass("fc-event ui-draggable ui-draggable-handle");
        event.html(val);
        $('#external-events').prepend(event);

        //Add draggable funtionality
        initializeEvents();

        //Remove event from text input
        $("#new-event").val("");
    };

    export function renderFullCalendar(myList: calendarEntryElements[]) {

        /* initialize the external events
 -----------------------------------------------------------------*/
        initializeEvents();

        /* initialize the calendar
  -----------------------------------------------------------------*/
        //Date for the calendar events (dummy data)
        (<any>$('#calendar')).fullCalendar({
            header: {
                left: 'prev,next today',
                center: 'title',
                right: 'month,agendaWeek,agendaDay'
            },
            buttonText: {
                today: 'today',
                month: 'month',
                week: 'week',
                day: 'day'
            },
            //Random default events
            events: fullCalendarEvents(myList),
            editable: true,
            droppable: true, // this allows things to be dropped onto the calendar          
            drop: function (date, allDay) {
                dropEvent(date, allDay);
            }
        });

        /* ADDING EVENTS */
        var currColor = "#3c8dbc"; //Red by default
        //Color chooser button
        var colorChooser = $("#color-chooser-btn");
        $("#color-chooser > li > a").click(function (e) {
            e.preventDefault();
            //Save color
            currColor = $(this).css("color");
            //Add color effect to button
            $('#add-new-event').css({ "background-color": currColor, "border-color": currColor });
        });
        $("#add-new-event").click(e => addEvents(e, currColor));
    }
}
