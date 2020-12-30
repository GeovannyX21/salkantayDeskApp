 // FUNCIONES PARA VISUALIZAR CLIENTES
 const getListTable = async () => {
    let response = await new GetInfoByFetch(url.apiclientes).request();  
    
    document.getElementById('container-list-table').innerHTML = " ";
    if (response.length === 0) {

        document.getElementById('container-list-table').innerHTML = "<p class='text-white'> No hay clientes </p>";
    }

    response.map((clientes) => {
        const table = `
                <tr >
                    <td>#${clientes.clienteId}</td>
                    <td>${clientes.nombre}</td>
                    <td>${clientes.telefono}</td>
                    <td>${clientes.nit}</td>     
                </tr>
            `;
        document.getElementById('container-list-table').insertAdjacentHTML('beforeEnd', table);

    })
};

