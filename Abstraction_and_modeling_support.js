/*Association*/
function Person(name, surName) {
  this.name = name;
  this.surName = surName;
  this.parent = null;
}
var seyyedMahdi = new Person("SeyyedMahdi", "HassanPour");
var fatemehSadat = new Person("FatemehSadat", "HassanPour");
fatemehSadat.parent = seyyedMahdi;

/*Aggregation*/
var company = {
  name: "Tarhe Moalem",
  employees: []
};
var seyyedMahdi = new Person("SeyyedMahdi", "Hassanpour");
var hamed = new Person("Hamed" ,"Naqiniarami");
company.employees.push(seyyedMahdi);
company.employees.push(hamed);

/*Composition*/
var person = {
  name: "SeyyedMahdi",
  surName: "Hassanpour",
  address: {
    street: "shahid mohammadi",
    city: "Tehran",
    country: "Iran"
    }
};
