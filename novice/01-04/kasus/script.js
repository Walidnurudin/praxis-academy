// PLAT
function onClickPlat() {
    let plat = document.getElementById("plat").value;
    let regPlat = /^\D{1,2}\s\d{1,4}\s\D{1,3}$/ig

    if(plat.match(regPlat)){
        alert(`Nomor plat "${plat}" adalah nomor plat indonesia`);
    }else{
        alert(`Nomor plat "${plat}" adalah BUKAN nomor plat indonesia`);
    }
}



// EMAIL
function onClickEmail() {
    let email = document.getElementById("email").value;
    let regEmail = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/ig
    let regName = /^([a-z0-9_\.-]+)/ig
    let regDomain = /([\da-z\.-]+)\.([a-z\.]{2,6})$/ig

    regEmail = email.match(regEmail);
    regName = email.match(regName);
    regDomain = email.match(regDomain);

    if(regEmail){
        alert(`Halo, username anda adalah ${regName}, domain anda adalah ${regDomain}`);
    }else{
        alert(`Email yang anda masukan salah!`);
    }
}