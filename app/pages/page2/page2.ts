import {Page, NavController, NavParams, Platform, Storage, LocalStorage} from 'ionic-angular';
import {FORM_DIRECTIVES, FormBuilder, Validators, Control, ControlGroup,AbstractControl} from 'angular2/common';
import { HomePage } from '../home/home';


@Page({
  templateUrl: 'build/pages/page2/page2.html',
  providers: [FormBuilder]
})
export class SecPage {
    
   
    istrue : boolean = false;
    arr : any[];
    form: ControlGroup;
    
    name: AbstractControl;
    fname: AbstractControl;
    class: AbstractControl;
    email: AbstractControl;
    pnumber: AbstractControl;
    
   local : Storage;
    
    constructor(public navigation : NavController, public fb: FormBuilder){
           
        this.local = new Storage(LocalStorage);
        this.arr = [];
        this.navigation = navigation;
        
        
      this.form = fb.group({
            'name': ['', Validators.required],
            'fname': ['', Validators.required],
            //custom validation
        
            'class': ['', Validators.required],
            'email': ['', Validators.required],
            'pnumber': ['', Validators.required]
    });
        
       
        this.name = this.form.controls['name']
        this.fname = this.form.controls['fname']
        this.class = this.form.controls['class']
        this.email = this.form.controls['email']
        this.pnumber = this.form.controls['pnumber']
        
    }
   
     
    
    onSubmit(value : any){
        console.log(value);
       //this.navigation.push(HomePage, {arrayOf : value});
        this.local.set('obj', value);
        this.navigation.pop();
              //redirect to main page with card of student at the main page
    }
   
}
