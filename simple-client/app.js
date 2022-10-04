function getGreeting() {
    fetch('http://localhost:9000', {
        method: 'POST',
        body: JSON.stringify({
            query: `
                query {
                    greeting
                }
            `,
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(response => response.json()).then(data => element.textContent = data.data.greeting).catch(e => console.log(e))
}

const element = document.getElementById('greeting')
element.textContent = 'Loading ....'
getGreeting()
