import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afs: AngularFireAuth) { }

  authenticate(email: string, password: string): Promise<any> {
    return this.afs.signInWithEmailAndPassword(email, password);
  }

}
