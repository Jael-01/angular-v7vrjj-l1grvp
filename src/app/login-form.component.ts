import{component}from '@angular/core';
import{login-form}from'..\login-form';

@component({
  selector:'app-login-form',
  templateUrl:'./login-form.component.html',
  styleUrls:[''./login-form.component.css']
})
export class loginformcomponent{
  gender=['female','male'];
  submitted=false;
  onsubmit() {this.submitted=true;}
}