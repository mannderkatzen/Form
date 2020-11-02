import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Form';
  reg = false
  val = false
  loggedin = false

  changeview1()
  {
    this.reg=true
  }
  changeview2()
  {
    this.reg=false
  }
  verified()
  {
    this.loggedin= true
    this.gotohome()
  }
  gotohome()
  {
    if(this.loggedin)
    {
      this.val=true
    }
    else
    {
      alert("User not logged in")
    }
  }
}
