function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    if (social == 'linkedin') {
      li.children[0].href = `https://${social}.com/in/${linksSocialMedia[social]}`
    } else {
      li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
    }
  }
}

const linksSocialMedia = {
  github: 'dylangolvim',
  instagram: 'dylan.golvim',
  linkedin: 'adryan-golvim'
}

changeSocialMediaLinks()

function getGithubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGithubProfileInfos()
