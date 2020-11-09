# Weather-Dashboard

<h1><strong>Functionality</strong></h1>

This weather app allows you to enter any US City to return the current weather and a five day forecast for that city. <br><br>



The current weather will show you the following: 
<ul>
  <li>City Name and Date</li>
  <li>Weather Icon</li>
  <li>Temperature</li>
  <li>Humidity</li>
  <li>Wind Speed</li>
  <li>UV Index (which will color code itself to show whether the conditions are favorable, moderatre, or severe)</li>
</ul>

<br><br>

The Five Day Forecast will display: 
<ul>
  <li>Date</li>
  <li>Weather Icon</li>
  <li>Temperature</li>
  <li>Humidity</li>
</ul>

![1](https://user-images.githubusercontent.com/68487859/98502455-49074880-220f-11eb-8d44-4c8b3223f717.png)

<h1><strong>Challenges</strong></h1>

The main challenge I had building this app was getting the local storage to persist. I kept having issues with the .push function because I was trying to push from a variable. I sort of rigged the code to run 2 separate functions and to store input into a local array within one of the functions which I concat and push to the main array. This does pose some issues with recall until you refresh the page. 

<h1><strong>Link to Deployed Site</strong></h1>

<a href="https://lhafoka13.github.io/Weather-Dashboard/">Weather-Dashboard</a>


