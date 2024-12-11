import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';

import type { Book } from '@bookly/books/common';

import { HomeBookComponent } from './home-book/home-book.component';

@Component({
  selector: 'app-home-list',
  imports: [HomeBookComponent],
  templateUrl: './home-list.component.html',
  styleUrl: './home-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeListComponent {
  readonly books = input.required<Book[]>();

  readonly selected = output<Book>();
}
