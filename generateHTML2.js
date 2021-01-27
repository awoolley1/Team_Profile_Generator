
function generateHTML(responses, responseArray) {

  // var lastDisplay;
  // if (studentType=="Manager"){
  //   lastDisplay="Office Number:"
  // } else if (studentType=="Engineer"){
  //   lastDisplay="GitHub Username:"
  // } else if (studentType=="Intern"){
  //   lastDisplay="School Attending:"
  // }


for (let i = 0; i < responseArray.length; index++) {

  if(responseArray[i] instanceof Manager) {
    displayManager()
  } else if (responseArray[i] instanceof Engineer) {
    displayEngineer() 
  } else if (responseArray[i] instanceof Intern) {
    displayIntern() 
  }



    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    </head>
    <body>
        <div class="card" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">Name: ${responseArray[i]}</h5>
              <p class="card-text">Role: </p>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">ID: ${responseArray[(i+1)]}</li>
              <li class="list-group-item"><a href = "mailto: ${responseArray[(i+2)]}">Email: ${responseArray[(i+2)]}</a></li>
              <li class="list-group-item">Other: ${responseArray[(i+3)]}</li>
            </ul>
          </div>
    
          <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
          <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
        </body>
    </html>
  `;
  }
}



// displayManager() {
//   `
//   <div class="card" style="width: 18rem;">
//             <div class="card-body">
//               <h5 class="card-title">Name: ${responseArray[i]}</h5>
//               <p class="card-text">Role: </p>
//             </div>
//             <ul class="list-group list-group-flush">
//               <li class="list-group-item">ID: ${responseArray[(i+1)]}</li>
//               <li class="list-group-item"><a href = "mailto: ${responseArray[(i+2)]}">Email: ${responseArray[(i+2)]}</a></li>
//               <li class="list-group-item">Other: ${responseArray[(i+3)]}</li>
//             </ul>
//           </div>
//           `
// }

// displayEngineer(){
//   `
//   <div class="card" style="width: 18rem;">
//             <div class="card-body">
//               <h5 class="card-title">Name: ${responseArray[i]}</h5>
//               <p class="card-text">Role: </p>
//             </div>
//             <ul class="list-group list-group-flush">
//               <li class="list-group-item">ID: ${responseArray[(i+1)]}</li>
//               <li class="list-group-item"><a href = "mailto: ${responseArray[(i+2)]}">Email: ${responseArray[(i+2)]}</a></li>
//               <li class="list-group-item">Other: ${responseArray[(i+3)]}</li>
//             </ul>
//           </div>
//           `
// }

// displayIntern() {
//   `
//   <div class="card" style="width: 18rem;">
//             <div class="card-body">
//               <h5 class="card-title">Name: ${responseArray[i]}</h5>
//               <p class="card-text">Role: </p>
//             </div>
//             <ul class="list-group list-group-flush">
//               <li class="list-group-item">ID: ${responseArray[(i+1)]}</li>
//               <li class="list-group-item"><a href = "mailto: ${responseArray[(i+2)]}">Email: ${responseArray[(i+2)]}</a></li>
//               <li class="list-group-item">Other: ${responseArray[(i+3)]}</li>
//             </ul>
//           </div>
//           `
// }

module.exports = generateHTML;