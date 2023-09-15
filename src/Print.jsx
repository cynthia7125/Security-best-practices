import React from "react";
import { ReactDOM } from "react";

function Print() {
    const qs = new URLSearchParams(window.location.search);
    const bug = {
        title: decodeURIComponent(qs.get("t")),
        severity: decodeURIComponent(qs.get("s")),
        description: decodeURIComponent(qs.get("d"))    
    }
    return (
        <div>
            <h1>{bug.title}</h1>
            <h3>{bug.severity}</h3>
            <p>
                {bug.description}
            </p>
    </div>
)
}


ReactDOM.render(
    <Print />,
    document.getElementById("root")
);
