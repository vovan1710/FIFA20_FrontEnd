import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponentComponent } from './MainComponent/MainComponent.component';
import { NavComponentComponent } from './NavComponent/NavComponent.component';
import { FooterComponent } from './footer/footer.component';
import { Nav_loginComponentComponent } from './Nav_loginComponent/Nav_loginComponent.component';
import { BonusComponentComponent } from './BonusComponent/BonusComponent.component';

@NgModule({
   declarations: [
      AppComponent,
      MainComponentComponent,
      NavComponentComponent,
      FooterComponent,
      Nav_loginComponentComponent,
      BonusComponentComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
