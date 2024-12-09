import { ChangeDetectionStrategy, Component } from '@angular/core';

import { ContainerComponent } from '@bookly/ui/container';

import { HomeListComponent } from './home-list/home-list.component';

@Component({
  selector: 'app-home-page',
  imports: [ContainerComponent, HomeListComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent {}
