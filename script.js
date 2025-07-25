// Kim kimle ne zaman oyunu
const data = {
    kim:["Mert", "Melisa", "Pers", "Moka", "Mirac"],
    kiminle:["Karl Marxla", "Ahmet Kayayla", "Serdar Ortacla", "Bruce Willsle", "Wolverinele"],
    "neZaman": ["sabahleyin", "bir nisanda", "aksam","sali gunu", "gun dogarken"],
    nerede: ["Tubingen'de", "Mersin'de", "evde", "cennette", "aqua parkta","resim galerisinde"]
    "neYapti": ["sevisti", "guresti", "dertlesti", "tavla oynadi", "film izledi"]
};

function game(){
    let randomPerson = data.kim[Math.floor(Math.random() * data.kim.length)];
    let randomCounterpart = data.kiminle[Math.floor(Math.random() * data.kiminle.length)];
    let randomTime= data["neZaman"][Math.floor(Math.random() * data["neZaman"].length)];
    let randomPlace = data.nerede[Math.floor(Math.random() * data.nerede.length)];
    let randomEvent= data["neYapti"][Math.floor(Math.random() * data["neYapti"].length)];
    console.log(`${randomPerson} ${randomCounterpart} ${randomTime} ${randomPlace} ${randomEvent}`)
};

game();