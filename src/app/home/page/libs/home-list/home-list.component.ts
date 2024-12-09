import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-home-list',
  imports: [],
  templateUrl: './home-list.component.html',
  styleUrl: './home-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeListComponent {
  readonly books: string[] = ['Book 1', 'Book 2', 'Book 3', 'Book 4', 'Book 5', 'Book 6'];
}
