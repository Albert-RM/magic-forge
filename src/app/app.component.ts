import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CardListComponent } from './components/card-list/card-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CardListComponent, HttpClientModule],
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'magic-forge';
}
