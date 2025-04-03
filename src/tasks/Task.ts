/*Bridge es un patrón de diseño estructural que te permite dividir una clase grande, o un grupo de clases estrechamente relacionadas, en dos jerarquías separadas (abstracción e implementación) que pueden desarrollarse independientemente la una de la otra*/

import { MessageSender } from "../senders/MessageSenders";

export abstract class Task {
    protected name:string;
    protected sender:MessageSender;
    protected estimatedHours:number;

    constructor( name:string,sender:MessageSender, estimatedHours:number) {
        this.name = name;
        this.sender = sender;
        this.estimatedHours = estimatedHours;
    }

    abstract complete(realHours:number): void;
}