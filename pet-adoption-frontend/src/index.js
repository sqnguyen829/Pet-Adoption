document.addEventListener('DOMContentLoaded', () => {
fetch('http://localhost:3000/api/v1/animals')
.then(res => res.json())
.then(animals => {
    animals.forEach(animal => showAnimals(animal))
})

function showAnimals(animal){
    const ul = document.querySelector('#populate-this-list')

    const petLi = document.createElement('li')

    const statBtn = document.createElement('button')
    statBtn.innerText = animal.status

    statBtn.addEventListener('click', (event)=>{
        
    })
    
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





