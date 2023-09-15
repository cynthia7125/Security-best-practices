const initialData = [
    { id: "1", title: "App crashes with invalid input", severity: "high" },
    { id: "2", title: "App leaks data to unauthorized users", severity: "critical" },
    { id: "3", title: "Logo is too small", severity: "low" }
];

if (!window.localStorage.getItem('bugs')) {
    window.localStorage.setItem('bugs', JSON.stringify(initialData));
}

function hasId(item, query) {
    return item.id === query;
}

function matchesTitle(item, query) {
    return item.title.toLowerCase().includes(query.toLowerCase());
}

export class Database {
    constructor() {
        const serializedData = window.localStorage.getItem('bugs');
        this.data = JSON.parse(serializedData);
    }

    search(query) {
        return this.data.filter(item => hasId(item, query) || matchesTitle(item, query));
    }

    find(id) {
        return this.data.find(item => item.id === id);
    }

    insert(bug) {
        const copy = { ...bug };
        copy.id = this.data.push(copy).toString();
        window.localStorage.setItem('bugs', JSON.stringify(this.data));
        return copy.id;
    }

    update(id, bug) {
        Object.assign(this.find(id), bug);
        window.localStorage.setItem('bugs', JSON.stringify(this.data));
    }
}
