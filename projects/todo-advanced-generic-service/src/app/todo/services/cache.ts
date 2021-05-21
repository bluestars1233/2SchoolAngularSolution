export class Cache<T> {

    constructor(private key: string) {
    }

    public writeCache(value: T): boolean {
        const stringifiedValue = JSON.stringify(value);
        localStorage.setItem(this.key, stringifiedValue);
        return true;
    }

    public readCache(): T | undefined {
        const cached = localStorage.getItem(this.key);
        if(cached) {
          return JSON.parse(cached);
        }

        return undefined;
    }

    public hasCache(): boolean {
        return !(localStorage.getItem(this.key) === null);
    }
}
