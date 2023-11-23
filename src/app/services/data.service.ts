import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { userList } from '../models/users';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}

  userList: User[] = userList;

  getTheEvenUsers(): User[] {
    return this.userList.filter((user) => user.id % 2 === 0);
  }

  getTheOddUsers(): User[] {
    return this.userList.filter((user) => user.id % 2 !== 0);
  }
}
