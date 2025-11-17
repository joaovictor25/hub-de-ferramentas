async function analisarEndereco(url){ 
    const key = '' 
    const api = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${url}&key=${key}`
    
    const response = await fetch(api) 
    const data = await response.json() 
    console.log(data.lighthouseResult.categories.performance.score * 100) 
} 

async function passarParametro(){ 
    const url = document.getElementById('url').value 
    const info = await analisarEndereco(url) 
}