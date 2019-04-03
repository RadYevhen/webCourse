var tableBody = $("#table").find(`tbody`);

$.get("https://services.odata.org/V4/(S(lferhkqh0pbtatcztvorwgl2))/TripPinServiceRW/Airports('YSSY')?Name=Sydney Airport",
    function (oResult) {
        tableBody.append($(`<tr>`).append($(`<td>`)
            .text(`Airports(\'YSSY\')?Name=Sydney Airport`)))

        tableBody.append($(`<tr><td>${oResult.Location.Address}</td><td>${oResult.Location.City.CountryRegion}</td></tr>`))
        tableBody.append($(`<tr><td><br/></td><td><br/></td></tr>`))
    });

$.get("https://services.odata.org/V4/(S(lferhkqh0pbtatcztvorwgl2))/TripPinServiceRW/Airlines?$select=Name",
    function (oResult) {
        tableBody.append($(`<tr>`).append($(`<td>`)
                 .text(`Airlines?$select=Name`)))

        oResult.value.forEach(element => {
            tableBody.append($(`<tr><td>${element.Name}</td><td></td></tr>`));
            
        });
        tableBody.append($(`<tr><td><br/></td><td><br/></td></tr>`))
    }
);

$.get("https://services.odata.org/V4/(S(lferhkqh0pbtatcztvorwgl2))/TripPinServiceRW/Airports/$count",
    function (oResult) {
        tableBody.append($(`<tr><td>Airports/$count</td>`));
        tableBody.append($(`<tr><td>${oResult}</td><td></td><</tr>`));
        tableBody.append($(`<tr><td><br/></td><td><br/></td></tr>`))
    }
);

$.get("https://services.odata.org/V4/(S(srg3pj2qhftjrzv0oh4gpzva))/TripPinServiceRW/People('ronaldmundy')?$expand=Trips",
    function (oResult) {
        tableBody.append($(`<tr><td>$expand</td>`));
        oResult.Trips.forEach(element => {
            tableBody.append($(`<tr><td>${element.Description}</td><td></td><</tr>`));
        });
        tableBody.append($(`<tr><td><br/></td><td><br/></td></tr>`))
    }
);

$.get("https://services.odata.org/V4/(S(lferhkqh0pbtatcztvorwgl2))/TripPinServiceRW/Airports?$orderby=Name",
    function (oResult) {
        tableBody.append($(`<tr><td>$orderby=Name</td>`));
        oResult.value.forEach(element => {
            tableBody.append($(`<tr><td>${element.Name}</td><td></td><</tr>`))
        });
        tableBody.append($(`<tr><td><br/></td><td><br/></td></tr>`))
    }
);

$.get("https://services.odata.org/V4/(S(srg3pj2qhftjrzv0oh4gpzva))/TripPinServiceRW/People?$search=Male",
    function (oResult) {
        tableBody.append($(`<tr><td>$search=Male </td>`));
        oResult.value.forEach(element => {
            tableBody.append($(`<tr><td>${element.FirstName}</td><td>${element.LastName}</td></tr>`))
        });
        tableBody.append($(`<tr><td><br/></td><td><br/></td></tr>`))
    }
);

$.get("https://services.odata.org/V4/(S(srg3pj2qhftjrzv0oh4gpzva))/TripPinServiceRW/People?$filter=FirstName eq 'Clyde' or LastName eq 'Mundy'",
    function (oResult) {
        tableBody.append($(`<tr><td>$filter=FirstName eq 'Clyde' or LastName eq 'undy'</td>`));
        oResult.value.forEach(element => {
            tableBody.append($(`<tr><td>${element.FirstName}</td><td>${element.LastName}</td></tr>`))
        });
        tableBody.append($(`<tr><td><br/></td><td><br/></td></tr>`))
    }
);

$.get("https://services.odata.org/V4/(S(srg3pj2qhftjrzv0oh4gpzva))/TripPinServiceRW/People?$filter=startswith(FirstName,'C') and endswith(LastName,'s')&Gender eq 'Male'",
    function (oResult) {
        tableBody.append($(`<tr><td>$filter=startswith(FirstName,'C') and endswith(LastName,'s')&Gender eq 'Male'</td></tr>`));
        oResult.value.forEach(element => {
            tableBody.append($(`<tr><td>${element.FirstName}</td><td>${element.LastName}</td><td>${element.Gender}</td></tr>`))
        });
        tableBody.append($(`<tr><td><br/></td><td><br/></td></tr>`))
    }
);

$.get("https://services.odata.org/V4/(S(srg3pj2qhftjrzv0oh4gpzva))/TripPinServiceRW/People?$orderby=LastName&$top=5&$skip=2",
    function (oResult) {
        tableBody.append($(`<tr>`).append($(`<td>`).text(`$top=5&$skip=2$orderby=LastName`)))
        oResult.value.forEach(element => {
            tableBody.append($(`<tr><td>${element.FirstName}</td><td>${element.LastName}</td></tr>`))
        });
        tableBody.append($(`<tr><td><br/></td><td><br/></td></tr>`))
    });