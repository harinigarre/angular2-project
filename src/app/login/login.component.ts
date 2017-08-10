import { Component, OnInit, OnChanges } from '@angular/core';
import { NgModel } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { Service } from '../services/service'
import {LoginModel} from './login-model'  


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[Service]
})
export class LoginComponent implements OnInit {
  private loginInfoList: LoginModel[];
   txtEmail: string;
   txtPassword: string;
   myVar: boolean;
   addValue: boolean = false;
   newPassword: string;
   newConfirmPassword: string;
  constructor(private svc:Service) { }

  ngOnInit() {
  }
  public loginBtn() {  
    this.svc.getDatafromJsonServer().subscribe(
        data=>{
            this.loginInfoList=data; 
            let checkModel:LoginModel= this.loginInfoList.find(i=>i.uid==this.txtEmail);
            if(checkModel){
              if(checkModel.pwd==this.txtPassword){
                this.myVar = true;
                alert("successfully authenticated");
              }
              else{
              this.myVar = false;
                alert("authentication Failed");
              }
            }else{
              alert("User not found");
            }
        }
      );
    }
  public newUser(){
    this.addValue = true;
  }
  public addUserDetails(){
    if(this.newPassword == this.newConfirmPassword){
      console.log("Succesfully added");
    }else{
      console.log("User not added");
    }
  }
}
