import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { User } from 'src/app/models/user.model';
import { userList } from 'src/app/models/users';

@Component({
  selector: 'app-listing-app',
  templateUrl: './listing-app.component.html',
  styleUrls: ['./listing-app.component.css'],
})
export class ListingAppComponent {
  userList?: User[];
  constructor(private dataService: DataService) {}

  showTheEvens(): void {
    this.userList = this.dataService.getTheEvenUsers();
  }

  showTheOdds(): void {
    this.userList = this.dataService.getTheOddUsers();
  }

  deleteUser(user: User): void {
    user.deletedUser = true;
  }
}
