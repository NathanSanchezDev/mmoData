document.querySelector('button').addEventListener('click', fetchData);

async function fetchData() {
    const gameVal = document.querySelector('input').value;
    const url = `https://mmo-games.p.rapidapi.com/game?id=${gameVal}`;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '0a4683f422mshe297145f98abd69p116cf2jsn9536d462fc16',
        'X-RapidAPI-Host': 'mmo-games.p.rapidapi.com'
      }
    };
  
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      
      const descriptionElement = document.createElement('div');
      descriptionElement.innerHTML = result.description;
      const descriptionText = descriptionElement.textContent || descriptionElement.innerText;
      
      console.log(result.title);
      console.log(descriptionText); // This should print the description without HTML tags
    } catch (error) {
      console.error(error);
    }
}
