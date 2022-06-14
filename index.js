// Add your code here
// const configurationObject = {
//     method: "POST",
//     header: {
//         "Content-Type" : "application/json",
//         Accept : "application/json",
//     },
//     body : JSON.stringify({
//         dogName: "Byron",
//         dogBreed: "Poodle",
//     })
// }

// fetch("http://localhost:3000/dogs", configurationObject)
//   .then(res => res.json())
//   .then(data => console.log(data))

const submitData = (name, email) => {
    const userInfo = {name: name, email:email};
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify(userInfo)
    })
    .then(res => res.json())
    .then(data => {
        document.body.innerHTML = data.id
    })
    .catch(err => {
        
        document.body.innerHTML = err.message
    })
}


