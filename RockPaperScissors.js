// 1. membuat fungsi batu gunting kertas
// 2. list Batu Gunting Kertas
// 3. pilihan komputer ?
//    1. mengetahui jumlah array
//    2. mengambil index
//    3. menampilkan data index
// 4. peraturan ?

// 5. tipe data atau input ?
// 6. hasil ?

function BatuGuntingKertas(pilihanUser) {
  const list = ["rock", "paper", "scissors"];
  const pilihanKomputer = list[Math.floor(Math.random() * list.length)]; // mendeklarasikan pilihan komputer
  // console.log(pilihanKomputer);
  // console.log(list[Math.floor(Math.random() * list.length)]); {mengambil data sesuai index}
  // console.log(list.length); {menentukan panjang data index}
  // console.log(list[2]); {mengambil data index array}
  // console.log(Math.floor(Math.random() * list.length)); {mengubah bilangan bulat ke angka satuan}
  const rules = {
    // rules
    rock: {
      win: "scissors",
      lose: "paper",
    },
    paper: {
      win: "rock",
      lose: "scissors",
    },
    scissors: {
      win: "paper",
      lose: "rock",
    },
  };

  if (typeof pilihanUser === "number")
    // type data yang di input = "number", "string"
    return "please input rock, paper, or scissors only";
  if (!list.includes(pilihanUser))
    //tidak termasuk dalam array
    return `${pilihanUser} is not part of the game!`; // menampilkan data

  if (pilihanKomputer === rules[pilihanUser].win) {
    // memasukkan fungsi dalam conditional dan memanggil data rules
    return `komputer = ${pilihanKomputer} vs user = ${pilihanUser}, hasil = user win`;
  } else {
    if (pilihanKomputer === rules[pilihanUser].lose) {
      return `komputer = ${pilihanKomputer} vs user = ${pilihanUser}, hasil = user lose`;
    } else {
      if (pilihanKomputer === pilihanUser)
        return `komputer = ${pilihanKomputer} vs user = ${pilihanUser}, hasil = draw`;
    }
  }
}
// console.log(BatuGuntingKertas("nasi goreng"));
// console.log(BatuGuntingKertas(7));
console.log(BatuGuntingKertas("nasi goreng"));
