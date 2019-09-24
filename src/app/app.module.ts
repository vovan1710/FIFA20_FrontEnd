import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponentComponent } from './MainComponent/MainComponent.component';
import { NavComponentComponent } from './NavComponent/NavComponent.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
   declarations: [
      AppComponent,
      MainComponentComponent,
      NavComponentComponent,
      FooterComponent
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
