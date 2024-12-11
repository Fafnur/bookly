import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';

import type { Book } from '@bookly/books/common';

@Component({
  selector: 'app-home-book',
  imports: [],
  templateUrl: './home-book.component.html',
  styleUrl: './home-book.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'home-book',
  },
})
export class HomeBookComponent {
  readonly book = input.required<Book>();

  readonly selected = output<Book>();

  onSelected() {
    this.selected.emit(this.book());
  }
}
