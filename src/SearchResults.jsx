import React from 'react';

import { BugLink } from './BugLink';

export function SearchResults(props) {
    const currentUrl = window.location.toString();

    const rows = props.results.map(result =>
        <tr key={result.id}>
            <td>{result.id}</td>
            <td><BugLink id={result.id} title={result.title} backUrl={currentUrl} /></td>
            <td>{result.severity}</td>
        </tr>
    );

    return (
        <table>
            <caption>Search results</caption>
            <thead>
                <tr>
                    <th>Bug #</th>
                    <th>Title</th>
                    <th>Severity</th>
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>
    );
}