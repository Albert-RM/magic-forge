import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScryfallService {
  private API_URL = 'https://api.scryfall.com';

  constructor(private http: HttpClient) {}

  // Método para buscar cartas
  searchCards(query: string): Observable<any> {
    return this.http.get(`${this.API_URL}/cards/search`, {
      params: {
        q: query,
        unique: 'cards', // Para no repetir cartas si tienen diferentes ediciones
        order: 'name'     // Ordenar por nombre
      }
    });
  }

  // Método para buscar cartas
  namedCards(query: string): Observable<any> {
    return this.http.get(`${this.API_URL}/cards/named`, {
      params: {
        fuzzy: query     // La consulta de búsqueda (puede ser 'name:cardName' o 'set:expansion')
      }
    });
  }
}
