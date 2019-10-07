import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MainComponentComponent } from './MainComponent/MainComponent.component';
import { NavComponentComponent } from './NavComponent/NavComponent.component';
import { FooterComponent } from './footer/footer.component';
import { BonusComponentComponent } from './BonusComponent/BonusComponent.component';
import { OrdersComponentComponent } from './OrdersComponent/OrdersComponent.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { AuthenticationService } from '../app/_services';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(private authenticationService: AuthenticationService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(catchError(err => {
            if (err.status === 401) {
                // auto logout if 401 response returned from api
                this.authenticationService.logout();
                location.reload(true);
            }

            const error = err.error.message || err.statusText;
            return throwError(error);
        }))
    }
}

@NgModule({
   declarations: [
      AppComponent,
      MainComponentComponent,
      NavComponentComponent,
      FooterComponent,
      BonusComponentComponent,
      OrdersComponentComponent
   ],
   imports: [
      BrowserModule,
      FontAwesomeModule,
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
