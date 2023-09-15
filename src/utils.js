export function getId() {
    const qs = new URLSearchParams(window.location.search);
    const id = qs.get('id');

    return id;
}

export function getBackUrl() {
    const qs = new URLSearchParams(window.location.search);
    const backUrl = qs.get('backUrl');

    return backUrl;
}

export function navigateToBug(id) {
    window.location = "/bug.html?id=" + id;
}
