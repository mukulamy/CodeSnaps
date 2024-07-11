import { Injectable } from '@angular/core';
import { AuthSettings } from 'firebase/auth';
import { doc, getDoc, getDocs, getFirestore } from 'firebase/firestore';
import { collection, addDoc } from "firebase/firestore"; 
import { AuthService } from './auth.service';
import { Sinpett } from '../../models/snippet';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DbService {
  private db?:any
  constructor(private authService: AuthService, private router: Router) {
    this.db = getFirestore();
   }

  async createSnippet(snippet: Sinpett){


  try {
    const docRef = await addDoc(collection(this.db, "snippets"),{
      ...snippet,
      by: this.authService.getUID()
    });
    console.log("Document written with ID: ", docRef.id);
    this.router.navigate(['/']);
  } catch (e) {
    alert("Error while creating a snippet");
  }
    }

    async getAllSnippets(): Promise<any[]> {
      let result: any[] = [];
      try {
        const querySnapshot = await getDocs(collection(this.db, "snippets"));
        querySnapshot.forEach((doc) => {
          result.push({ id: doc.id, ...doc.data() });
        });
      } catch (e) {
        console.error("Error getting snippets: ", e);
      }
      return result;
    }

async getSnippetById(docId: string) {
  try {
      const docRef = await doc(this.db, "snippets", docId);
       const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      return docSnap.data();
    } else {
      console.log("No such document!");
      return {
        id: "1",
        title: "Not found",
        code: "Not found",
        by: "Not found"
      };
    }
  } catch (error) {
    console.error("Error getting document:", error);
    return {
      id: "1",
      title: "Not found",
      code: "Not found",
      by: "Not found"
    };
  }
}

}
