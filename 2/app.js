let formulario= document.querySelector("#formulario");
let password= document.querySelector("#contraseña");

formulario.addEventListener("submit", (e)=>{
    e.preventDefault()
    let valor = password.value;

    let regetp= /^(?=.*[a-z])(?=.*[A-Z])[\w]{12,}$/gm;

    if (regetp.test(valor)){
        console.log("validado")
    } else{
        console.log("no valido")
    }

})