import {Component, Input} from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.sass']
})
export class ProfileComponent {
  @Input() userForm: FormGroup = new FormGroup({});

  constructor() {

  }

  get firstName() {
    return this.userForm.controls['firstName'];
  }

  get pictureField() {
    return this.userForm.controls['picture'];
  }

  get titleField() {
    return this.userForm.controls['title'];
  }
}
