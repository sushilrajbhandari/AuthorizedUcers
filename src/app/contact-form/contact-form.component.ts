import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  userList: User[]=[];

  addUser(form){
    var user: User;
    user=form.value;
    this.userList.push(user);
  }

  constructor() { }

  ngOnInit() {
  }

}
