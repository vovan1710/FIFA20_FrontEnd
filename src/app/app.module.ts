import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminMainComponentComponent } from './AdminMainComponent/AdminMainComponent.component';
import { MainComponentComponent } from './MainComponent/MainComponent.component';
import { NavComponentComponent } from './NavComponent/NavComponent.component';
import { FooterComponent } from './footer/footer.component';
import { BonusComponentComponent } from './BonusComponent/BonusComponent.component';
import { OrdersComponentComponent } from './OrdersComponent/OrdersComponent.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
   declarations: [
      AppComponent,
      MainComponentComponent,
      AdminMainComponentComponent,
      NavComponentComponent,
      FooterComponent,
      BonusComponentComponent,
      OrdersComponentComponent
   ],
   imports: [
      BrowserModule,
      FontAwesomeModule,
      AppRoutingModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
