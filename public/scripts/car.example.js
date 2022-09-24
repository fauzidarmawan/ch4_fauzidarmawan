class Car {
  static list = [];

  static init(cars) {
    this.list = cars.map((i) => new this(i));
  }

  constructor({
    id,
    plate,
    manufacture,
    model,
    image,
    rentPerDay,
    capacity,
    description,
    transmission,
    available,
    type,
    year,
    options,
    specs,
    availableAt,
  }) {
    this.id = id;
    this.plate = plate;
    this.manufacture = manufacture;
    this.model = model;
    this.image = image;
    this.rentPerDay = rentPerDay;
    this.capacity = capacity;
    this.description = description;
    this.transmission = transmission;
    this.available = available;
    this.type = type;
    this.year = year;
    this.options = options;
    this.specs = specs;
    this.availableAt = availableAt;
  }

  render() {
    return `
      <div class="card" style="width: 22rem">
      <img src="${this.image}" class="card-img-top img-fluid" alt="${this.manufacture}" style="height: 190px; object-fit: cover" />
      <div style="padding:28.17px">
        <p class="judul-card">${this.manufacture} / ${this.model}</p>
        <h5 class="card-title">Rp.${this.rentPerDay}/Hari</h5>
        <p class="">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
        <div class="my-2">Kapasitas ${this.capacity} Orang</div>
        <div class="my-2">Penumpang ${this.transmission}</div>
        <div class="my-2">Tahun ${this.year}</div>
        <a href="#" class="btn btn-success text-white w-100 mt-2 fw-bold mt-4" style="font-size: 14px">Pilih Mobil</a>      
      </div>
    </div>
    `;
  }
}
