import { Component, Input } from '@angular/core';


@Component({
  selector: 'trip',
  templateUrl: 'trip.html',
  styleUrls: ['trip.sass'],
})
export class Trip {
  @Input() data!: Object;
  constructor() {}
}
