import { InMemoryDbService } from 'angular-in-memory-web-api';
import { v1 } from 'uuid';

export class TodoMockInMemorySerice implements InMemoryDbService {
    createDb() {
        let todos = [{
            id: 1,
            todoList: [
                { id: v1(), todoName: 'test1', description: 'Lorem ipsum', isCompleted: false },
                { id: v1(), todoName: 'test2', description: 'Lorem ipsum', isCompleted: false },
                { id: v1(), todoName: 'test3', description: 'Lorem ipsum', isCompleted: true }
            ]
        },
        {
            id: 2,
            todoList: [
                { id: v1(), todoName: 'test4', description: 'Lorem ipsum10', isCompleted: false },
                { id: v1(), todoName: 'test5', description: 'Lorem ipsum20', isCompleted: true },
                { id: v1(), todoName: 'test6', description: 'Lorem ipsum30', isCompleted: true }
            ]
        }
        ];

        let user = [{
            id: 1,
            name: 'Zsolt Peter',
            email: 'zpeter@login.com',
            profilePicture: './assets/download.jpg'
        }];

        let login = [{
            id: 1,
            email: 'zpeter@login.com',
            password: 'Abcd1234'
        }];
        return { todos, user, login };
    }
}