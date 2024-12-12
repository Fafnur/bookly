import { coerceBooleanProperty, coerceNumberProperty } from '@angular/cdk/coercion';
import { NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, effect, input, model, output } from '@angular/core';

import type { Book } from '@bookly/books/common';

import { HomeBookComponent } from './home-book/home-book.component';

export type CoerceBoolean = boolean | string | undefined | null;

export type CoerceNumber = number | string | undefined | null;

@Component({
  selector: 'app-home-list',
  imports: [HomeBookComponent, NgTemplateOutlet],
  templateUrl: './home-list.component.html',
  styleUrl: './home-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.is-hide]': 'isHide()',
  },
})
export class HomeListComponent {
  readonly books = input.required<Book[]>();

  readonly isHide = input<CoerceBoolean, CoerceBoolean>(undefined, {
    transform: coerceBooleanProperty,
  });

  readonly counter = input<CoerceNumber, CoerceNumber>(undefined, {
    transform: coerceNumberProperty,
  });

  readonly value = model(0);

  readonly selected = output<Book>();

  constructor() {
    effect(() => {
      console.log(`HomeListComponent: ${this.value()}`);
    });
  }

  onUp() {
    this.value.update((oldValue) => oldValue + 10);
  }
}
