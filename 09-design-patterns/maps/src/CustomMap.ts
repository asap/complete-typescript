export interface Mappable {
  location: {
    lat: number;
    lng: number;
  },
  markerContent(): string;
  color: string;
}

export class CustomMap {
  private googleMap; google.maps.Map;

  constructor(divId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(divId), {
      center: { lat: 0, lng: 0 },
      zoom: 1
    });
  }

  addMarker (mappable: Mappable): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng,
      }
    });

    marker.addListener('click', () => {
      const infoWindow = new this.google.maps.infoWindow({
        content: mappable.markerContent()
      });
      infoWindow.open(this.googleMap, marker);
    });
  }
}
