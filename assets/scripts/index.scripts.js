function envio(){

const public_key = "T-JoE4yBr_NDOYJFf";
const secret_key = "jXl-_WtqAu87XLN57rSnN";

(function () {
    emailjs.init(public_key);
})();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const mensagem = document.getElementById("mensagem").value;

    if (!nome || !email || !mensagem) {
        alert("Preencha todos os campos!");
        return;
    }

    const params = {
        nome,
        email,
        mensagem,
    };

    const serviceID = "service_8avg60v";
    const templateID = "template_42on6pi";

    emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
        document.getElementById("nome").value = "";
        document.getElementById("email").value = "";
        document.getElementById("mensagem").value = "";
        console.log("res");
        alert("Mensagem enviada com sucesso!");
    })
    .catch((err) => {
        console.error(err);
    });
}