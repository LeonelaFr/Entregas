(()=>{
    let $fetch= document.querySelector("#tabla");
    $fragment= document.createDocumentFragment();
    $fragment.appendChild(cabecera());
    let $tbody= document.createElement("tbody");
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((resp)=>{
        return resp.ok ? resp.json() : Promise.reject(resp);

    })
    .then(json=>{
        json.forEach(e=>{
            const $tr= document.createElement("tr");
           
            const $id= document.createElement("td");
            $id.classList.add("table-success")
            $id.textContent= `${e.id}`;

            const $name= document.createElement("td");
            $name.classList.add("table-primary")
            $name.textContent= `${e.name}`;

            const $username= document.createElement("td");
            $username.classList.add("table-danger")
            $username.textContent= `${e.username}`;

            const $email= document.createElement("td");
            $email.classList.add("table-warning")
            $email.textContent= `${e.email}`;

            const $adress= document.createElement("td");
            $adress.classList.add("table-info")
            $adress.textContent= `${e.address.street}`;

            $tr.appendChild($id);
            $tr.appendChild($name);
            $tr.appendChild($username);
            $tr.appendChild($email);
            $tr.appendChild($adress);

            $tbody.appendChild($tr);

        })
       $fragment.appendChild($tbody);
       $fetch.appendChild($fragment);
    })
    .catch((error)=>{
        console.log(error.status)
    })
 
}

)();

function cabecera() {
    const $thead= document.createElement("thead");
    let encabezados= ["Id", "Name", "Username", "Email", "Address-street" ];
    let $tr= document.createElement("tr");
    $tr.classList.add("table-dark")
    for(i=0; i< encabezados.length; i++){
        
        let $th= document.createElement("th");

        $th.textContent= `${encabezados[i]}`;
        $tr.appendChild($th);
    };
    $thead.appendChild($tr);
    return $thead;
};