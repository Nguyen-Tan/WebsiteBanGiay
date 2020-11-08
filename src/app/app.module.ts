import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ApiService } from 'src/app/lib/api.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NewsComponent } from './news/news.component';
import { SlideComponent } from './slide/slide.component';
import { MainComponent } from './main/main.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CartComponent } from './cart/cart.component';
import { CateogoryComponent } from './product/cateogory/catemain/cateogory.component';
import { DetailproComponent } from './detailpro/detailpro.component';
import { CaterightComponent } from './product/cateogory/cateright/cateright.component';
import { CateleftComponent } from './product/cateogory/cateleft/cateleft.component';



// import { from } from 'rxjs';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NewsComponent,
    SlideComponent,
    MainComponent,
    CartComponent,
    CateogoryComponent,
    DetailproComponent,
    CaterightComponent,
    CateleftComponent,
    
    
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
