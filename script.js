fetch("https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json")
  .then(response => response.json())
  .then(data => {
    const labels = data.data.map(item => item[0].substring(0, 4));
    const values = data.data.map(item => item[1]);

    const ctx = document.getElementById("bar-chart");
    const myChart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: labels,
        datasets: [{
          type: "bar",
          data: values,
          label:"$ Billions",
          backgroundColor: '#4B88EB',
        }]
      },
      options: {
        plugins: {
          legend: {
            display: true,
          }
        }
      }
    });
  })
  .catch(error => console.error("Error", error));
