import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import { Database } from './database.js';
import { getId } from './utils.js';

import { BugNotFound } from './BugNotFound';
import { EditBugDetails } from './EditBugDetails';
import { DisplayBugDetails } from './DisplayBugDetails';
import { BackLink } from './BackLink';

function BugDetails(props) {
    const db = new Database();
    const bug = db.find(props.id);

    const [edit, setEdit] = useState(false);

    function handleEdit(e) {
        e.preventDefault();
        setEdit(true);
    }

    function handleCancel(e) {
        e.preventDefault();
        setEdit(false);
    }

    function handleSave(e, updatedBug) {
        e.preventDefault();
        db.update(props.id, updatedBug);
        setEdit(false);
    }

    let content;
    if (bug === undefined) {
        content = <BugNotFound id={props.id} />
    } else {
        if (edit) {
            content = <EditBugDetails bug={bug} handleCancel={handleCancel} handleSave={handleSave} />
        } else {
            content = <DisplayBugDetails bug={bug} handleEdit={handleEdit} />
        }
    }

    return (
        <div>
            <h3 className="navLink"><BackLink /></h3>
            {content}
        </div>
    );
}

const id = getId();

ReactDOM.render(
    <BugDetails id={id} />,
    document.getElementById('root')
);