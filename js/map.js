
// Initialize and add the map
function initMap() {
  // The location of Uluru
  const uluru = { lat: 36.8369894, lng: -76.3162932 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: uluru,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });
}
