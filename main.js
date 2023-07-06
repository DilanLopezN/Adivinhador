


const btn = document.getElementById('btnAdvinhar')

btn.addEventListener("click", () => {
  const inpt = document.getElementById('inputBtn').value
  const loader = document.getElementById('loader')
  const loaderText = document.getElementById('loaderText')
  


  var pElement = document.createElement("p");

  pElement.textContent = "Calculando...";

  let interval = false;

  loaderText.appendChild(pElement);
  setTimeout(() => {
    loaderText.parentNode.removeChild(loaderText);
    loader.style.display = "block";
  }, 3000)


  
      setInterval(() => {
        loader.style.display = "none";
        alert(`O VALOR DIGITADO FOI ${inpt}`)
      }, 7000)
    
      

})