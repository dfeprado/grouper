export type CloseFn = (arg?: any) => void;

export interface Dialog<T> {
    data: T;
    close: CloseFn;
}