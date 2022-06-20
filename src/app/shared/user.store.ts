import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from './models/user';

export interface UserStateModel {
    user: User;
}

const initialState: UserStateModel = {
    user: new User()
};

export class Store {
    private subject = new BehaviorSubject<UserStateModel>(initialState);
    private store = this.subject.asObservable();

    get value() {
        return this.subject.value;
    }

    public getUser(): Observable<User> {
        return this.store
            .pipe(map(store => store.user));
    }

    set(name: string, state: any) {
        console.log(state);
        this.subject.next({
            ...this.value, [name]: state
        });
    }
}
