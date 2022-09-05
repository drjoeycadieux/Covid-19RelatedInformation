fetch('https://api.covid19tracker.ca/summary')
    .then((response) => response.json())
    .then((data) => console.log(data));

