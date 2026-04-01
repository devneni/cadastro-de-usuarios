document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("formCadastro");

    form.addEventListener("submit", function (event) {

        const email = document.getElementById("email").value.trim();
        const senha = document.getElementById("senha").value.trim();

        if (email === "") {
            alert("O email é obrigatório.");
            event.preventDefault();
            return;
        }

        if (senha.length < 6) {
            alert("A senha deve ter no mínimo 6 caracteres.");
            event.preventDefault();
            return;
        }

        alert("Formulário enviado com sucesso!");
    });

});