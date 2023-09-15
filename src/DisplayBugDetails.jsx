import React from 'react';

export function DisplayBugDetails(props) {
    function handlePrint(e) {
        e.preventDefault();

        const printUrl = `/print.html?t=${props.bug.title}&s=${props.bug.severity}&d=${props.bug.description}`;
        window.location = printUrl;
    }

    return (
        <form onSubmit={props.handleEdit}>
            <ul>
                <li>
                    <label htmlFor="bug_no">Bug #</label>
                    <input id="bug_no" type="text" readOnly="readonly" value={props.bug.id} />
                </li>
                <li>
                    <label htmlFor="title">Title</label>
                    <input id="title" type="text" readOnly="readonly" value={props.bug.title} />
                </li>
                <li>
                    <label htmlFor="severity">Severity</label>
                    <input id="severity" type="text" readOnly="readonly" value={props.bug.severity} />
                </li>
                <li>
                    <label htmlFor="description">Description</label>
                    <textarea id="description" readOnly="readonly" value={props.bug.description}></textarea>
                </li>
                <li className="button">
                    <button type="submit">Edit</button>
                </li>
                <li className="button">
                    <button type="button" onClick={handlePrint}>Print</button>
                </li>
            </ul>
        </form>
    );
}