import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScryfallService } from '../../services/scryfall.service';
import { MtgService } from '../../services/mtg.service';
import { FormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { NgIf, NgFor } from '@angular/common';
import { MatInputModule } from '@angular/material/input'; // Asegúrate de importar MatInputModule
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-card-list',
  standalone: true,
  imports: [NgIf,
    NgFor,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatIconModule, 
    MatInputModule,
    MatButtonModule,
    FormsModule],
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.sass']
})
export class CardListComponent implements OnInit {
  cards: any[] = [];
  searchQuery: string = '';
  languageQuery: string = '';

  constructor(private scryfallService: ScryfallService, private mtgService: MtgService) {}

  ngOnInit(): void {
    this.selectedLanguage = this.languages.find(lang => lang.code === 'english')!;
  }

  languages = [
    { code: 'english', name: 'Inglés', flag: 'gb.svg' },
    { code: 'spanish', name: 'Español', flag: 'es.svg' },
    { code: 'french', name: 'Francés', flag: 'fr.svg' },
    { code: 'german', name: 'Alemán', flag: 'de.svg' },
    { code: 'italian', name: 'Italiano', flag: 'it.svg' }
  ];

  selectedLanguage: { code: string; flag: string; name: string } = {
    code: 'english',
    name: 'Inglés',
    flag: 'gb.svg'
  };

  searchCards(): void {
    if (this.searchQuery.trim()) {
      // MTG
      this.mtgService.searchCards(this.searchQuery, this.selectedLanguage.code).subscribe(response => {
        this.cards = response.cards;
        console.log("Cartas:", this.cards);
      });
      
      // Scryfall
      // this.scryfallService.searchCards(this.searchQuery).subscribe(data => {
      //   this.cards = data.data;
      //   console.log("Cartas:", this.cards);
      // });
    }
  }
}