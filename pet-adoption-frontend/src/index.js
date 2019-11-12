document.addEventListener('DOMContentLoaded', () => {
fetch('http://localhost:3000/api/v1/animals')
.then(res => res.json())
.then(animals => {
    animals.forEach(animal => showAnimals(animal))
let hideList = false
let hideSurrender = true

const animalURL = 'http://localhost:3000/api/v1/animals/'

const surTab = document.querySelector('#surrender')
const surSubmit = document.createElement('button')
const animalList = document.querySelector('#animal-list')
const surrenderDiv = document.querySelector('#surrenderDiv')

fetch(animalURL)
.then(res => res.json())
.then(animalData => {
    console.log(animalData)
    // animalData.forEach(animal => showAnimals(animal))
})

// function showAnimals(animal){
//     const ul = document.querySelector('#populate-this-list')

//     const petLi = document.createElement('li')

//     const statBtn = document.createElement('button')
//     statBtn.innerText = animal.status

//     statBtn.addEventListener('click', (event)=>{
        
//     })
    
// }


surTab.addEventListener("click", ()=>{
    hideList = !hideList
    if (hideList) {
        animalList.style.display = 'none'

        const form = document.createElement("form")
        const inputAnimalName = document.createElement('input')
        const inputSpecies = document.createElement('input')
        const inputImage = document.createElement('input')
        const inputGender = document.createElement('input')
        const inputAge = document.createElement('input')
        const inputDesc = document.createElement('input')
        const surSubmit = document.createElement('button')

        const br1 = document.createElement('br')
        const br2 = document.createElement('br')
        const br3 = document.createElement('br')
        const br4 = document.createElement('br')
        const br5 = document.createElement('br')
        const br6 = document.createElement('br')

        inputAnimalName.value = ""
        inputAnimalName.placeholder = "Enter a name..."

        inputSpecies.value = ""
        inputSpecies.placeholder = "Enter a Species..."
        inputSpecies.br

        inputImage.value = ""
        inputImage.placeholder = "Enter a imgae url..."

        inputGender.value = ""
        inputGender.placeholder = "Enter a gender..."

        inputAge.value = ""
        inputAge.placeholder = "Enter a age..."

        inputDesc.value = ""
        inputDesc.placeholder = "Enter a description..."

        surSubmit.type = "submit"
        surSubmit.name = "submit"

        surSubmit.innerText = "Surrender Animal"
        surSubmit.className = "submit"
        form.addEventListener('submit', ()=>{
            console.log('hello')
        //     fetch("http://localhost:3000/toys", {
        //          method: "POST",
        //          headers: {
        //              "Content-Type": "application/json"
        //          },
        //          body: JSON.stringify({
        //              "name": toyName,
        //              "image": toyURL,
        //              "likes": 0
        //          })
        //     })
        //     .then(res => res.json())
        //     .then(newToy => {
        //          renderToy(newToy)
        //  })
        })

        form.append(inputAnimalName,br1,inputSpecies,br2,inputImage,br3,inputGender,br4,inputAge,br5,inputDesc,br6,surSubmit)
        surrenderDiv.append(form)
    
}


// Fernando - Login form

    const signInForm = document.querySelector('#sign-in-form') 

    signInForm.addEventListener('submit', () => {
        event.preventDefault()

        fetch('http://localhost:3000/api/v1/users')
        .then(res => res.json())
        .then(users => {
            console.log(users)
        })


    })


})





    } else {
        while(surrenderDiv.firstChild){
            surrenderDiv.removeChild(surrenderDiv.firstChild)
        }
        animalList.style.display = 'block'
        
        console.log("show list")
    }
})

