let fetchRequest = fetch('./data.json');

fetchRequest.then((response) => {
    return response.json()
}).then((data) => {
    // console.log(data)
    let ul = document.createElement('ul')

    data.forEach((user) => {
        let li = document.createElement('li');

        li.textContent = `${user.name} is ${user.age} years and lives in ${user.location}`

        ul.appendChild(li)
    });
    document.body.appendChild(ul)
});

let getGit = async() => {
    try {
        let res = await fetch('https://api.github.com/users/Kisotu')

        let data = await res.json()
        console.log(data)
    } catch (error) {
        console.log(error)
    }    
}
getGit()