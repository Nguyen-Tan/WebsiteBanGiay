import { Component, OnInit, Injector } from '@angular/core';

import{ApiService} from 'src/app/lib/api.service';
import { FormBuilder} from '@angular/forms';
import { BaseComponent } from 'src/app/lib/base-component';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent extends BaseComponent implements OnInit {

  public CateogoryList: any=[];
  public BrandList:any=[];
  public ProductByCategory: any=[];
  
  
  constructor(private fb: FormBuilder, injector: Injector, private service:ApiService) {
    super(injector);
  }

  ngOnInit(): void {
    this.refserProList();
    this.refserBrandList();
    this.refserProListbyCate();
    
  }
  refserProListbyCate(){
    this.ProductByCategory=[];
    this._route.params.subscribe(params => {
      let id = params['id'];
    
      this._api.get('/api/product/get-by-id/'+id).pipe(takeUntil(this.unsubscribe)).subscribe((data: any) => {
        this.ProductByCategory = data;
      
    });
  });
  }

  refserProList(){
    this.service.get("/api/Category/get-all").subscribe(data=>{
      this.CateogoryList = data;
     // console.log(this.CateogoryList);
    })
  }
  
  refserBrandList(){
    this.service.get("/api/Brand/get-all").subscribe(data=>{
      this.BrandList = data;
     
    })
  }
  
}
  
