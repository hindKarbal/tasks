/* Used API version 2 to fetch and display weather information successfully.
  Upgraded to version 3 for additional features, but encountered challenges.
  Unable to implement version 3 successfully at the moment.
  you will find 2 folders with different methode*/

// Foursquare API Info
const clientId = '';
const clientSecret = '';
const url = 'https://api.foursquare.com/v2/venues/search?near=';


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
  // Step 8: Add a const called city
  const city = $input.val();

  // Step 9: Add try/catch statements
  try {
    // Step 11: Use fetch() to send a GET request
    const urlToFetch = `${url}&near=${city}&limit=10&client_id=${clientId}&client_secret=${clientSecret}&v=YYYYMMDD`;
    const response = await fetch(urlToFetch);

    // Step 12: Create a conditional statement
    if (response.ok) {
      // Step 13: Log the response to the console
      console.log(response);

      // Step 15: Convert the response object to a JSON object
      const jsonResponse = await response.json();

      // Step 16: Get an array of venue data
      const venues = jsonResponse.response.groups[0].items.map(item => item.venue);

      // Step 17: Log venues to the console
      console.log(venues);

      // Step 18: Return venues
      return venues;
    }
  } catch (error) {
    // Step 10: Log the error to the console
    console.error('Error fetching venues:', error);
    return [];
  }
};

  

// Add AJAX functions here:
const getForecast = async () => {
    // Step 20: Turn getForecast() into an asynchronous function
    try {
      // Step 21: Create a const called urlToFetch
      const city = $input.val();
      const urlToFetch = `${weatherUrl}?q=${city}&APPID=${openWeatherKey}`;
  
      // Step 22: Fetch the weather data
      const response = await fetch(urlToFetch);
  
      // Step 23: Check the response and await .json()
      if (response.ok) {
        const jsonResponse = await response.json();
  
        // Step 24: Log jsonResponse to the console
        console.log(jsonResponse);
        renderForecast(jsonResponse);
  
        // Step 25: Return jsonResponse
        return jsonResponse;
      }
    } catch (error) {
      // Step 20: Log the error to the console in the catch block
      console.error('Error fetching forecast:', error);
    return {};
    }
  };
  

// Render functions
const renderVenues = (venues) => {
  console.log('Venues:', venues);
  
  $venueDivs.forEach(($venue, index) => {
    // Step 27: Create a const venue
    const venue = venues[index];
    
    // Step 28: Create a venueIcon const
    const venueIcon = venue.categories[0].icon;

    // Step 29: Construct the full source URL for the venue icon
    const venueImgSrc = `${venueIcon.prefix}bg_64${venueIcon.suffix}`;

    // Step 30: Construct the HTML string to add the new venue
    const venueContent = createVenueHTML(venue.name, venue.location, venueImgSrc);

    // Step 31: Save the HTML string to the venueContent variable
    $venue.append(venueContent);
  });

  // Step 32: Hook up renderVenues() to the data fetched by getVenues()
  $destination.append(`<h2>${venues[0].location.city}</h2>`);
};


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
  getVenues().then(venues => renderVenues(venues));

  getForecast().then(forecast => renderForecast(forecast));
  return false;
}

$submit.click(executeSearch)

// Helper function to get the formatted date
const getFormattedDate = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');
  return `${year}${month}${day}`;
}