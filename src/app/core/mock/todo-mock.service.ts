import { InMemoryDbService } from 'angular-in-memory-web-api';
import { v1 } from 'uuid';

export class TodoMockInMemorySerice implements InMemoryDbService {
    createDb() {
        let todos = [
            { id: v1(), todoName: 'test1', description: 'Lorem ipsum', isCompleted: false },
            { id: v1(), todoName: 'test2', description: 'Lorem ipsum', isCompleted: false },
            { id: v1(), todoName: 'test3', description: 'Lorem ipsum', isCompleted: true }
        ];

        let user = [{
            id: 1,
            name: 'Zsolt Peter',
            email: 'zpeter@login.com',
            profilePicture: '../../assets/img/dummy-profile-pic.png'
        }];

        let login = [{
            id: 1,
            email: 'zpeter@login.com',
            password: 'Abcd1234'
        }];
        return { todos, user, login };
    }
}