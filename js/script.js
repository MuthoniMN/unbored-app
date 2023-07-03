document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value
  const url = `https://www.boredapi.com/api/activity?type=${choice}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)

        document.querySelector('h2').innerText = data.activity
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}