import React from 'react';

import { getBackUrl } from './utils.js';

export function BackLink() {
    const backUrl = getBackUrl();
    return (
        backUrl ? <a href={getBackUrl()}>Back</a> : "Back"
    );
}
