function cekLogin() {
    // Mengambil nilai dari elemen input username dan password
    var usernameValue = document.getElementById("username").value;
    var passwordValue = document.getElementById("password").value;

    // Melakukan pengecekan atau tindakan yang sesuai di sini
    if (usernameValue === "" || passwordValue === "") {
        alert("Silakan isi username dan password.");
    } else if (usernameValue === "admin" || passwordValue === "admin"){
        // Contoh penanganan login
        alert("Selamat datang, " + usernameValue + "!");
        window.open("Crud.html");
        // Di sini Anda dapat melakukan pengiriman data ke server untuk verifikasi login
    } else {
        alert("username dan password SALAH.");
    }
}