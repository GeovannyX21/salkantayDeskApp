const {Conexion} = require('../../../dbconfig');
const pdf = require('html-pdf');



    const content = `
    <!doctype html>
        <html>
           <head>
                <meta charset="utf-8">
                <title>PDF Result Template</title>
                <style>
                    h1 {
                        color: green;
                        aling: center;
                    }
                </style>
            </head>
            <body>
            <h1>REPORTE DE VENTAS</h1>
                    <div class="listado">
                    <div class="card">
                    <div class="card-body">
                        <h3 class="text-dark text-center">Listado de clientes</h3>
                        <table id="ClientTable" class="text-center table table-responsive-lg table-hover">
                        <thead class="thead-dark">
                            <tr>
                            <th>ID</th>
                            <th>Nombre</th>
                            <th>Telefono</th>
                            <th>Nit</th>
                            </tr>
                        </thead>
                        <tbody id="myTable">
                
                        </tbody>
                
                        </table>
                    </div>
                    </div>
                </div>
                </div>
            </body>
        </html>
    `;
    
    pdf.create(content).toFile('./Reportes/reporte_ventas.pdf', function(err, res) {
        if (err){
            console.log(err);
        } else {
            console.log(res);
        }
    });