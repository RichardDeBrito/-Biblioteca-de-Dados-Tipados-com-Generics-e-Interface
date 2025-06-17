export interface Repository<T> {
    create(item: T): void;
    read(id: string): T | undefined;
    update(item: T): void;
    list(): T[];
}