export class DataResponse<T> {

    data: T | T[];
    message: string;
    statusCode: number;
    error: Error;
    isError: boolean;

}