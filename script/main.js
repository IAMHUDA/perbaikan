let next = document.querySelector('.next')
let prev = document.querySelector('.prev')

next.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').appendChild(items[0])
})

prev.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').prepend(items[items.length - 1]) // here the length of items = 6
})


////<----- javascript by si ganteng ----->////
function sweetAlert() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Cek apakah username dan password sesuai dengan yang diinginkan
    if (username === "admin" && password === "admin") {
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Login successful!",
            showConfirmButton: false,
            timer: 1500
        }).then((result) => {
            // Redirect to the next page after the alert
            window.location.href = "halaman.html";
        });
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Login failed',
            text: 'Incorrect username or password!',
            footer: '<a href="#">Forgot Password?</a>'
        });
    }
}

