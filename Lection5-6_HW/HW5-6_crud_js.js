(function () 
{
    function toJSONString(form) 
    {
        var elements = form.querySelectorAll("input, select, textarea");
        var obj;
        if (elements[1].value == "Intel") {
            obj = new Ultrabook(elements[1].value);
        } else if (elements[1].value == "AMD") {
            obj = new ComputingServer(elements[1].value);
        } else {
            return "";
        }

        for (var i = 0; i < elements.length; ++i) 
        {
            var element = elements[i];
            switch (element.name) 
            {
                case 'number':
                    obj.setNumber(element.value);
                    break;
                case 'Frequency':
                    obj.setFrequency(element.value);
                    break;
                case 'HTT':
                    obj.setHTT(element.value);
                    break;
                case 'ArchitectureBitDepth':
                    obj.setArchitectureBitDepth(element.value);
                    break;
                case 'Manufacturer':
                    obj.setManufacturer(element.value);
                    break;
                case 'GraficCard':
                    obj.setGraficCard(element.value);
                    break;
                case 'RAMSize':
                    obj.setRAMSize(element.value);
                    break;
                case 'HardDiskSize':
                    obj.setHardDiskSize(element.value);
                    break;
            }
        }

        return JSON.stringify(obj);
    }

    document.addEventListener("DOMContentLoaded", function () 
    {
        var form = document.getElementById("mainForm");
        var output = document.getElementById("output");
        var addButton = document.getElementById("add");
        var updateButton = document.getElementById("update");
        var deleteButton = document.getElementById("delete");

        addButton.addEventListener('click', function (e) 
        {
            e.preventDefault();
            var json = toJSONString(form);
            console.log(json);
            xmlRequest = new XMLHttpRequest();
            xmlRequest.withCredentials = true;
            xmlRequest.addEventListener("readystatechange", function () 
            {
                if (this.readyState === 4) 
                {
					alert(this.responseText);
					modifyTable();
				}
            });
            xhr.open("POST", "http://195.50.2.67:2403/yevhen-radchenko-collection");
			xhr.setRequestHeader("Content-Type", "application/json");
			xhr.send(json);
        }, false);

        updateButton.addEventListener('click', function (e) 
        {
            e.preventDefault();
            var json = toJSONString(form);
            console.log(json);
            xmlRequest = new XMLHttpRequest();
            xmlRequest.withCredentials = true;
            xmlRequest.addEventListener("readystatechange", function () 
            {
                if (this.readyState === 4) 
                {
					alert(this.responseText);
					modifyTable();
				}
            });
            xhr.open("PUT", "http://195.50.2.67:2403/yevhen-radchenko-collection/" + + document.getElementById("user_id").value);
			xhr.setRequestHeader("Content-Type", "application/json");
			xhr.send(json);
        }, false);

        deleteButton.addEventListener('click', function (e) 
        {
            e.preventDefault();
            var json = toJSONString(form);
            console.log(json);
            xmlRequest = new XMLHttpRequest();
            xmlRequest.withCredentials = true;
            xmlRequest.addEventListener("readystatechange", function () 
            {
                if (this.readyState === 4) 
                {
					alert(this.responseText);
					modifyTable();
				}
            });
            xhr.open("DELETE", "http://195.50.2.67:2403/yevhen-radchenko-collection/" + + document.getElementById("user_id").value);
			xhr.setRequestHeader("Content-Type", "application/json");
            xhr.send();

        }, false);

        modifyTable();

    });

})();

function onRowClick(tableId, callback) 
{
	var table = document.getElementById(tab),
		rows = table.getElementsByTagName("tr"),
		i;
    for (i = 0; i < rows.length; i++) 
    {
        table.rows[i].onclick = function (row) 
        {
            return function () 
            {
				callback(row);
			};
		}(table.rows[i]);
	}
};

function updateDataTable() 
{
	xmlRequest_mod_table = new XMLHttpRequest();
	xmlRequest_mod_table.withCredentials = true;
    xmlRequest_mod_table.addEventListener("readystatechange", function () 
    {
        if (this.readyState === 4) 
        {
			result = JSON.parse(this.response);
			var resultTBody = document.createElement('tbody');
            result.map(function (nthCPU) 
            {
				resultTBody.appendChild(parseResponeRowToTableRow(nthCPU));
			});

			var table = document.getElementById('TBody').parentElement;
			table.replaceChild(resultTBody, document.getElementById('TBody'));
			resultTBody.id = 'TBody';
			console.log('success');

			//add listener to table rows
			onRowClick("TResult", function (row) {
				var curID = row.getElementsByTagName("th")[0].innerHTML;
				console.log("Current ID>>", curID);

				var currentRow = row.getElementsByTagName("td");
				document.getElementById("user_id").value = curID;

				document.getElementById("number").value = currentRow[0].innerHTML;
				document.getElementById("typeOfProcessor").value = currentRow[1].innerHTML;
				document.getElementById("Frequency").value = currentRow[2].innerHTML;
				document.getElementById("HTT").value = currentRow[3].innerHTML;
				document.getElementById("ArchitectureBitDepth").value = currentRow[4].innerHTML;
				document.getElementById("Manufacturer").value = currentRow[5].innerHTML;
                document.getElementById("GraficCard").value = currentRow[6].innerHTML;
                document.getElementById("RAMSize").value = currentRow[7].innerHTML;
                document.getElementById("HardDiskSize").value = currentRow[8].innerHTML;
			});
		}
	});

	xhr_upd_table.open("GET", "http://195.50.2.67:2403/yevhen-radchenko-collection");
	xhr_upd_table.setRequestHeader("Content-Type", "application/json");
	xhr_upd_table.send();

};

function parseResponeRowToTableRow(rows) 
{
	var row = document.createElement('tr');

	user_id = document.createElement('th');
	user_id.innerText = rows['user_id'];
	row.appendChild(user_id);

	number = document.createElement('td');
	number.innerText = rows['number'];
	row.appendChild(number);

	typeOfProcessor = document.createElement('td');
	typeOfProcessor.innerText = rows['typeOfProcessor'];
	row.appendChild(typeOfProcessor);

	Frequency = document.createElement('td');
	Frequency.innerText = rows['Frequency'];
	row.appendChild(Frequency);

	HTT = document.createElement('td');
	HTT.innerText = rows['HTT'];
    row.appendChild(HTT);
    
    ArchitectureBitDepth = document.createElement('td');
	ArchitectureBitDepth.innerText = rows['ArchitectureBitDepth'];
    row.appendChild(ArchitectureBitDepth);
    
    Manufacturer = document.createElement('td');
	Manufacturer.innerText = rows['Manufacturer'];
    row.appendChild(Manufacturer);
    
    GraficCard = document.createElement('td');
	GraficCard.innerText = rows['GraficCard'];
    row.appendChild(GraficCard);
    
    RAMSize = document.createElement('td');
	RAMSize.innerText = rows['RAMSize'];
    row.appendChild(RAMSize);

    HardDiskSize = document.createElement('td');
	HardDiskSize.innerText = rows['HardDiskSize'];
	row.appendChild(HardDiskSize);

	creationDate = document.createElement('td');
	var accountCreationDate = new Date(rows['creationDate']);
    MyDateString = ('000' + accountCreationDate.getFullYear()).slice(-4) + '-' + 
                   ('0' + (accountCreationDate.getMonth() + 1)).slice(-2) + '-' + 
                   ('0' + accountCreationDate.getDate()).slice(-2);
        
	creationDate.innerText = MyDateString;
	row.appendChild(creationDate);

	user = document.createElement('td');
	user.innerText = rows['user'];
	row.appendChild(user);

	userType = document.createElement('td');
	userType.innerText = rows['userType'];
	row.appendChild(userType);

	return row;
};