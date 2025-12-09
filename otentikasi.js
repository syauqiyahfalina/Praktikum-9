function login() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    let userBenar = "syauqiyah";
    let passBenar = "yuaiyuek";

    if (user === userBenar && pass === passBenar) {
        alert("Login sukses!");
        window.location.href = "success.html"; 
        return false;
    } else {
        alert("Login gagal! Username atau password anda salah.");
        return false; 
   }
}