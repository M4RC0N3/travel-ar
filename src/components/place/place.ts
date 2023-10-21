import { Component, Input } from '@angular/core';


@Component({
  selector: 'place',
  templateUrl: 'place.html',
  styleUrls: ['place.sass'],
})
export class Place {
  @Input() data!: Object;
  constructor() {}
}
