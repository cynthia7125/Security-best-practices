import React from 'react';
import ReactDOM from 'react-dom';

import { Database } from './database.js';
import { navigateToBug } from './utils.js';

function NewBug(props) {
    function handleCreate(e) {
        e.preventDefault();

        const form = new FormData(e.target);
        const bug = {
            title: form.get('title'),
            severity: form.get('severity'),
            description: form.get('description')
        };

        const db = new Database();
        const id = db.insert(bug);

        navigateToBug(id);
    }

    return (
        <form onSubmit={handleCreate}>
            <ul>
                <li>
                    <label htmlFor="title">Title</label>
                    <input id="title" name="title" type="text" />
                </li>
                <li>
                    <label htmlFor="severity">Severity</label>
                    <select id="severity" name="severity">
                        <option value="critical">Critical</option>
                        <option value="high">High</option>
                        <option value="medium">Medium</option>
                        <option value="low">Low</option>
                    </select>
                </li>
                <li>
                    <label htmlFor="description">Description</label>
                    <textarea id="description" name="description"></textarea>
                </li>
                <li className="button">
                    <button type="submit">Create</button>
                </li>
            </ul>
          </form>
    );
}

ReactDOM.render(
    <NewBug />,
    document.getElementById('root')
);