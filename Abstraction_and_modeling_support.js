/*Association*/
function Person(name, surName) {
    this.name = name;
    this.surName = surName;
    this.parent = null;
}
var seyyedMahdi = new Person("SeyyedMahdi", "HassanPour");
var fatemehSadat = new Person("FatemehSadat", "HassanPour");
fatemehSadat.parent = seyyedMahdi;

var isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
if (isFirefox) {alert(fatemehSadat.parent.toSource()); }// just in firefox
else {alert(JSON.stringify(fatemehSadat, null, 4));} // other browsers

/*Aggregation*/
var company = {
  name: "Tarhe Moalem",
  employees: []
};
var seyyedMahdi = new Person("SeyyedMahdi", "Hassanpour");
var hamed = new Person("Hamed" ,"Naqiniarami");
company.employees.push(seyyedMahdi);
company.employees.push(hamed);
alert(JSON.stringify(company, null, 4));

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
alert(JSON.stringify(person, null, 4));

