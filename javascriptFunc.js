//Variable yang ingin di ubah
let projectstatus = "In Progress";

//fungsi untuk mengupdate isi dari variable di atas
function projectupdate (newstatus) {
  projectstatus = newstatus ;
  console.log(`Nama Project yang sedang di update: ${projectstatus}`);
}


//untuk menampilkan output
projectupdate ("Project 2025");

console.log(`Nama project : ${projectupdate}`);


//array nama orang
let nama = ["Alan", "Muhammad", "Hendri",];


//fungsi menambahkan string ke dalam array di atas
nama.push("Indra Maulana");
console.log(nama);


//menampilkan outpot dari array di atas
console.log("List Nama");


//fungsi menampilkan array secara list
nama.forEach((member, index)=>{
    console.log(`${index}. ${member}`);
});