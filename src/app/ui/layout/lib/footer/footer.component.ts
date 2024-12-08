import { ChangeDetectionStrategy, Component } from '@angular/core';

import { ContainerComponent } from '@bookly/ui/container';

@Component({
  selector: 'app-footer',
  imports: [ContainerComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {}
