import { Component, OnInit} from '@angular/core';
import { UserService,User } from '../user.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-list-users',
  imports: [CommonModule],
  templateUrl: './list-users.component.html',
  styleUrl: './list-users.component.scss'
})
export class ListUsersComponent implements OnInit {
  users: User[] = [];
  constructor(private userService: UserService){}
  ngOnInit(): void {
    this.userService.getUsers().subscribe((data)=>{
      this.users = data;
    })
  }

}
