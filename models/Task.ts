interface ITask{
    id: string;
    title: string;
    description ?: string;
    dueDate ?: Date;
    priority: Priority;
    status: Status;
    createdAt:Date;
    updatedAt:Date;
    

}
enum Priority {
    Low,
    Medium,
    High
}
enum Status {
    Pending,
    InProgress,
    Completed
}
class Task implements ITask{
    static idNumber: number = 0;
    id: string;
    title: string;
    description?: string | undefined;
    dueDate?: Date | undefined;
    priority: Priority;
    status: Status;
    createdAt: Date;
    updatedAt: Date;

    constructor(title: string, priority: Priority, status: Status, description ?: string, dueDate?: Date){
        this.title = title;
        this.priority = priority;
        this.status = status;
        this.description = description;
        this.dueDate = dueDate;
        this.id = `${title}-${Task.idNumber}`;
        this.createdAt = new Date();
        this.updatedAt = new Date();
    }
}
