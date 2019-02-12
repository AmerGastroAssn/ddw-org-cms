export class User {
    constructor(
        public admin: boolean,
        public displayName: string,
        public email: string,
        public isOnline: boolean,
        public loginDate: number = Date.now(),
        public photoURL: string,
        public title: string,
        public uid: string,
        public password?: string,
    ) {
    }
}
