import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentChangeAction } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(
    private _afs: AngularFirestore
  ) { }

  getCollection<T>(ref: string, sortByField?: string, sortDirection: 'asc' | 'desc' = 'asc'): Observable<T[]> {
    const collectionRef = !!sortByField
      ? this._afs.collection<T>(ref, ref => ref.orderBy(sortByField, sortDirection))
      : this._afs.collection<T>(ref);
    return collectionRef
      .snapshotChanges()
      .pipe(
        map(this.mapKeysToCollectionObjects)
      );
  }

  getDocumentsByProperty<T>(path: string, property: string, value: any): Observable<T[]> {
    return this._afs.collection<T>(path, ref => ref.where(property, '==', value))
      .snapshotChanges()
      .pipe(
        map(this.mapKeysToCollectionObjects)
      );
  }

  getDocument<T>(ref: string): Observable<T> {
    return this._afs.doc<T>(ref)
      .snapshotChanges()
      .pipe(
        map((snapshot) => {
          return snapshot.payload.exists
            ? {
              ...snapshot.payload.data() as T,
              id: snapshot.payload.id
            }
            : null;
        })
      );
  }

  addDocument<T>(ref: string, value: any): any{
    return this._afs.collection(ref).add(value);
  }

  private mapKeysToCollectionObjects<T>(actions: DocumentChangeAction<T>[]): T[] {
    return actions.map((action: DocumentChangeAction<T>) => {
      const data = action.payload.doc.data() as T;
      const id = action.payload.doc.id;
      return { ...data, id };
    });
  }
}
