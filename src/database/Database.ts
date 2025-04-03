

export class Database{
    private static instance: Database;
    private task:any[] = [];
    private constructor() {}

    static getInstance(): Database {
        if(!Database.instance){
            Database.instance = new Database();
        }
            return Database.instance;    
    }

    addTask(task:any): void {
        this.task.push(task);
    }
    getTasks(): any[] {
        return this.task;
    }
}