import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-add-user',
  imports: [FormsModule],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.scss'
})
export class AddUserComponent {
  name = "";
  email = "";

  constructor(private userService: UserService, private router: Router){}
  addUser(){
    const user = {name: this.name, email: this.email};
    this.userService.addUser(user).subscribe(()=>{
      this.router.navigate(['/list-users'])
    })
  }
}
