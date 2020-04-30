function setNum(storage) {
    switch (storage) {
        case '0':
            return 0;
        case '27':
            return 27;
        case '54':
            return 54;
        case '81':
            return 81;
        case '108':
            return 108;
        case '135':
            return 135;
        case '162':
            return 162;
        case '189':
            return 189;
        default:
            return 216;
    }
}
function getData(firstArray, secondArray, index, property) {
    for (let i = 0; i < 27; i++) {
        firstArray[i] = secondArray[index].property;
        index++;
    }
}
async function test() {
    const infoArray = await fetch('https://api.covid19api.com/summary')
    .then(function(response) {
      return response.json();
    }).then(function (data) {
        return data.Countries;
    });

    let number = setNum(sessionStorage.getItem('entry'));

    let countryName = [];
    for (let i = 0; i < 27; i++) {
        countryName[i] =  infoArray[number].Country;
        number++;
    }

    function showData(token) {
        number = setNum(sessionStorage.getItem('entry'));
        switch (token) {
            case 'NewConfirmed':
                let newConfirmed = [];
                for (let i = 0; i < 27; i++) {
                    newConfirmed[i] =  infoArray[number].NewConfirmed;
                    number++;
                }
                return newConfirmed;

            case 'NewDeaths':
                let newDeaths = [];
                for (let i = 0; i < 27; i++) {
                    newDeaths[i] =  infoArray[number].NewDeaths;
                    number++;
                }
                return newDeaths;

            case 'NewRecovered':
                let newRecovered = [];
                for (let i = 0; i < 27; i++) {
                    newRecovered[i] =  infoArray[number].NewRecovered;
                    number++;
                }
                return newRecovered;

            case 'TotalConfirmed':
                let totalConfirmed = [];
                for (let i = 0; i < 27; i++) {
                    totalConfirmed[i] =  infoArray[number].TotalConfirmed;
                    number++;
                }
                return totalConfirmed;

            case 'TotalDeaths':
                let totalDeaths = [];
                for (let i = 0; i < 27; i++) {
                    totalDeaths[i] =  infoArray[number].TotalDeaths;
                    number++;
                }
                return totalDeaths;

            default:
                let totalRecovered = [];
                for (let i = 0; i < 27; i++) {
                    totalRecovered[i] =  infoArray[number].TotalRecovered;
                    number++;
                }
                return totalRecovered;
        }
    }

    var ctx = document.getElementById('myChart');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: countryName,
            datasets: [{
                label: sessionStorage.getItem('select'),
                data: showData(sessionStorage.getItem('select')),
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
             yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
}

test();