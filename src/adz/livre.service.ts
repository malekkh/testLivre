import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LivreService {

  apiURL='https://www.googleapis.com/books/v1/volumes?q='

  constructor(private http: HttpClient) { }


   // Http Options
   httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }  

  SearchBooks(s){
    return this.http.get(this.apiURL +s,this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  SearchBooksById(id){
    return this.http.get(this.apiURL +id,this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )

  }

handleError(error) {
  let errorMessage = '';
  if(error.error instanceof ErrorEvent) {
    // Get client-side error
    errorMessage = error.error.message;
  } else {
    // Get server-side error
    errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
  }
  window.alert(errorMessage);
  return throwError(errorMessage);
}

}

