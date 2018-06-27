import { InMemoryDbService } from 'angular-in-memory-web-api';
import { v1 } from 'uuid';

export class TodoMockInMemorySerice implements InMemoryDbService {
    createDb() {
        let todos = [
            { id: v1(), todoName: 'test1', description: 'Lorem ipsum', isCompleted: false },
            { id: v1(), todoName: 'test2', description: 'Lorem ipsum', isCompleted: false },
            { id: v1(), todoName: 'test3', description: 'Lorem ipsum', isCompleted: true }
        ]
        return { todos };
    }
}