const url = {
     apiuser: 'http://localhost:3000/apiv0.1/users/',
     products: 'http://localhost:3000/apiv0.1/products/',
     apicategory: 'http://localhost:3000/apiv0.1/category/',
     apimesas: 'http://localhost:3000/apiv0.1/mesas/',
     apiordenes: 'http://localhost:3000/apiv0.1/orden/',
     apiordendetalle: 'http://localhost:3000/apiv0.1/ordendet/',
     apiclientes: 'http://localhost:3000/apiv0.1/cliente',
     apipromo: 'http://localhost:3000/apiv0.1/promociones/' ,
     apiInfo: 'http://localhost:3000/apiv0.1/info/' ,
     apimenu: 'http://localhost:3000/apiv0.1/menu/' 
}

function GetInfoByFetch(url, method = 'GET', body) {
     this.url = url;
     this.params = {
          method,
          headers: {
               'token': sessionStorage.getItem("token"),
          },
          body: body

     };
     this.request = async () => {
          let result = await fetch(this.url, this.params);
          return result.json();
     };

};

const closeSesion = () => {
     window.location.href = "index.ejs";
     sessionStorage.setItem('token', 0);
}
const redirect = (id) => {
     switch (id) {
          case 'reportes':
               window.location.href = `${id}.ejs`;
               break;
          case 'productos':
               window.location.href = `${id}.ejs`;
               break;
          case 'clientes':
               window.location.href = `${id}.ejs`;
               break;
          case 'ventas':
               window.location.href = `${id}.ejs`;
               break;
          case 'config':
               window.location.href = `${id}.ejs`;
               break;
          case 'menu':
               window.location.href = `${id}.ejs`;
               break;
          case 'info':
               window.location.href = `${id}.ejs`;
               break;
          default:
               window.location.href = "index.ejs";
               break;
     }
}

const validarToken = async () => {
     const response = await fetch(url.apiuser + 'validarToken', {
          method: 'GET',
          headers: {
               'Content-Type': 'application/json',
               'token': sessionStorage.getItem("token")
          }
     });
     return response.json();
}

const btnMenu = document.getElementById("btnMenu");

if (btnMenu) {
     btnMenu.onclick = () => {
          const sideBar = document.getElementById("sideBar");
          const contentPage = document.getElementById("contentPage");
          const sideBarHasClass = sideBar.classList.contains('d-none');

          if (sideBarHasClass) {
               sideBar.classList.remove("d-none");
               sideBar.classList.add("col-md-2");
               contentPage.classList.remove('col-md-12');
               contentPage.classList.add('col-md-10');

          } else {
               sideBar.classList.remove("col-md-2");
               sideBar.classList.add("d-none");
               contentPage.classList.add('col-md-12');
               contentPage.classList.remove('col-md-10');

          }

     };

}



