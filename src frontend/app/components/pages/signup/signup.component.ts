import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  constructor(
    private userService: UserService,
    private snackBar: MatSnackBar
  ) {}
  public user = {
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    email: '',
    mobileNo: '',
  };
  ngOnInit(): void {}
  formSubmit() {
    console.log(this.user);
    if (this.user.username == '' || this.user.username == null) {
      this.snackBar.open('All field is required', 'OK', { duration: 3000 });

      return;
    }
    //add User: which is come from userService
    this.userService.addUser(this.user).subscribe(
      (data) => {
        console.log(data);
        Swal.fire('Success', 'User is registed', 'success');
      },
      (error) => {
        console.log(error);
        this.snackBar.open(error.error.text, '', { duration: 3000 });
      }
    );
  }
}
