import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ApiService } from 'src/app/lib/api.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './product/header/header.component';
import { FooterComponent } from './product/footer/footer.component';
import { MainComponent } from './product/main/main.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CategoryComponent } from './product/category/category.component';
import { DetailComponent } from './product/detail/detail.component';
import { ProductbycatComponent } from './product/productbycat/productbycat.component';



// import { from } from 'rxjs';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    CategoryComponent,
    DetailComponent,
    ProductbycatComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
