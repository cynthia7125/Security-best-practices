import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import { Database } from './database.js';

import { SearchForm } from './SearchForm';
import { SearchResults } from './SearchResults';

function BugSearch(props) {
    const [bugs, setBugs] = useState([]);

    function handleSearch(query) {
        const db = new Database();
        setBugs(db.search(query));
    }

    let content;
    if (bugs.length === 0) {
        content = <SearchForm handleSearch={handleSearch} />;
    } else {
        content = <SearchResults results={bugs} />;
    }

    return content;
}

ReactDOM.render(
    <BugSearch />,
    document.getElementById('root')
);