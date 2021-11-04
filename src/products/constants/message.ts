import { Injectable } from "@nestjs/common";

@Injectable()
export class Message {

    notFoundException(id: number, arg: string): string {
        return `El ${arg} con #${id} no existe`;
    }

}