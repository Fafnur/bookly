import { ChangeDetectionStrategy, Component } from '@angular/core';

import { ContainerComponent } from '@bookly/ui/container';

@Component({
  selector: 'app-header',
  imports: [ContainerComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {}
