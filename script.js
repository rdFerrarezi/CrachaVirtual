const LinksSocialMedia = {
    github:"rdFerrarezi",
    youtube:"UCvIm95EbndZpEnCaQ6i1i6Q",
    facebook:"rodrigo.ferrarezzi.188",
    instagram:"rodrigoferrarezzi",
    twitter:""
}

function changeSocialMediaLinks(){
    // document.getElementById('userName').textContent = 'Rodrigo'

    // acesso elemento pelo id de forma simplificada
    // userName.textContent = 'Rodrigo'

    for(let li of socialLinks.children){
        const social = li.getAttribute('class')
        // alert(social)
        li.children[0].href = `https://${social}.com.br/${LinksSocialMedia[social]}`
        // alert(li.children[0].href)
    }
}

changeSocialMediaLinks()

function getGitHubProfileInfos(){
    const url = `https://api.github.com/users/${LinksSocialMedia.github}`
    
    // alert(url)
    fetch(url)
    .then(response => response.json())
    .then(data =>{
        userName.textContent = data.name
        userBio.textContent = data.bio
        userLink.href = data.html_url
        userImage.src = data.avatar_url
        userLogin.textContent = data.login
    })
}

getGitHubProfileInfos()