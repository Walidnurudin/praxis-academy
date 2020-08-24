let kamus = new Map();

// default kamus
kamus.set("blue", "biru");
kamus.set("red", "merah");
kamus.set("yellow", "kuning");

// SIMPAN
function simpan() {
    let inggris = document.getElementById("key").value;
    let indo = document.getElementById("value").value;

    if (inggris != "" && indo != "") {
        alert("sukses menambah " + inggris + " " + indo);
        kamus.set(inggris, indo);
        console.log(kamus.entries())
    } else {
        alert("masukan kedua inputan kamus tersebut");
    }
}


// HAPUS
function hapus() {

    let item = document.getElementById("hapus").value;
    let hasil = kamus.delete(item);

    if (hasil) {
        alert("succes menghapus " + item);
    }else{
        alert("kata " + item + " tidak ada dikamus");
    }

    let text = `isi kamus :<br/><br/>`;
    for (let item of kamus.entries()) {
        text += `${item[0]} : ${item[1]}` + " <br/>";
        console.log(`${item[0]} : ${item[1]}`);
    }
    document.getElementById("sisa").innerHTML = text;
}


// CARI
function cari() {
    let input = document.getElementById("search").value;
    let result = kamus.get(input);

    if(result){
        console.log(result)
        document.getElementById("hasil").innerHTML = result;
    }else{
        alert("kata " + input + " tidak ada di kamus!")
    }

}


