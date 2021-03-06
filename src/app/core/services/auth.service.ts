import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private user$: Observable<User>;
  private userId: string;

  constructor(
    private _firebaseAuth: AngularFireAuth,
    private _angularFirestore: AngularFirestore,
    private _router: Router
  
  ) { 
    this.user$ = this._firebaseAuth.authState.pipe(
      switchMap(user => {
        if(user) {
          this.userId = user.uid;
          return this._angularFirestore.doc<User>(`users/${user.uid}`).valueChanges()
        } else {
          return of(null);
        }
      })
    );
  }

  get currentUserId(): string {
    return this.userId;
  }

  getUser(): Observable<User> {
    return this.user$;
  }
  
  async register(email: string, password: string, displayName: string): Promise<void> {
    try {
      const { user } = await this._firebaseAuth.createUserWithEmailAndPassword(email, password);
      
      await this.updateUserData({ ...user, displayName });
    } catch (error) {
      console.log('Something went wrong while registration:', error.message);
    }
  }

  async login(email: string, password: string): Promise<void> {
    try {
      const { user } = await this._firebaseAuth.signInWithEmailAndPassword(email, password);

      await this.updateUserData(user);
    } catch (error) {
      console.log('Something went wrong while login:', error.message);
    }
  }

  updateUserData({ uid, email, displayName }: any): Promise<void> {
    const userRef: AngularFirestoreDocument = this._angularFirestore.doc(`users/${uid}`);
    const data = {
      email,
      name: displayName
    }

    return userRef.set(data, { merge: true });
  }

  async logout(): Promise<void> {
    await this._firebaseAuth.signOut();
    this._router.navigate(['/']);    
  }
}
