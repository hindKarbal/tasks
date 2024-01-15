/* Used API version 2 to fetch and display weather information successfully.
  Upgraded to version 3 for additional features, but encountered challenges.
  Unable to implement version 3 successfully at the moment.
  you will find 2 folders with different methode*/ 
const clientId = '';
const clientSecret = '';
const url = 'https://api.foursquare.com/v3/places/search?near=';
 // API key for authorization
 const apiKey = ''; //Foursquare API Key

// OpenWeather Info
const openWeatherKey = '';
const weatherUrl = 'https://api.openweathermap.org/data/2.5/weather';

// Page Elements
const $input = $('#city');
const $submit = $('#button');
const $destination = $('#destination');
const $container = $('.container');
const $venueDivs = [$("#venue1"), $("#venue2"), $("#venue3"), $("#venue4")];
const $weatherDiv = $("#weather1");
const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

// Add AJAX functions here:

const getVenues = async () => {
  const city = $input.val(); 

  // Construct the full URL for the Foursquare API request
  const urlToFetch = `${url}${encodeURIComponent(city)}&limit=10`;

  // Options for the fetch request
  const options = {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Authorization': apiKey
    }
  };

  try {
    const response = await fetch(urlToFetch, options);

    if (!response.ok) {
      throw new Error('Request failed!');
    }

    const jsonResponse = await response.json();
    console.log('JSON Response:', jsonResponse);

    // Extract venue data from the JSON response using the 'results' array
    const venues = jsonResponse.results.map(item => item);

    console.log(venues);

    return venues;
  } catch (error) {
    console.error('Error:', error);
  }
};

const getForecast = async () => {
  // Step 20
  try {
    // Step 21
    const city = $input.val();
    const urlToFetch = `${weatherUrl}?q=${city}&APPID=${openWeatherKey}`;

    // Step 22:  await the response of calling fetch()
    const response = await fetch(urlToFetch);

    // Step 23: 
    if (response.ok) {
      const jsonResponse = await response.json();

      // Step 24: Log jsonResponse to the console
      console.log(jsonResponse);
      renderForecast(jsonResponse);

      // Step 25: Return jsonResponse
      return jsonResponse;
    }
  } catch (error) {
    // Step 20
    console.error('Error fetching forecast:', error);
  return {};
  }
};


// Render functions
const renderVenues = (venues) => {
  $venueDivs.forEach(($venue, index) => {
    // Step 1: Create a const venue
    const venue = venues[index];
   
    // Step 2: Create a venueIcon const
    const venueIcon = venue.categories[0].icon;

    // Step 3: Construct the full source URL for the venue icon
    const venueImgSrc = `${venueIcon.prefix}bg_64${venueIcon.suffix}`;

    // Step 4 & 5: Use createVenueHTML and update venueContent
    let venueContent = createVenueHTML(venue.name, venue.location, venueImgSrc);

    // Append venueContent to the venue div
    $venue.append(venueContent);
  });
  // Add city name to $destination
  $destination.append(<h2>${venues[0].location.city}</h2>);
}

// Make sure createVenueHTML is defined in public/helpers.js or similar


const renderForecast = (day) => {
  // Add your code here:
  
	const weatherContent = createWeatherHTML(day);
  $weatherDiv.empty().append(weatherContent);
}

const executeSearch = () => {
  $venueDivs.forEach(venue => venue.empty());
  $weatherDiv.empty();
  $destination.empty();
  $container.css("visibility", "visible");

  getVenues()
    .then(venues => {
      renderVenues(venues);
      return getForecast();
    })
    .then(forecast => {
      renderForecast(forecast);
    })
    .catch(error => console.log(error));

  return false;
}

$submit.click(executeSearch)