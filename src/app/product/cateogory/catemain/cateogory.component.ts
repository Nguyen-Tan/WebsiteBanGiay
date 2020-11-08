import { Component, OnInit, Injector } from '@angular/core';

import{ApiService} from 'src/app/lib/api.service';
import { FormBuilder} from '@angular/forms';
import { BaseComponent } from 'src/app/lib/base-component';


@Component({
  selector: 'app-cateogory',
  templateUrl: './cateogory.component.html',
  styleUrls: ['./cateogory.component.css']
})
export class CateogoryComponent extends BaseComponent implements OnInit {

  //constructor(private service:SharedService) { }

  public CateogoryList: any=[];
  public cateogory:any;
  public formdata: any;
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
    this.service.get("/api/Category/get-by-id").subscribe(data=>{
      this.CateogoryList1 = data;
      console.log(this.CateogoryList1);
    })
  }
}
