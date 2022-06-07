import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  mapOptions: google.maps.MapOptions = {

    center: { lat: 38.9987208, lng: -77.2538699 },
    zoom: 14,
    disableDefaultUI: true,
  };

}
