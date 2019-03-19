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
}

    Computer.prototype.getTypeOfProcessor = function () 
    {
        return this.getTypeOfProcessor;
    }
    Computer.prototype.getNumber = function () 
    {
        return this.number;
    }
    Computer.prototype.setNumber = function (number) 
    {
        this.number = number;
    }
    Computer.prototype.getFrequency = function () 
    {
        return this.Frequency;
    }
    Computer.prototype.setFrequency = function (Frequency) 
    {
        this.Frequency = Frequency;
    }
    Computer.prototype.getHTT = function () 
    {
        return this.HTT;
    }
    Computer.prototype.setHTT = function (HTT) 
    {
        this.HTT = HTT;
    }
    Computer.prototype.getArchitectureBitDepth = function () 
    {
        return this.ArchitectureBitDepth;
    }
    Computer.prototype.setArchitectureBitDepth = function (ArchitectureBitDepth) 
    {
        this.ArchitectureBitDepth = ArchitectureBitDepth;
    }
    Computer.prototype.getManufacturer = function () 
    {
        return this.Manufacturer;
    }
    Computer.prototype.setManufacturer = function (Manufacturer) 
    {
        this.Manufacturer = Manufacturer;
    }
    Computer.prototype.getGraficCard = function () 
    {
        return this.GraficCard;
    }
    Computer.prototype.setGraficCard = function (GraficCard) 
    {
        this.GraficCard = GraficCard;
    }
    Computer.prototype.getRAMSize = function () 
    {
        return this.RAMSize;
    }
    Computer.prototype.setRAMSize = function (RAMSize) 
    {
        this.RAMSize = RAMSize;
    }
    Computer.prototype.getHardDiskSize = function () 
    {
        return this.HardDiskSize;
    }
    Computer.prototype.setHardDiskSize = function (HardDiskSize) 
    {
        this.HardDiskSize = HardDiskSize;
    }



function Ultrabook(typeOfProcessor) 
{
    Computer.call(this, typeOfProcessor);
}

function ComputingServer(typeOfProcessor) 
{
    Computer.call(this, typeOfProcessor);
}


Ultrabook.prototype = Object.create(Computer.prototype);
Ultrabook.prototype.constructor = Ultrabook;

ComputingServer.prototype = Object.create(Computer.prototype);
ComputingServer.prototype.constructor = ComputingServer;