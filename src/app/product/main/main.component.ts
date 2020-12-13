import { Component, OnInit, Injector } from '@angular/core';

import{ApiService} from 'src/app/lib/api.service';
import { FormBuilder} from '@angular/forms';
import { BaseComponent } from 'src/app/lib/base-component';
import{ Router} from '@angular/router';
import { takeUntil } from 'rxjs/operators';


//import 'rxjs/add/operator/takeUntil';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent extends BaseComponent implements OnInit {

  //constructor(private service:SharedService) { }

  public ProductSell: any=[];
  
 
  //@ViewChild(FileUpload, { static: false }) file_image: FileUpload;
  constructor(private fb: FormBuilder, injector: Injector, private service:ApiService) {
    super(injector);
  }

  ngOnInit(): void {
    this.refserProSell();
    
  }
  
  refserProSell(){
    this.service.get("/api/Product/get-pro-sell").subscribe(data=>{
      this.ProductSell = data;
      //console.log(this.ProductList);
    })
  }
  addToCart(item) { 
    this._cart.addToCart(item);
    alert('Thêm thành công!'); 
  }
}