import { Component, OnInit, Injector } from '@angular/core';

import{ApiService} from 'src/app/lib/api.service';
import { FormBuilder} from '@angular/forms';
import { BaseComponent } from 'src/app/lib/base-component';
import { takeUntil } from 'rxjs/operators';


@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent extends BaseComponent implements OnInit {

  public ProductByBrand: any=[];
  
  
  
  constructor(private fb: FormBuilder, injector: Injector, private service:ApiService) {
    super(injector);
  }

  ngOnInit(): void {
    
    this.refserProListbyBrand();
    
    
  }
  refserProListbyBrand(){
    this.ProductByBrand=[];
    this._route.params.subscribe(params => {
      let id = params['id'];
    
      this._api.get('/api/product/get-by-brand/'+id).pipe(takeUntil(this.unsubscribe)).subscribe((data: any) => {
        this.ProductByBrand = data;
      
    });
  });
  }
  
 

  
}
