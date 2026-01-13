document.getElementById("loadData").addEventListener("click", () => {
    fetch("https://randomuser.me/api")
      .then(response => response.json())
      .then(data => {
        const user = data.results[0];
  
        const picture = user.picture.large;
        const cell = user.cell;
        const city = user.location.city;
        const email = user.email;
        const coordinates = `Latitude: ${user.location.coordinates.latitude}, Longitude: ${user.location.coordinates.longitude}`;
  
        const output = `
          <img src="${picture}" alt="User picture"><br>
          <strong>Cell:</strong> ${cell}<br>
          <strong>City:</strong> ${city}<br>
          <strong>Email:</strong> ${email}<br>
          <strong>Coordinates:</strong> ${coordinates}
        `;
  
        document.getElementById("output").innerHTML = output;
      })
      .catch(error => {
        document.getElementById("output").innerHTML = "Помилка завантаження даних: " + error;
      });
  });
  