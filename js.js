const eventList  = document.querySelector("#list");

if(typeof (EventSource) !== undefined){
    const source = new EventSource("ssedemo.php");
    source.onmessage = function (ev){
        const newElement = document.createElement("li");
        newElement.textContent = "message" + ev.data;
        eventList.appendChild(newElement);
    }
}else {
    document.querySelector(".result").innerHTML = "Sorry, your browser does not support server-sent events...";
}

