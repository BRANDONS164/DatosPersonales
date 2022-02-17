const API ="https://jsonplaceholder.typicode.com/users"


const getData = (api) => {
 return fetch(api)
   .then((response) => response.json())
   .then((json) => {
       llenarDatos(json);
   })
   .catch((error) => {
       console.log("Error, error");
   });
   
    

};

const llenarDatos = (data) => {
 let html ="";
 
 data.forEach((pj) => {

html += <div class="card" style="width: 18rem;">
html += <ul class="list-group list-group-flush">
html += <li class="list-group-item">${name}</li>
html += <li class="list-group-item">${email}</li>
html += <li class="list-group-item">${town}</li>

 </ul>
</div>

 });
 document.getElementById("datosPersonales").innerHTML = html;
};



getData(API);

