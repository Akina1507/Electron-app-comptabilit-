  //dépenses

  const ctx = document.getElementById("myChart");

  new Chart(ctx, {
    type: "line",
    data: {
      labels: [
        "01/05/2024",
        "02/05/2024",
        "03/05/2024",
        "04/05/2024",
        "05/05/2024",
        "06/05/2024",
        "07/05/2024",
        "08/05/2024",
        "09/05/2024",
        "10/05/2024",
        "11/05/2024",
        "12/05/2024",
        "13/05/2024",
        "14/05/2024",
        "15/05/2024",
        "16/05/2024",
        "17/05/2024",
        "18/05/2024",
        "19/05/2024",
        "20/05/2024",
        "21/05/2024",
        "22/05/2024",
        "23/05/2024",
        "24/05/2024",
        "25/05/2024",
        "26/05/2024",
        "27/05/2024",
        "28/05/2024",
        "29/05/2024",
        "30/05/2024",
        "31/05/2024",
      ],
      datasets: [
        {
          label: "Logement",
          tension: 0.4,
          data: [
            0, 0, 0, 0, 0, 21, 0, 0, 0, 0, 0, 0, 46, 0, 0, 0, 0, 13, 24, 15, 24,
            18, 64, 3, 144, 35, 9, 15, 8, 12, 19,
          ],
          borderWidth: 1,
          borderColor: "green", // Couleur de la deuxième ligne
          backgroundColor: "rgba(0, 255, 0, 0.1)", // Couleur de remplissage de la deuxième ligne (facultatif)
        },
        {
          label: "Supermarché",
          tension: 0.4,
          data: [
            17, 25, 38, 52, 9, 11, 20, 3, 73, 61, 14, 42, 56, 13, 4, 7, 14, 9,
            17, 10, 17, 12, 44, 1, 96, 23, 7, 12, 6, 9, 13,
          ],
          borderWidth: 1,
          borderColor: "blue", // Couleur de la première ligne
          backgroundColor: "rgba(0, 0, 255, 0.1)", // Couleur de remplissage de la première ligne (facultatif)
        },
        {
          label: "Restaurants",
          tension: 0.4,
          data: [
            34, 51, 81, 112, 20, 28, 50, 7, 146, 121, 26, 78, 104, 25, 8, 14,
            26, 17, 33, 20, 33, 24, 88, 4, 192, 47, 12, 20, 10, 15, 25,
          ],
          borderWidth: 1,
          borderColor: "red", // Couleur de la deuxième ligne
          backgroundColor: "rgba(255, 0, 0, 0.1)", // Couleur de remplissage de la deuxième ligne (facultatif)
        },
        {
          label: "Animaux",
          tension: 0.4,
          data: [
            20, 1, 35, 65, 3, 4, 7, 1, 85, 69, 12, 54, 70, 15, 2, 4, 8, 3, 6, 4,
            8, 6, 22, 0, 80, 19, 3, 5, 2, 3, 6,
          ],
          borderWidth: 1,
          borderColor: "purple", // Couleur de la deuxième ligne
          backgroundColor: "rgba(50, 0, 100, 0.1)", // Couleur de remplissage de la deuxième ligne (facultatif)
        },
        {
          label: "Carburant",
          tension: 0.4,
          data: [
            42.99, 9, 73, 105, 33, 44, 77, 9, 115, 93, 24, 78, 105, 30, 11, 44,
            88, 33, 66, 44, 88, 66, 110, 9, 160, 39, 33, 55, 11, 33, 66,
          ],
          borderWidth: 1,
          borderColor: "orange", // Couleur de la deuxième ligne
          backgroundColor: "rgba(180, 0, 0, 0.1)", // Couleur de remplissage de la deuxième ligne (facultatif)
        },
        {
          label: "Divers",
          tension: 0.4,
          data: [
            30, 7, 42, 80, 5, 6, 9, 7, 105, 83, 18, 63, 84, 18, 3, 6, 12, 5, 9,
            6, 12, 9, 33, 2, 120, 29, 5, 8, 3, 5, 9,
          ],
          borderWidth: 1,
          borderColor: "black", // Couleur de la deuxième ligne
          backgroundColor: "rgba(0, 0, 0, 0.1)", // Couleur de remplissage de la deuxième ligne (facultatif)
        },
        {
          label: "Frais bancaire",
          tension: 0.4,
          data: [
            6, 39, 81, 57, 14, 33, 72, 48, 17, 95, 60, 25, 8, 43, 26, 77, 12,
            51, 30, 69,
          ],
          borderWidth: 1,
          borderColor: "skyblue", // Couleur de la deuxième ligne
          backgroundColor: "rgba(0, 0, 255, 0.1)", // Couleur de remplissage de la deuxième ligne (facultatif)
        },
      ],
    },
    options: {
      scales: {
        y: {
          display: false,
          beginAtZero: true,
        },
      },
      plugins: {
        legend: {
          display: true,
        },
      },
    },
  });

  //entrées
  const ctxentre = document.getElementById("myChartest");

  new Chart(ctxentre, {
    type: "bar",
    data: {
      labels: [
        "01/2024",
        "02/2024",
        "03/2024",
        "04/2024",
        "05/2024",
        "06/2024",
        "07/2024",
        "08/2024",
        "09/2024",
        "10/2024",
        "11/2024",
        "12/2024",
      ],
      datasets: [
        {
          data: [
            1100, 1400, 1367, 900, 1284, 1000, 685, 978, 1150, 1328, 1500, 1378,
          ],
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
      plugins: {
        legend: {
          display: false,
        },
      },
    },
  });

  //Tbd total mois
  const ctxtotalm = document.getElementById("myChart2");

  new Chart(ctxtotalm, {
    type: "bar",
    data: {
      labels: [
        "Janvier",
        "Février",
        "Mars",
        "Avril",
        "Mai",
        "Juin",
        "Juillet",
        "Aout",
        "Septembre",
        "Octobre",
        "Novembre",
        "Decembre",
      ],
      datasets: [
        {
          data: [650, 890, 456, 785, 932, 478, 634, 1250, 863, 1365, 480, 972],
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
      plugins: {
        legend: {
          display: false,
        },
      },
    },
  });



  //Tbd total mois
  const ctxdepuser = document.getElementById("myChart3");

  new Chart(ctxdepuser, {
    type: "doughnut",
    data: {
      labels: ["Bastien", "Marie-Sarah"],
      datasets: [
        {
          data: [623, 956],
          backgroundColor: ["rgb(255, 100, 0)", "rgb(25, 100, 200)"],
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          display: false,
          beginAtZero: true,
        },
      },
    },
  });

