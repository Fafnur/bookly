import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';

import type { Book } from '@bookly/books/common';

@Component({
  selector: 'app-home-list',
  imports: [],
  templateUrl: './home-list.component.html',
  styleUrl: './home-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeListComponent {
  readonly books = input.required<Book[]>();

  readonly selected = output<Book>();

  onSelected(book: Book) {
    this.selected.emit(book);
  }
}
