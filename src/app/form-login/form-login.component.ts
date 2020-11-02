import { Component, OnInit, Output,EventEmitter} from '@angular/core';
import {FormService} from '../form.service'
@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent implements OnInit {

  email=''
  pswd=''
  user_list
  @Output("verified") verified:EventEmitter<any> = new EventEmitter();
  constructor(private users:FormService) { }

  ngOnInit(): void {
    this.user_list = this.users.user_list
  }

  authenticate()
  {
    var flag = false
    if(this.user_list.length>0)
    {
      for(var user of this.user_list)
      {
        if (user[3]==this.email)
        {
          flag = true
          this.verified.emit()
          break
        }
      }
    }
    else
    {
      alert("no users registered")
    }
    if(flag == false)
    alert("user not found")

  }

}
