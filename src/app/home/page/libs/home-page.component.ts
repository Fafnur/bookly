import { ChangeDetectionStrategy, Component } from '@angular/core';

import { ContainerComponent } from '@bookly/ui/container';

@Component({
  selector: 'app-home-page',
  imports: [ContainerComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent {}
