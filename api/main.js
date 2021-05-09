//import * as errors from './errors';
import {url, img, img_div, button} from '/child.js'
import {ValidationError} from '/errors.js'
import {PermissionError} from '/errors.js'
import {DatabaseError} from '/errors.js'


 class GetApi{
    img_url;
    dog_name;
    constructor(url) {
        this.url = url;
    }
     initialize(){
        fetch(url)
        .then(response => response.json())
        .then(data =>{
             this.img_url =  data.message;       
        })
        .then(()=>{
            img.setAttribute('src',this.img_url);
            this.dog_name = this.img_url.slice(30,50);
            this.dog_name = this.getName(this.dog_name);
            document.getElementsByClassName('name')[0].textContent =  this.dog_name;
        })
        .catch(new ValidationError('A validation error'))
        .catch(new PermissionError('A permission error'))
        .catch(new  DatabaseError('A database error'))
        //inner Lexical Environment {}
        // outer Lexical Environment { img_url,dog_name: undefined, constructor:fn, initialize: fn, setImage:fn, ...  }
        // global Lexical Environment {img_url,dog_name: undefined, constructor:fn, initialize: fn, setImage:fn, ..., obj: Object,...  }

    }
       setImage() {
        this.initialize();         
        img.height = '500';
        img.width = '500';
        img_div.appendChild(img);
        
       }

       getName(str){
           let i = str.lastIndexOf('/');
           if ( i != -1){
               str = str.substr(0,i);
           }
           return str;
       }

    get img_url(){
        return this.img_url;
    }

}   



const obj = new GetApi(url);


button.addEventListener('click',()=>{
        obj.setImage();
} 
)   




