const onVisit = async () => {
    navigator.geolocation.getCurrentPosition(success, error);
}

function success(pos) {
    const crd = pos.coords;
  
    console.log("Your current position is:");
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`More or less ${crd.accuracy} meters.`);
  }

function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
    console.log(`We can't find your location!`);
}

onVisit();
