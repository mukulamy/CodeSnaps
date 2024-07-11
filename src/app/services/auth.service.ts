import { Injectable } from '@angular/core';
import { Router, RouterConfigOptions } from '@angular/router';
import { getAuth, createUserWithEmailAndPassword , signOut, onAuthStateChanged} from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private uid?: string;

  constructor(private router: Router) {
    const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    this.uid = user.uid;
    console.log("User Logged in as", user.email);
    
  } else {
    this.uid = undefined;
    console.log("User Logged out");
    // User is signed out

  }
});
   }

   isAuthenticated(){
    return this.uid ? true : false;
   }

   getUID(){
    return this.uid;
   }

    registerUser(email:string, password:string){
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      console.log(user)
      this.router.navigate(['/createbin']);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
      console.log(errorCode, errorMessage)
      
      alert("Something went wrong");
    });
    }

    loginUser(email:string, password:string){
  const auth = getAuth();
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user)
    this.router.navigate(['/createbin']);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log("Try Again, something went wrong")
    alert("Something went wrong, try again")
  });

    }

    logout(){
      const auth = getAuth();
      this.router.navigate(['/login']);
      signOut(auth).catch((error) => {
        alert("An error occurred while logging out");
      });
    }
  
  }