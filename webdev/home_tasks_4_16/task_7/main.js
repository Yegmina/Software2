'use strict';

// Initializing of the map, set view with karamalmi coordinates to see the destiny
const map = L.map('map').setView([60.223850, 24.758631], 20);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {}).addTo(map);

// creating layer group and adding to map, which setted before
const routeLayerGroup = L.layerGroup().addTo(map);

const apiAddress = 'https://api.digitransit.fi/routing/v1/routers/hsl/index/graphql';
const university_coordinates = { latitude: 60.223850, longitude: 24.758631 }; // Hardcoded for now

//Event listener adding function (anonymous)
document.getElementById('routeForm').addEventListener('submit', async (event) => {
    event.preventDefault();
    printDescription();
    const address = document.getElementById('address').value.trim();

    if (!address) {
        alert('Please enter a valid address.');
        return;
    }

    try {
        const userCoordinates = await getCoordinatesFromAddress(address);
        if (!userCoordinates) {
            alert('Unable to find the entered address. Please try again.');
            return;
        }
        await getRoute(userCoordinates, university_coordinates);
    } catch (er) {
        console.error('Error:', er.message);
        alert('Some error in getting coordinates or getting route (maybe in parameters) or just fetching problems.');
    }
});

// Getting coordinates for a given address || null
async function getCoordinatesFromAddress(address) {
    try {
        const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}`;
        const response = await fetch(url);
        const data = await response.json();

        if (data.length > 0) {
            return { latitude: parseFloat(data[0].lat), longitude: parseFloat(data[0].lon) };
        }
        return null;
    } catch (error) {
        console.error('Error fetching coordinates:', error.message);
        throw new Error('Failed to fetch coordinates.'); //throwing error above, it will start catch from part, where function called
    }
}

// function to get route from origin (input) to target (Karaportti2, given by coordinates)
async function getRoute(origin, target) {
    const GQLQuery = `{
        plan(
            from: {lat: ${origin.latitude}, lon: ${origin.longitude}}
            to: {lat: ${target.latitude}, lon: ${target.longitude}}
            numItineraries: 1
        ) {
            itineraries {
                legs {
                    startTime
                    endTime
                    mode
                    legGeometry {
                        points
                    }
                }
            }
        }
    }`;

    const fetchOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'digitransit-subscription-key': 'fdbc6a8bbeee4b0899c8a19f95cb0a43',
        },
        body: JSON.stringify({ query: GQLQuery }),
    };

    try {
        const response = await fetch(apiAddress, fetchOptions);
        const result = await response.json();

        console.log('API Response:', result); // debugging, to see the result of api call

        const legs = result.data.plan.itineraries[0].legs;
        const tripDetails = document.getElementById('tripDetails');
        tripDetails.innerHTML = `
            <p>Trip starts at: ${new Date(legs[0].startTime).toLocaleTimeString()}</p>
            <p>Trip ends at: ${new Date(legs[legs.length - 1].endTime).toLocaleTimeString()}</p>
        `; // a bit hardcoded with innerHTML, but probably is okay for this task

        // calling function to clear and draw
        drawRoute(legs, origin, target);
    } catch (e) {
        console.error('Error fetching route:', e.message);
        alert('Check the addresses and try again. Write, for example, "Espoo"');
    }
}

// drawing function (going way, according to color)
function drawRoute(legs, origin, target) {
    // clearing
    routeLayerGroup.clearLayers();

    //drawing each "leg" of the route (parts)
    legs.forEach((leg) => {
        const color = getModeColor(leg.mode);
        const route = leg.legGeometry.points;
        const points = L.Polyline.fromEncoded(route).getLatLngs();
        const polyline = L.polyline(points, { color });
        routeLayerGroup.addLayer(polyline); // adding layer, which was configured before
    });

    // changing view to see the route in good way
    map.fitBounds([[origin.latitude, origin.longitude], [target.latitude, target.longitude]]);
}

// To differentiate various transport types in map
function getModeColor(mode) {
    switch (mode) {
        case 'WALK':
            return 'green';
        case 'BUS':
            return 'red';
        case 'RAIL':
            return 'black';
        case 'TRAM':
            return 'white';
        default:
            return 'blue';
    }
}

function printDescription(){
    const objTarget=document.getElementById("description");
    objTarget.innerHTML=" " // to clear description
    const objDiv=document.createElement("div");
    objDiv.innerHTML="By the color of the route on the map, you can understand what type of transport is used, for example:<br>\n" +
        "Green - on foot<br>\n" +
        "Red - bus<br>\n" +
        "Train - black<br>"
    objTarget.appendChild(objDiv);

}
