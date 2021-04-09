var mailRepository = ["a@a", "b@b", "c@c", "d@d", "e@e", "f@f", "g@g", "h@h"];
console.log(mailRepository);

var userMail = prompt("Inserire indirizzo mail");

var elementExists = false;


for (var i = 0; i < mailRepository.length; i++) {
    var mailInserita = mailRepository[i];

    if (mailInserita === userMail) {
        elementExists = true;
        console.log("la mail è corretta")
    }
} 

if (!elementExists) {
    console.log("la mail è errata")
}
    