import React, { useState } from 'react';

export function EditBugDetails(props) {
    const [title, setTitle] = useState(props.bug.title);
    const [severity, setSeverity] = useState(props.bug.severity);
    const [description, setDescription] = useState(props.bug.description);

    function handleTitleChange(e) { setTitle(e.target.value); }
    function handleSeverityChange(e) { setSeverity(e.target.value); }
    function handleDescriptionChange(e) { setDescription(e.target.value); }

    function handleSave(e) {
        props.handleSave(e, {
            title,
            severity,
            description
        });
    }

    return (
        <form onSubmit={handleSave}>
            <ul>
                <li>
                    <label htmlFor="bug_no">Bug #</label>
                    <input id="bug_no" type="text" readOnly="readonly" value={props.bug.id} />
                </li>
                <li>
                    <label htmlFor="title">Title</label>
                    <input id="title" type="text" value={title} onChange={handleTitleChange} />
                </li>
                <li>
                    <label htmlFor="severity">Severity</label>
                    <select id="severity" name="severity" value={severity} onChange={handleSeverityChange}>
                        <option value="critical">Critical</option>
                        <option value="high">High</option>
                        <option value="medium">Medium</option>
                        <option value="low">Low</option>
                    </select>
                </li>
                <li>
                    <label htmlFor="description">Description</label>
                    <textarea id="description" value={description} onChange={handleDescriptionChange}></textarea>
                </li>
                <li className="button">
                    <button type="submit">Save</button>
                    <button type="reset" onClick={props.handleCancel}>Cancel</button>
                </li>
            </ul>
        </form>
    );
}
