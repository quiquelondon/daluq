    const globe = Globe()
      (document.getElementById('globeViz'))
      .globeImageUrl('https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg')
      .backgroundImageUrl('https://unpkg.com/three-globe/example/img/night-sky.png')
      .pointOfView({ lat: 20, lng: 0, altitude: 2.2 })
      .onGlobeReady(() => {
        globe.controls().autoRotate = true;
        globe.controls().autoRotateSpeed = 0.5;
      });

    const locations = [
      {
        name: 'New York',
        lat: 40.7128,
        lng: -74.0060,
        url: 'New-York.html'
      },
      {
        name: 'Rome',
        lat: 41.9028,
        lng: 12.4964,
        url: 'Rome.html'
      },
      {
        name: 'Istanbul',
        lat: 41.0082,
        lng: 28.9784,
        url: 'Istanbul.html'
      },
      {
        name: 'Cape Verde',
        lat: 16.5388,
        lng: -23.0418,
        url: 'cape-verde.html'
      }
    ];

    globe
      .labelsData(locations)
      .labelLat(d => d.lat)
      .labelLng(d => d.lng)
      .labelText(d => d.name)
      .labelSize(1)
      .labelDotRadius(0.25)
      .labelColor(() => '#ffcc00')
      .onLabelClick(d => window.location.href = d.url);

    function flyTo(placeName) {
      const location = locations.find(loc => loc.name === placeName);
      if (location) {
        globe.pointOfView(
          { lat: location.lat, lng: location.lng, altitude: 0.8 },
          2000
        );
      }
    }
