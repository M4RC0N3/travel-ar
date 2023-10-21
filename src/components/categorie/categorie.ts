import { Component, Input } from '@angular/core';


@Component({
  selector: 'categorie',
  templateUrl: 'categorie.html',
  styleUrls: ['categorie.sass'],
})
export class Categorie {
  @Input() type!: string;
  constructor() {}
}
