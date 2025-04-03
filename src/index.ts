import { TaskFactory } from "./factories/TaskFactory";
import { TelegramSender } from "./senders/TelegramSender";
import { Database } from "./database/Database";

const sender= new TelegramSender();
const db = Database.getInstance();

const task1 = TaskFactory.createTask('Implementar navbar conmaterias',4,sender);
const task2 = TaskFactory.createTask('Implementar login con Juv',10,sender);

db.addTask(task1);
db.addTask(task2);

task1?.complete(5);
task2?.complete(20);

console.log("Tareas en la base de datos:", db.getTasks());