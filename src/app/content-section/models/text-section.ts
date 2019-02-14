import { User } from '../../shared/models/user';

export class TextSection {
    constructor(
        public author: User,
        public body: string,
        public createdAt: number,
        public id: string,
        public published: boolean,
        public name: string,
        public updatedAt: number,
        public value: string,
    ) {
    }
}
