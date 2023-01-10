const url = "http://localhost:5500/api"
const newUser = {
  name: "Olivia palito",
  avatar: "http://lorempixel.com.br/400/200/",
  city: "Rio do sul"
}
const userUpdated = {
  name: "mayk brito",
  avatar: "http://lorempixel.com.br/400/200/",
  city: "Recife"
}

function getUser(){
  axios.get(url)
  .then(response => {
    const data = response.data
    renderresults.textContent = JSON.stringify(data)
  })
  .catch(error => console.log(error))
}

getUser()

function addNewUseR(){
  axios.post(url, newUser)
  .then(response => {
    alert(JSON.stringify(response.data))
  })
  .catch(error => console.log(erro))
}

// addNewUseR()

function updateUser(){
  axios.put(`${url}/3`, userUpdated)
  .then(response => {
    alert(JSON.stringify(response.data))
  })
  .catch(error => console.log(error))
}

// delete
function deleteUser(){
  axios.delete(`${url}`/21)
  .then(response => {
    alert(JSON.stringify(response.data))
  })
  .catch(error => console.log(error))
}

deleteUser()

