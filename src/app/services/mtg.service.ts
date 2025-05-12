import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MtgService {
  private API_URL = 'https://api.magicthegathering.io/v1';

  constructor(private http: HttpClient) {}

  searchCards(query: string, lang: string): Observable<any> {
    const params: any = { name: query };
    
    if (lang !== 'english') {
      params.language = lang;
    }

    return this.http.get<any>(`${this.API_URL}/cards`, { params }).pipe(
      map(response => {
        if (Array.isArray(response.cards)) {
          response.cards.sort((a: any, b: any) => a.name.localeCompare(b.name));
        }
        return response;
      })
    );
  }

}
