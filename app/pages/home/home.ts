import {Page, NavController, NavParams, Platform, Storage, LocalStorage} from 'ionic-angular';
import { SecPage } from '../page2/page2';

@Page({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
    
    array: any[];
    record : any;
    information : any;
    
    local : Storage;
    
    constructor(public nav : NavController, public navparams : NavParams, public platform: Platform){
        
        this.local = new Storage(LocalStorage);
        this.array = [];
        this.nav = nav;
        this.navparams = navparams;
        this.platform = platform;
        //comming is object of object
        //this.record = navparams.get("arrayOf");
        //this.information =  JSON.stringify(this.record);
        this.information= this.local.get('obj')
        
        this.array.push(this.information);
        console.log(this.array)
       
       // this.displayInformation();
        //objects of objects are so irritating
        
    }
    
    gotopage(){
        this.nav.push(SecPage);
    }
}
