// Function to determine marker size based on population
function markerSize(population) {
    return population / 40;
}

// An array containing all of the information needed to create city and state markers
var locations = [{
        coordinates: [40.7128, -74.0059],
        state: {
            name: "New York",
            population: 19453561
        },
        city: {
            name: "New York",
            population: 8336817
        }
    },
    {
        coordinates: [34.0522, -118.2437],
        state: {
            name: "California",
            population: 39512223
        },
        city: {
            name: "Los Angeles",
            population: 3979576
        }
    },
    {
        coordinates: [41.8781, -87.6298],
        state: {
            name: "Illinois",
            population: 12671821
        },
        city: {
            name: "Chicago",
            population: 2693976
        }
    },
    {
        coordinates: [29.7604, -95.3698],
        state: {
            name: "Texas",
            population: 29900000
        },
        city: {
            name: "Houston",
            population: 6371000
        }
    },
    {
        coordinates: [41.2524, -95.9980],
        state: {
            name: "Nebraska",
            population: 1934408
        },
        city: {
            name: "Omaha",
            population: 478192
        }
    },
    {
        coordinates: [30.16, -97.44],
        state: {
            name: "Texas",
            population: 29
        },
        city: {
            name: "Austin",
            population: 1003615
        }
    },
    {
        coordinates: [33.57, -112.09],
        state: {
            name: "Arizona",
            population: 7278717
        },
        city: {
            name: "Phoenix",
            population: 1680992
        }
    },
    {
        coordinates: [32.81, -117.13],
        state: {
            name: "California",
            population: 39
        },
        city: {
            name: "San Diego",
            population: 1423851
        }
    },
    {
        coordinates: [30.33, -81.66],
        state: {
            name: "Florida",
            population: 21477737
        },
        city: {
            name: "Jacksonville",
            population: 911507
        }
    },
    {
        coordinates: [47.62, -122.35],
        state: {
            name: "Washington",
            population: 7614893
        },
        city: {
            name: "Seattle",
            population: 753675
        }
    },
    {
        coordinates: [38.90, -77.01],
        state: {
            name: "Disctrict of Columbia",
            population: 705749
        },
        city: {
            name: "Washington DC",
            population: 705749
        }
    },
    {
        coordinates: [45.53, -122.65],
        state: {
            name: "Oregon",
            population: 4217737
        },
        city: {
            name: "Portland",
            population: 654741
        }
    },
    {
        coordinates: [39.76, -104.88],
        state: {
            name: "Colorado",
            population: 5758736
        },
        city: {
            name: "Denver",
            population: 727211
        }
    },
    {
        coordinates: [23.08, -82.21],
        state: {
            name: "Cuba",
            population: 11193470
        },
        city: {
            name: "Havana",
            population: 2131480
        }
    },
    {
        coordinates: [43.44, -79.22],
        state: {
            name: "Canada",
            population: 38
        },
        city: {
            name: "Toronto",
            population: 4607142
        }
    },
    {
        coordinates: [19.26, -99.08],
        state: {
            name: "Mexico",
            population: 12
        },
        city: {
            name: "Mexico City",
            population: 8918653
        }
    }
];

// Define arrays to hold created city and state markers
var cityMarkers = [];
var stateMarkers = [];

// Loop through locations and create city and state markers
for (var i = 0; i < locations.length; i++) {
    // Set the marker radius for the state by passing population into the markerSize function
    stateMarkers.push(
        L.circle(locations[i].coordinates, {
            stroke: false,
            fillOpacity: 0.2,
            color: "gray",
            fillColor: "#FFCCCC",
            radius: markerSize(locations[i].state.population)
        })
    );

    // Set the marker radius for the city by passing population into the markerSize function
    cityMarkers.push(
        L.circle(locations[i].coordinates, {
            stroke: false,
            fillOpacity: 0.3,
            color: "red",
            fillColor: "#0000ff",
            radius: markerSize(locations[i].city.population)
        })
    );
};

// Define variables for our base layers
var streetmap = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/navigation-preview-day-v4',
    accessToken: API_KEY
});

var darkmap = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/dark-v10',
    accessToken: API_KEY
});

var nightmap = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/navigation-preview-night-v4',
    accessToken: API_KEY
});

var satellitemap = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/satellite-v9',
    accessToken: API_KEY
});

// Create two separate layer groups below. One for city markers, and one for states markers
var cityLayer = L.layerGroup(cityMarkers);
var stateLayer = L.layerGroup(stateMarkers);

// Create a baseMaps object to contain the streetmap and darkmap
var baseMaps = {
    "Dark Map": darkmap,
    "Street Map": streetmap,
    "Night Map": nightmap,
    "Satellite": satellitemap
};

// Create an overlayMaps object here to contain the "State Population" and "City Population" layers
var overlayMaps = {
    "City Population": cityLayer,
    "State Population": stateLayer
};

// Define the map object so to have the streetmap, states, and cities layers
var myMap = L.map("map", {
    center: [39.50, -98.35],
    zoom: 4,
    layers: [nightmap, stateLayer, cityLayer]
});

locations.forEach(city => L.circle(city.coordinates)
    .bindPopup(`<h3>${city.city.name}</h3> <h4>population: ${city.city.population}</h4>`)
    .addTo(myMap));

L.control.layers(baseMaps, overlayMaps, {
    collapsed: false
}).addTo(myMap);