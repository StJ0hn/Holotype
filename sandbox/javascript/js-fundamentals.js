const dinosaurs = [
  { name: "T-Rex", diet: "Carnivore", size: 12 },
  { name: "Brachiosaurus", diet: "Herbivore", size: 26 },
  { name: "Velociraptor", diet: "Carnivore", size: 1.8 },
  { name: "Triceratops", diet: "Herbivore", size: 9 },
  { name: "Spinosaurus", diet: null, size: 15 },
];

let i = 0;

while (i < dinosaurs.length) {
  console.log(dinosaurs[i].name);
  i++;
}

let j = 0;
while (j < dinosaurs.length) {
  if (dinosaurs[j].diet == "Carnivore") {
    console.log(dinosaurs[j].name);
  }
  j++;
}

let k = 0;

while (k < dinosaurs.length){
  if (dinosaurs[k].size > 8)
    console.log("Grande")
  else {
     console.log("Pequeno");
  }
  k++;
}

let isUndefined = dinosaurs[4].diet ?? "Desconhecida"
console.log(isUndefined)
