class App {
  constructor() {
    this.clearButton = document.getElementById("clear-btn");
    this.loadButton = document.getElementById("load-btn");
    this.carContainerElement = document.getElementById("cc");
    this.fdate = document.getElementById('filterDate');
    this.ftime = document.getElementById('filterTime')
    this.fcapacity = document.getElementById('filterCapacity')
  }

  async init() {
    await this.load();

    // Register click listener
    this.clearButton.onclick=this.clear;
    this.loadButton.onclick = this.run;
  }

  run = () => {
    this.clear();
    const data = this.filterCar();
    data.forEach((car) => {
        const node = document.createElement('div');
        node.className = "col mb-5"
        node.innerHTML = car.render();
        this.carContainerElement.appendChild(node);
    });
  };

  filterCar() {
    const dateValue = this.fdate.value
    const timeValue = this.ftime.value
    const capacityValue = this.fcapacity.value
    console.log(dateValue, timeValue, capacityValue)
    const dateTime = new Date(`${dateValue} ${timeValue}`);
    if (dateTime == 'Invalid Date') {
      alert('Masukan tanggal');
      return;
    } else {
      return Car.list.filter((car) => car.capacity >= capacityValue && car.availableAt >= dateTime);
    }
  }

  async load() {
    const cars = await Binar.listCars();
    Car.init(cars);
  }

  clear = () => {
    let child = this.carContainerElement.firstElementChild;

    while (child) {
      child.remove();
      child = this.carContainerElement.firstElementChild;
    }
  };
}
