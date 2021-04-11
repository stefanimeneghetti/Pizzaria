document.querySelector('.form').addEventListener("submit", function(e){
    
    const name =  document.getElementById('name');
    const email = document.getElementById('email');
    const phone = document.getElementById('tel');
    const birth = document.getElementById('birth');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirm-password');
    const address = document.getElementById('address');
    var errorDiv =  document.querySelector('.errors');
    var errorList = document.querySelector('.errors ul');

    if (errorList)
        errorList.parentNode.removeChild(errorList);
    errorDiv.style.display = "none";

    var errors = [];
   
    if (name.value == "" || name.value == undefined)
        errors.push("O nome não pode ser vazio");

    if (email.value == "" || email.value == undefined)
        errors.push("O email não pode ser vazio");

    if (phone.value == "" || phone.value == undefined)
        errors.push("O telefone não pode ser vazio");

    if (birth.value == "" || birth.value == undefined)
        errors.push("A data de aniversário não pode ser vazia");

    if (address.value == "" || address.value == undefined)
        errors.push("O endereço não pode ser vazio");

    if (password.value == "" || password.value == undefined)
        errors.push("A senha não pode ser vazia");

    if (password.value != confirmPassword.value)
        errors.push("As senhas informadas não coincidem");

    if (errors.length == 0)
        return;

   const ul = createErrorList(errors);
   errorDiv.appendChild(ul);
   errorDiv.style.display = "block";
   e.preventDefault();
});


function createErrorList (errors) {
    var ul = document.createElement('ul');

    errors.forEach(error => {
        var li = document.createElement('li');
        li.innerHTML = error;
        ul.appendChild(li);
    });

    return ul;
}


