const loginBtn = document.getElementById("loginBtn")

loginBtn.addEventListener('click', function(){

    const email = $('#id').val()
    const password = $('#pwd').val()

    $.ajax({
        type : "POST",
        url : "/user/login",
        data : {
            email : email,
            password : password
        },
        success : function(){
            window.location.href = "/index"
        }
    })
})