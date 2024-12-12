import { ChangeDetectionStrategy, Component, effect, signal } from '@angular/core';

import type { Book } from '@bookly/books/common';
import { ContainerComponent } from '@bookly/ui/container';

import { HomeListComponent } from './home-list/home-list.component';
import { HomePromoComponent } from './home-promo/home-promo.component';

@Component({
  selector: 'app-home-page',
  imports: [ContainerComponent, HomeListComponent, HomePromoComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent {
  books: Book[] = [
    {
      title: 'Цель. Процесс непрерывного совершенствования',
      uuid: 'uuid-1',
      description:
        'Алекс Рого занимает должность руководителя завода и пытается вывести предприятие из кризиса. Но сталкивается с рядом фатальных проблем, которые всего через три месяца могут привести к закрытию завода.',
      authors: ['Элияху Голдратт', 'Джефф Кокс'],
    },
    {
      title: 'Нескучные финансы. Как управлять бизнесом на основе цифр и не сойти с ума',
      uuid: 'uuid-2',
      description:
        'Сотни бизнесов открываются каждый год, но 97 % из них закрываются на третий год жизни. Почему? Мы не знаем. Но умные люди считают, что одна из причин – это неумение обращаться с финансами.',
      authors: ['Сергей Краснов', 'Андрей Бодрейший'],
    },
    {
      title: 'Пять пороков команды',
      uuid: 'uuid-3',
      description:
        'В технологическую компанию, оказавшуюся на грани упадка, приходит новый руководитель и начинает налаживать работу команды менеджеров, а вернее, создавать ее заново. Вслед за героями читатель узнает о пяти пороках, которые могут уничтожить любой коллектив, а также о том, каким образом можно их нейтрализовать и превратить свою прежде рассогласованную команду в отряд победителей.',
      authors: ['Патрик Ленсиони'],
    },
    {
      title: 'Кто. Решите вашу проблему номер один',
      uuid: 'uuid-4',
      description:
        'Авторы книги, эксперты в области найма Джефф Смарт и Рэнди Стрит, предлагают простое и эффективное решение главной проблемы – выбора неправильных сотрудников. Вы узнаете, где найти правильных людей и как привлечь их на работу, как расценивать ответы кандидатов и чего ни в коем случае нельзя делать на собеседовании. ',
      authors: ['Джефф Смарт', 'Рэнди Стрит'],
    },
  ];

  selectedBook?: Book;
  isHide = false;

  volume = signal(0);

  constructor() {
    effect(() => {
      console.log(`HomePageComponent: ${this.volume()}`);
    });
  }

  onSelected(book: Book) {
    this.selectedBook = book;
  }

  onReset() {
    this.selectedBook = undefined;
  }

  onHide() {
    this.isHide = true;
  }

  onShow() {
    this.isHide = false;
  }

  onChangeBooks() {
    this.books = [
      ...this.books,
      {
        title: `Кто. Решите вашу проблему номер ${this.books.length - 3}`,
        uuid: `uuid-${this.books.length + 1}`,
        description:
          'Авторы книги, эксперты в области найма Джефф Смарт и Рэнди Стрит, предлагают простое и эффективное решение главной проблемы – выбора неправильных сотрудников. Вы узнаете, где найти правильных людей и как привлечь их на работу, как расценивать ответы кандидатов и чего ни в коем случае нельзя делать на собеседовании. ',
        authors: ['Джефф Смарт', 'Рэнди Стрит'],
      },
    ];
  }
}
