import { Component, OnInit } from '@angular/core';
import { debug } from 'console';
import { debuglog } from 'util';
import {FormService} from '../form.service';
@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.css']
})
export class FormRegisterComponent implements OnInit {
  user_list
  constructor(private usrs:FormService ) {}

  fname=''
  lname=''
  add=''
  email=''
  pswd=''
  gen=''
  date=''
  ngOnInit(): void {
    this.user_list=this.usrs.user_list
  }
  register()
  {
    var flag = 0
    if(this.user_list.length>0)
    {
      for(var user of this.user_list)
      {
        if(user[3]==this.email)
        {
            alert("email id already registered")
            flag=1
            break
        }
      }
    }
      if(flag==0)
      {
        var temp=[]
        temp.push(this.fname)
        temp.push(this.lname)
        temp.push(this.add)
        temp.push(this.email)
        temp.push(this.pswd)
        temp.push(this.gen)
        temp.push(this.date)
        this.user_list.push(temp)
      }
  }

}
