import { Component } from '@angular/core';
import { FormArrayName, FormControl, FormGroup, ReactiveFormsModule, RequiredValidator, Validators } from '@angular/forms';
import { user} from 'src/app/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
reactiveForm:FormGroup;

  user:user

  constructor(){

    this.reactiveForm=new FormGroup({

     firstname:new FormControl(null, [Validators.required,Validators.email]),
     lastname:new FormControl(null, [Validators.required]),
     gender:new FormControl(null,Validators.required),
     country:new FormControl(null,Validators.required),
     education:new FormControl(null,Validators.required),

    });

    // this.reactiveForm.get('firstname')?.valueChanges.subscribe(Value =>{
    //   console.log(Value);
    // })


    this.reactiveForm.valueChanges.subscribe(value=>{
      console.log(value);

    })

}

  onsubmitButtonClick()
  {
    console.log(this.reactiveForm);

  }

  noSpace(control: FormControl){

    if(control.value !=null && control.value.indexof(' ')!= -1){
      return{noSpace: true}
    }

    return null;
  }

  reset(){
    this.reactiveForm.reset();
  }
    //   // firstname:'ajinkya@gmail.com',
    //   // lastname:'dfgjdfhgu',
    //   // gender:'male',
    //   // country:'india',
    //   // education:'MCA'
  
    // })

  } 
