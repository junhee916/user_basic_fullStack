const signupBtn = document.getElementById('signupBtn')

signupBtn.addEventListener('click', function(){

    const name = $("#name").val()
    const email = $("#id").val()
    const password = $("#pwd").val()

    $.ajax({
        type : "POST",
        url : "/user/signup",
        data : {
            name : name,
            email : email,
            password : password
        },
        success : function(){
            window.location.href = "/login"
        }
    })
})