

function _post(produto){

    
    // selecionando objetos html
   console.log(produto)
    let url = "http://localhost/inserir.php"
    fetch(url,{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
          },
          body:JSON.stringify(produto)
    })
    .then(function (response) {
        return response.text()
    })
    .then(function (response) {
        console.log(response)
    })
}
export default _post;