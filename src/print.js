const container = document.getElementById("root");

const qs = new URLSearchParams(window.location.search);
const bug = {
    title: decodeURIComponent(qs.get("t")),
    severity: decodeURIComponent(qs.get("s")),
    description: decodeURIComponent(qs.get("d"))    
}

container.innerHTML = "<h1>" + bug.title + "</h1>" + 
    "<h3>" + bug.severity + "</h3>" +
    "<p>" + bug.description + "</p>";
