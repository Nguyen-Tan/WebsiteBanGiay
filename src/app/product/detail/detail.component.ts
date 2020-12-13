import { Component, OnInit, Injector } from '@angular/core';

import{ApiService} from 'src/app/lib/api.service';
import { FormBuilder} from '@angular/forms';
import { BaseComponent } from 'src/app/lib/base-component';
import { takeUntil } from 'rxjs/operators';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent extends BaseComponent implements OnInit {

  public ProductDetail:any;
  
  


  //@ViewChild(FileUpload, { static: false }) file_image: FileUpload;
  constructor(private fb: FormBuilder, injector: Injector, private service:ApiService) {
    super(injector);
  }

  ngOnInit(): void {
    this.refserProList();
    
    
    
  }
  refserProList()
  {
    this. ProductDetail={};
    this._route.params.subscribe(params => {
      let id = params['id'];
      this._api.get('/api/product/get-id/'+id).pipe(takeUntil(this.unsubscribe)).subscribe((data: any) => {
        this. ProductDetail = data;
      });
    });
  }
  addToCart(ProductDetai) { 
    this._cart.addToCart(ProductDetai);
    alert('Thêm thành công!'); 
  }
  
  

}
