function autocomplete(input, latInput, lngInput) {
  // skip if no addr
  if (!input) return;
  const dropdown = new google.maps.places.Autocomplete(input);

  dropdown.addListener('place_changed', () => {
    const place = dropdown.getPlace();
    latInput.value = place.geometry.location.lat();
    lngInput.value = place.geometry.location.lng();
  });
  // enter on addr field, dont submit form (doesn't work lol)
  input.on('keydown', (e) => {
    if (e.keycode === 13) e.preventDefault();
  });
}


export default autocomplete;
