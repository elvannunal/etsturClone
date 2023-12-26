
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class HolidayThemesService {

  constructor(private http: HttpClient) { }

  private readonly apiUrl = '/assets/holidayThemes.json';

  getHolidayThemes(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

}
