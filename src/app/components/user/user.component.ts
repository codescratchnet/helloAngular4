import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  private email:string
  private userName:string
  private name:string
  private lastName:string

  constructor() { }

  ngOnInit() {
    this.name = "pakorn"
    this.userName = "pakorn"
    this.email = "pakorn@2c2p.com"
  }

}
