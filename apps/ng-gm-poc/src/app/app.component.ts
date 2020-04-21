import { Component, ViewChild } from '@angular/core';
import { GoogleMap } from '@angular/google-maps';

@Component({
  selector: 'google-maps-and-angular-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-gm-poc';
  @ViewChild(GoogleMap, { static: false }) map: GoogleMap;
  zoom = 12;
  options: google.maps.MapOptions = {
    zoomControl: false,
    scrollwheel: false,
    disableDoubleClickZoom: true,
    mapTypeControl: false,
    fullscreenControl: false,
    maxZoom: 15,
    minZoom: 8
  };
}
