

let nama: string = "Indra Maulana Agung";
let umur: number = 28;

console.log(umur);


function tampilkanNama() {
    console.log(nama);
}

tampilkanNama();

function updateNama(namaBaru: string) {
    nama = namaBaru;
}

updateNama("Agung Indra Maulana");
tampilkanNama();

function tampilkanUmur() {
    console.log(umur);
}

tampilkanUmur();