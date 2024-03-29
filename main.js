const input = document.querySelector(".input")
input.addEventListener('keyup', (e) => {
    if (e.keyCode == 13) {

        console.log(e.target.value)
        let req = new XMLHttpRequest;
        req.open('GET', `https://api.github.com/users/${e.target.value}`)
        req.onload = () => {
            obj = (JSON.parse(req.response))
            if (obj.public_repos == undefined) {
                let cardA = document.querySelector(".side-b")
                let name = document.createElement("a")
                name.textContent = "userid not found"
                cardA.innerHTML = ""
                cardA.append(name)
            } else {
            let cardA = document.querySelector(".side-b")
            cardA.innerHTML = ""
                // cardA.innerHTML=`<img src="${obj.avatar_url}">
                // <a>${obj.name}</a>
                // <p>${obj.location}</p>`
            let img = document.createElement("img")
            img.setAttribute("src", obj.avatar_url)
            let name = document.createElement("a")
            name.textContent = obj.name
            let location = document.createElement("p")
            location.textContent = obj.location
            let h1 = document.createElement("h1")
            h1.textContent = "Repo Followers following"
            let h2 = document.createElement("h2")
            h2.textContent = `${obj.public_repos} ${obj.followers} ${obj.following}`
            cardA.append(img, name, location, h2, h1)
            return points1 = (obj.public_repos + obj.followers) / 2
        }}
        req.send();
    }
})

const input2 = document.querySelector(".input2")
input2.addEventListener('keyup', (e) => {
    if (e.keyCode == 13) {
        console.log(e.target.value)
        let req = new XMLHttpRequest;
        req.open('GET', `https://api.github.com/users/${e.target.value}`)
        req.onload = () => {
            obj = (JSON.parse(req.response))
            if (obj.public_repos == undefined) {
                let cardB = document.querySelector(".side-c")
                let name = document.createElement("a")
                name.textContent = "userid not found"
                cardB.innerHTML = ""
                cardB.append(name)
            } else {
            let cardB = document.querySelector(".side-c")
            cardB.innerHTML = ""
                // cardA.innerHTML=`<img src="${obj.avatar_url}">
                // <a>${obj.name}</a>
                // <p>${obj.location}</p>`
            let img = document.createElement("img")
            img.setAttribute("src", obj.avatar_url)
            let name = document.createElement("a")
            name.textContent = obj.name
            let location = document.createElement("p")
            location.textContent = obj.location
            let h1 = document.createElement("h1")
            h1.textContent = "Repo Followers following"
            let h2 = document.createElement("h2")
            h2.textContent = `${obj.public_repos} ${obj.followers} ${obj.following}`
            cardB.append(img, name, location, h2, h1)
            return points2 = (obj.public_repos + obj.followers) / 2
        }}
        req.send();
    }
})
let battle = document.querySelector(".a")
battle.addEventListener('click', (e) => {
    if (points1 > points2) {
        let cardA = document.querySelector(".side-a");
        cardA.className = "winner"
    } else if (points1 == points2) {
        let cardA = document.querySelector(".side-a");
        cardA.className = "winner"
        let cardB = document.querySelector(".side-d");
        cardB.className = "winner"
    } else {
        let cardB = document.querySelector(".side-d");
        cardB.className = "winner"
    }
})