import React from 'react';

export function BugLink(props) {
    let url = "/bug.html?id=" + props.id;
    if (props.backUrl) {
        url += ("&backUrl=" + props.backUrl);
    }
    return (
        <a href={url}>{props.title}</a>
    );
}
