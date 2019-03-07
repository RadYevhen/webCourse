function Computer(typeOfProcessor, number, Frequency, HTT, ArchitectureBitDepth, Manufacturer, GraficCard, RAMSize, HardDiskSize) 
{
    this.typeOfProcessor = typeOfProcessor;
    this.number = number;
    this.Frequency = Frequency;
    this.HTT = HTT;
    this.ArchitectureBitDepth = ArchitectureBitDepth;
    this.Manufacturer = Manufacturer;
    this.GraficCard = GraficCard;
    this.RAMSize = RAMSize;
    this.HardDiskSize = HardDiskSize;

    this.getTypeOfProcessor = function () 
    {
        return this.getTypeOfProcessor;
    }
    this.getNumber = function () 
    {
        return this.number;
    }
    this.setNumber = function (number) 
    {
        this.number = number;
    }
    this.getFrequency = function () 
    {
        return this.Frequency;
    }
    this.setFrequency = function (Frequency) 
    {
        this.Frequency = Frequency;
    }
    this.getHTT = function () 
    {
        return this.HTT;
    }
    this.setHTT = function (HTT) 
    {
        this.HTT = HTT;
    }
    this.getArchitectureBitDepth = function () 
    {
        return this.ArchitectureBitDepth;
    }
    this.setArchitectureBitDepth = function (ArchitectureBitDepth) 
    {
        this.ArchitectureBitDepth = ArchitectureBitDepth;
    }
    this.getManufacturer = function () 
    {
        return this.Manufacturer;
    }
    this.setManufacturer = function (Manufacturer) 
    {
        this.Manufacturer = Manufacturer;
    }
    this.getGraficCard = function () 
    {
        return this.GraficCard;
    }
    this.setGraficCard = function (GraficCard) 
    {
        this.GraficCard = GraficCard;
    }
    this.getRAMSize = function () 
    {
        return this.RAMSize;
    }
    this.setRAMSize = function (RAMSize) 
    {
        this.RAMSize = RAMSize;
    }
    this.getHardDiskSize = function () 
    {
        return this.HardDiskSize;
    }
    this.setHardDiskSize = function (HardDiskSize) 
    {
        this.HardDiskSize = HardDiskSize;
    }

}

function Ultrabook(typeOfProcessor) 
{
    Computer.call(this, typeOfProcessor);
}

function ComputingServer(typeOfProcessor) 
{
    Computer.call(this, typeOfProcessor);
}

(function () 
{
    function toJSONString(form) 
    {
        var elements = form.querySelectorAll("input, select, textarea");
        var obj;
        if (elements[0].value == "Intel") {
            obj = new Ultrabook(elements[0].value);
        } else if (elements[0].value == "AMD") {
            obj = new ComputingServer(elements[0].value);
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

        addButton.addEventListener('click', function (e) 
        {
            e.preventDefault();
            var json = toJSONString(form);
            output.innerHTML = json;

        }, false);

    });

})();