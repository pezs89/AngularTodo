import { InMemoryDbService } from 'angular-in-memory-web-api';
import { v1 } from 'uuid';

export class TodoMockInMemorySerice implements InMemoryDbService {
    createDb() {
        const todos = [{
            id: v1(),
            name: 'Recent',
            iconClass: 'fas fa-pencil-alt',
            todoList: [
                { id: v1(), todoName: 'test1', description: 'Lorem ipsum', isCompleted: false },
                { id: v1(), todoName: 'test2', description: 'Lorem ipsum', isCompleted: false },
                { id: v1(), todoName: 'test3', description: 'Lorem ipsum', isCompleted: true }
            ]
        },
        {
            id: v1(),
            name: 'Movies',
            iconClass: 'fas fa-film',
            todoList: [
                { id: v1(), todoName: 'test4', description: 'Lorem ipsum10', isCompleted: false },
                { id: v1(), todoName: 'test5', description: 'Lorem ipsum20', isCompleted: true },
                { id: v1(), todoName: 'test6', description: 'Lorem ipsum30', isCompleted: true }
            ]
        }
        ];

        const user = [{
            id: 1,
            name: 'Zsolt Peter',
            email: 'zpeter@login.com',
            profilePicture: 'assets/dummy-profile-pic.jpg'
        }];

        const login = [{
            id: 1,
            email: 'zpeter@login.com',
            password: 'Abcd1234'
        }];
        return { todos, user, login };
    }
}