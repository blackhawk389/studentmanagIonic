import {Page, NavController, NavParams, Platform} from 'ionic-angular';
import { SecPage } from '../page2/page2';

@Page({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
    
    array: any[];
    record : any;
    information : any;
    
    isfalse : boolean = false;
    
    constructor(public nav : NavController, public navparams : NavParams, public platform: Platform){
        
        this.array = [];
        this.nav = nav;
        this.navparams = navparams;
        this.platform = platform;
        //comming is object of object
        this.record = navparams.get("arrayOf");
        //this.information =  JSON.stringify(this.record);
        
        this.array.push(this.record);
        console.log(this.array)
       
       // this.displayInformation();
        //objects of objects are so irritating
        
    }
    
    gotopage(){
        this.nav.push(SecPage);
    }
    
    // displayInformation(){
    //     // var local = JSON.stringify(this.record);
    //     // console.log(local)
    //     this.array.push(this.dinfor)
    // }
}
