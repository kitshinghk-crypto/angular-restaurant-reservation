import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable , throwError} from 'rxjs';
import { Reservation } from '../Reservation';
import { CreateReservationResponse } from '../CreateReservationResponse';
import { catchError } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class ReservationServiceService {
  private apiUrl = 'http://localhost:8080/reservation/';
  constructor(private http: HttpClient) { }

  addReservation(r: Reservation): Observable<CreateReservationResponse> {
    let url = this.apiUrl+"create/";
    return this.http.post<CreateReservationResponse>(url, r, httpOptions).pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
      console.error(error);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }
}
