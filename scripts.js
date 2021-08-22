var submitBtn = document.getElementById('btnSearch')

submitBtn.addEventListener('click', function(e) {
    e.preventDefault()

    var country = document.getElementById('countries').value
    var url = `https://corona.lmao.ninja/v2/countries/${country}?yesterday=true&strict=true&query/kenya`;



    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
                // let output = "";
                // data.forEach(country => {
                //     output += `<option>${country.country}</option>`;
                // })
                // selectedCountry.innerHTML = output


            var tests1 = document.getElementById('tests')
            var positiveCases = document.getElementById('positiveCases')
            var hospitalized = document.getElementById('hospitalized')
            var recovered = document.getElementById('recovered')
            var deaths = document.getElementById('deaths')
            var vaccinated = document.getElementById('vaccinated')


            tests1.innerHTML = data.tests
            positiveCases.innerHTML = data.cases
            hospitalized.innerHTML = data.critical
            recovered.innerHTML = data.recovered
            deaths.innerHTML = data.deaths
            vaccinated.innerHTML = data.testsPerOneMillion


        })
        .catch((error) => {
            console.log(error)
        })


    var urlCountries = "https://corona.lmao.ninja/v2/continents?yesterday=true&sort"
    var selectedCountry = document.querySelector('#countries')

    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            let output = "";
            data.forEach(country => {
                output += `<option>${country.country}<img src=${country.countryInfo.flag}/></option>`;

            })
            selectedCountry.innerHTML = output

        })
})