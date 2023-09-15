export function getId() {
    const qs = new URLSearchParams(window.location.search);
    const id = qs.get('id');

    return id;
}

export function getBackUrl() {
    const qs = new URLSearchParams(window.location.search);
    let backUrl = qs.get('backUrl');

    try {
        const url = new URL(backUrl);
        if (url.protocol.toLowerCase() !== "http:") {
            backUrl = null;
        }
    } catch {
        backUrl = null;
    }

    return backUrl;
}

export function navigateToBug(id) {
    window.location = "/bug.html?id=" + id;
}
