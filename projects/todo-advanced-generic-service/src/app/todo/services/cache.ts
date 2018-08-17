export class Cache<T> {

    constructor(private key: string) {
    }

    public writeCache(value: T): boolean {
        const stringifiedValue = JSON.stringify(value);
        localStorage.setItem(this.key, stringifiedValue);
        return true;
    }

    public readCache(): T {
        return JSON.parse(localStorage.getItem(this.key));
    }

    public hasCache(): boolean {
        return !(localStorage.getItem(this.key) === null);
    }
}
