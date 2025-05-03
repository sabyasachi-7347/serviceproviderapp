import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private firestore: AngularFirestore) { }

  getTasks(): Observable<any[]> {
    return this.firestore.collection('tasks').valueChanges({ idField: 'id' });
  }

  addTask(task: any) {
    return this.firestore.collection('tasks').add(task);
  }
}
