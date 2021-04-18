import {AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements AfterViewInit {
  @Input() latitude = 42.8914;
  @Input() longitude = 20.8660;

  @ViewChild('map') mapElement: ElementRef;
  map: google.maps.Map;

  constructor() { }

  ngAfterViewInit(): void {
    const myLatLng = { lat: this.latitude, lng: this.longitude };

    const map = new google.maps.Map(
      this.mapElement.nativeElement as HTMLElement,
      {
        zoom: 15,
        center: myLatLng,
      }
    );

    const marker = new google.maps.Marker({
      position: myLatLng,
      map,
    });
  }

}
