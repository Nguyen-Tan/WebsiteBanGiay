import { Component, OnInit, Injector } from '@angular/core';

import{ApiService} from 'src/app/lib/api.service';
import { FormBuilder} from '@angular/forms';
import { BaseComponent } from 'src/app/lib/base-component';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-cateright',
  templateUrl: './cateright.component.html',
  styleUrls: ['./cateright.component.css']
})
export class CaterightComponent extends BaseComponent implements OnInit {

  public CateogoryList: any=[];
  // public cateogory:any;
  // public formdata: any;
  public CateogoryList1: any=[];
  //@ViewChild(FileUpload, { static: false }) file_image: FileUpload;
  constructor(private fb: FormBuilder, injector: Injector, private service:ApiService) {
    super(injector);
  }

  ngOnInit(): void {
    this.refserProList();
    this.refserProList1();
  }
  refserProList(){
    this.service.get("/api/Category/get-all").subscribe(data=>{
      this.CateogoryList = data;
      console.log(this.CateogoryList);
    })
  }
  refserProList1(){
    this.CateogoryList1=[];
    this._route.params.subscribe(params => {
    let id = params['id'];
    
    this.service.get("/api/Category/get-by-id"+id).pipe(takeUntil(this.unsubscribe)).subscribe((data: any) => {
      this.CateogoryList1 = data;
      
    });
  });
  }
}
  
