fetch('localhost:3000/animals')
.then(res => res.json())
.then(Animals => {
    Animals.forEach(animal => showAnimals(animal))
})

function showAnimals(animal){
    const ul = document.querySelector('#populate-this-list')

    const petLi = document.createElement('li')

    const statBtn = document.createElement('button')
    statBtn.innerText = animal.status

    statBtn.addEventListener('click', (event)=>{
        
    })
    
}