import React from 'react';

export function SearchForm(props) {
    function handleSearch(e) {
        e.preventDefault();
        
        const form = new FormData(e.target);
        const query = form.get('query');

        props.handleSearch(query);
    }

    return (
        <form onSubmit={handleSearch}>
            <label htmlFor="query">Query</label>
            <input id="query" name="query" type="search" />
            <button type="submit">Search</button>
        </form>
    );
}
