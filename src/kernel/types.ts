export type Entity<Tidentifier extends string> ={
    id?: Tidentifier
}

export enum TypesResponse{
    SUCCESS='SUCCESS',
    ERROR='ERROR',
    WARNING='WARNING'
}

export interface Metadata {
    total: number;
    totalFiltered: number;
    currentPage: number;
    pageSize: number;
    totalPages: number;
}

export interface ResponseApi<T> {
    result: T | null;
    metadata: Metadata | null;
    type: TypesResponse;
    text: string;
}