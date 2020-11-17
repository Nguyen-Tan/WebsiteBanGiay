import { Component, OnInit, Injector } from '@angular/core';

import{ApiService} from 'src/app/lib/api.service';
import { FormBuilder} from '@angular/forms';
import { BaseComponent } from 'src/app/lib/base-component';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-productbycat',
  templateUrl: './productbycat.component.html',
  styleUrls: ['./productbycat.component.css']
})
export class ProductbycatComponent extends BaseComponent implements OnInit  {

  
  public ProductByCategory: any=[];
  
  
  constructor(private fb: FormBuilder, injector: Injector, private service:ApiService) {
    super(injector);
  }

  ngOnInit(): void {
    
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

  
}
