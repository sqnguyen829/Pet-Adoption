let hideList = false
let hideSurrender = true

const animalURL = 'http://localhost:3000/api/v1/animals/'

document.addEventListener('DOMContentLoaded', () => {

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

            const inputBreed = document.createElement('input')
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

            const br7 = document.createElement('br')

            inputAnimalName.value = ""
            inputAnimalName.placeholder = "Enter a name..."

            inputSpecies.value = ""
            inputSpecies.placeholder = "Enter a Species..."


            inputBreed.value = ""
            inputBreed.placeholder = "Enter a breed..."

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
                event.preventDefault()
                // debugger 
                let animalName = event.target[0].value
                let species = event.target[1].value
                let breed = event.target[2].value
                let image = event.target[3].value
                let gender = event.target[4].value
                let age = event.target[5].value
                let desc = event.target[6].value
                form.reset()
                fetch(animalURL, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        "animal":{
                            "name": animalName,
                            "species": species,
                            "breed": breed,
                            "image": image,
                            "gender": gender,
                            "age": age,
                            "status": "Availible",
                            "description": desc}
                    })
                })
                .then(res => res.json())
                .then(newAnimal => {
                    console.log(newAnimal)
                })
            })

            form.append(inputAnimalName,br1,inputSpecies,br2,inputBreed,br3,inputImage,br4,inputGender,br5,inputAge,br6,inputDesc,br7,surSubmit)
            surrenderDiv.append(form)
    
        }else {
            while(surrenderDiv.firstChild){
                surrenderDiv.removeChild(surrenderDiv.firstChild)
            }
            animalList.style.display = 'block'
            console.log("show list")
        }
    })


            inputAge.value = ""
            inputAge.placeholder = "Enter a age..."

            inputDesc.value = ""
            inputDesc.placeholder = "Enter a description..."

            surSubmit.type = "submit"
            surSubmit.name = "submit"

            surSubmit.innerText = "Surrender Animal"
            surSubmit.className = "submit"
            form.addEventListener('submit', () => {
                console.log('hello')
            })

            form.append(inputAnimalName, br1, inputSpecies, br2, inputImage, br3, inputGender, br4, inputAge, br5, inputDesc, br6, surSubmit)
            surrenderDiv.append(form)

        } else {
            while (surrenderDiv.firstChild) {
                surrenderDiv.removeChild(surrenderDiv.firstChild)
            }
            animalList.style.display = 'block'

            console.log("show list")
        }


    })

    ////////////////////////   Sign In Starts Here  //////////////////////////////////////////
    const signInForm = document.querySelector('#sign-in-form')

    signInForm.addEventListener('submit', () => {
        event.preventDefault()


        fetch('http://localhost:3000/api/v1/users')

            .then(res => res.json())
            .then(users => {
                // users.forEach(data => displayUserOnNavBar(data))
                displayUserOnNavBar(users)
            })

        function displayUserOnNavBar(user) {
            let chosenUser = user.filter(u => u.user_name === signInForm[0].value)
            console.log(chosenUser)
            const loginBarNameIl = document.querySelector('#login-bar-name')

            if (chosenUser.length == 1) {
                const pUsername = document.createElement('p')
                const dropdownFormSignIn = document.querySelector('#dropdownFormSignIn')
                const navbarDropdownMenuLink = document.querySelector('#navbarDropdownMenuLink')
                const navbarDropdownMenuLinkSignUp = document.querySelector('#navbarDropdownMenuLinkSignUp')
                pUsername.className = 'nav-link'

                const spanUsername = document.createElement('span')
                spanUsername.innerText = 'Hello, ' + chosenUser[0].first_name + '!'
                spanUsername.className = 'text-success'

                pUsername.append(spanUsername)
                loginBarNameIl.append(pUsername)

                dropdownFormSignIn.style.display = "none";
                navbarDropdownMenuLink.style.display = "none";
                navbarDropdownMenuLinkSignUp.style.display = "none";


            } else {
                const errorMessageForm = document.querySelector('#error-message-form')

                const pFormSingIn = document.createElement('p')
                pFormSingIn.innerText = "Wrong Username"
                pFormSingIn.className = "text-danger"

                errorMessageForm.append(pFormSingIn)
            }


        } ////////////// Sign In Finshes Here /////////// 

        













    })





}) // closing for the DOMLoaded
