import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { from } from 'rxjs';
import { map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';
import { UserService } from './user.service';
import { User } from '../_models/User';
import { UserHelper } from '../_helpers/user.helper';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private jwtHelper: JwtHelperService = new JwtHelperService();
  decodedToken: any;
  constructor(
    public authServiceFirebase: AngularFireAuth,
    private userService: UserService,
    private router: Router,
    private userHelper: UserHelper
  ) {}

  public register(obj: any) {
    return this.getObservableAndSetToken(
      this.authServiceFirebase.auth.createUserWithEmailAndPassword(
        obj.email,
        obj.password
      ),
      obj
    );
  }

  public loginWithEmail(email: string, password: string) {
    return this.getObservableAndSetToken(
      this.authServiceFirebase.auth.signInWithEmailAndPassword(email, password)
    );
  }

  public logout() {
    localStorage.removeItem('token');
    return this.authServiceFirebase.auth.signOut();
  }

  public isLogedIn(): boolean {
    return !this.jwtHelper.isTokenExpired(localStorage.getItem('token'));
  }

  public loginWithFacebook() {
    const provider = new firebase.auth.FacebookAuthProvider();
    return this.getObservableAndSetToken(
      this.authServiceFirebase.auth.signInWithPopup(provider)
    );
  }

  public loginWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    return this.getObservableAndSetToken(
      this.authServiceFirebase.auth.signInWithPopup(provider)
    );
  }

  private getObservableAndSetToken(
    promise: Promise<firebase.auth.UserCredential>,
    obj: any = null
  ) {
    return from(promise).pipe(
      map(value => {
        if (value) {
          value.user.getIdToken(true).then(token => {
            localStorage.setItem('token', token);
            this.decodedToken = this.jwtHelper.decodeToken(token);
            this.setInitialSettings(obj);
          });
        }
      })
    );
  }
  private setInitialSettings(obj: any) {
    const user_id: string = this.decodedToken.user_id;
    if (this.isLogedIn()) {
      this.userService.getUser(user_id).subscribe((data) => {
        if (data) {
          this.router.navigate(['/news']);
        } else {
          this.userService.setUser(user_id, this.userHelper.initializeNewUser(obj, this.decodedToken));
          this.router.navigate(['/profile']);
        }
      });
    }
  }
}
