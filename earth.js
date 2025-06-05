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
        url: 'New-York'
      },
      {
        name: 'Rome',
        lat: 41.9028,
        lng: 12.4964,
        url: 'Rome'
      },
      {
        name: 'Istanbul',
        lat: 41.0082,
        lng: 28.9784,
        url: 'Istanbul'
      },
      {
        name: 'Cape Verde',
        lat: 16.5388,
        lng: -23.0418,
        url: 'cape-verde'
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
      .onLabelClick(d => transitionToPage(d.url));

 
function goToCity(cityName) {
    // This is the correct place to remove the sidebar's active class,
    // as it initiates the navigation/transition sequence.
    // Use the ID selector for better performance and specificity if you have one.
    const sidebar = document.getElementById('sidebar'); // Assuming your sidebar has the ID 'sidebar'
    if (sidebar) { // Always good to check if the element exists
        sidebar.classList.remove('active');
    }
    // If you prefer the class selector and are sure it's unique:
    // document.querySelector(".sidebar").classList.remove('active');


    const city = locations.find(loc => loc.name === cityName);
    if (!city) return;

    document.getElementById('banner-content').classList.add('fade-out');

    // Fly to location
    globe.pointOfView({ lat: city.lat, lng: city.lng, altitude: 0.4 }, 3000);

    setTimeout(() => {
        document.getElementById('globeViz').classList.add('fade-out');
        globe.controls().autoRotate = false;

    }, 3000);

    setTimeout(() => {
        // Only redirect if not already on the city's page
        if (!window.location.pathname.includes(city.url)) {
            window.location.href = city.url;
        }
    }, 3000); // This is where the page actually changes
}
// --- Code that runs immediately on index.html load ---
    document.addEventListener('DOMContentLoaded', () => {
      const urlParams = new URLSearchParams(window.location.search);
      const cityParam = urlParams.get('city');
      const banner = document.getElementById('banner-content');

      if (cityParam) {
        // Do NOT show the banner
        // setTimeout(() => {
          goToCity(cityParam);
        // }, 100);
      } else {
        // User is just visiting index normally — fade banner in
        if (banner) {
          banner.classList.remove('preload-hidden');
          banner.classList.add('fade-in');
        }
      }
    });


