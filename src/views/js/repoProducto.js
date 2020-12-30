 // FUNCIONES PARA VISUALIZAR PRODUCTOS
 const getListTable2 = async () => {
   let response = await new GetInfoByFetch(url.products).request();
    //let response = await new GetInfoByFetch(`${url.products}productosBycategori/${id}`).request();
    
    document.getElementById('container-list-table2').innerHTML = " ";
    if (response.length === 0) {

        document.getElementById('container-list-table2').innerHTML = "<p class='text-white'> No hay mesas disponibles </p>";
    }

    response.map((productos) => {
        const table = `
                <tr >
                    <td>${productos.producto}</td>
                    <td>${productos.precio}</td>
                    <td>${productos.categoriaId}</td>
                    <td>${productos.estado == 1 ? "Inactivo" : "Activo"}</td>
                          
                </tr>
            `;
        document.getElementById('container-list-table2').insertAdjacentHTML('beforeEnd', table);

    })
};

const getListCat = async () => {
    let response = await new GetInfoByFetch(url.apicategory).request(); 
     //let response = await new GetInfoByFetch(`${url.products}productosBycategori/${id}`).request();

 };