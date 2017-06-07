import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'my-app',
  templateUrl: 'app/app.model.driven.form.component.html',
  styleUrls: ['app/app.model.driven.form.component.css']
})
export class AppComponent implements OnInit{

  private defaultCity:string = "Gurugram";
  private userForm : FormGroup;

  constructor(private _formBuilder: FormBuilder){}

  public ngOnInit(){
    this.userForm = this._formBuilder.group({
      name:['name', [Validators.required, Validators.minLength(4), Validators.maxLength(10)]],
      email:['email@email.com'],
      address: this._formBuilder.group({
        street: ['street'],
        city: [this.defaultCity],
        postalCode: [null, Validators.pattern('^[0-9]{5}$')]
      })
    })
  }

  private onSubmit(value:any){
    console.log(value);
  }

  private onFormSubmit(){
    console.log(this.userForm.value);
  }
}