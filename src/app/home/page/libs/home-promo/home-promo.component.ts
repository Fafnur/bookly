import { ChangeDetectionStrategy, Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-home-promo',
  imports: [],
  templateUrl: './home-promo.component.html',
  styleUrl: './home-promo.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePromoComponent {
  readonly counter = signal<number>(0);

  readonly pw2 = computed(() => this.counter() * this.counter());

  constructor() {
    effect(() => {
      console.log(`The current count is: ${this.counter()}`);
    });
  }

  onUp(): void {
    this.counter.set(this.counter() + 1);
  }

  onDown(): void {
    this.counter.set(this.counter() - 1);
  }
}
