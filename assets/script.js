let form = document.querySelector('form');
let input = document.querySelector('input');
let personagem;

form.addEventListener('submit', (event)=>{
  event.preventDefault();
  personagem = input.value;
  input.value = '';
  star(personagem);

})


function startAnim(){
  anakin = document.querySelector('.image-left img');
  anakin.style = ' opacity: 1; transform: translateX(0); ';

}

startAnim()


async function star(perso){
    if(isnumber(perso) === true){
      fetch('https://swapi.py4e.com/api/people/' + perso)
      .then(response => response.json())
      .then(data => update(data))
      
      .catch(error => console.error(error));
    }
    else {
      fetch('https://swapi.py4e.com/api/people/?search=' + perso)
      .then(response =>  response.json())
      .then( data => update(data))
      
      .catch(error => console.error(error));
    }
    document.querySelector('.perso-name').innerHTML = 'Carregando...';
    document.querySelector('.perso-height').innerHTML = 'Carregando...';
    document.querySelector('.perso-weight').innerHTML = 'Carregando...';
    document.querySelector('.perso-gender').innerHTML = 'Carregando...';
    document.querySelector('.perso-name').innerHTML = 'Carregando...';
}

function isnumber(perso){
    return !isNaN(perso);
}

function update(data){
  if (data){
    let height = data.height;

      if(data.gender == 'female'){
        data.gender = 'Feminino';
      }
      if(data.gender == 'n/a'){
        data.gender = 'Sem Gênero';
      }
      if(data.gender == 'male'){
        data.gender = 'Masculino';
        
      }
      document.querySelector('.perso-height').innerHTML = 'Altura: ' + height +'cm';
      document.querySelector('.perso-weight').innerHTML = 'Peso: ' + data.mass +'kg';
      document.querySelector('.perso-gender').innerHTML = 'Gênero: ' + data.gender;
      document.querySelector('.perso-name').innerHTML = 'Nome: ' +data.name;
      
  }
  if(data.results){

    if(data.results[0].gender == 'female'){
      data.results[0].gender = 'Feminino';
    }
    if(data.results[0].gender == 'n/a'){
      data.results[0].gender = 'Sem Gênero';
    }
    if(data.results[0].gender == 'male'){
      data.results[0].gender = 'Masculino'
    }
      document.querySelector('.perso-name').innerHTML = 'Nome: ' +data.results[0].name;
      document.querySelector('.perso-height').innerHTML = 'Altura: ' + data.results[0].height +'cm';
      document.querySelector('.perso-weight').innerHTML = 'Peso: ' + data.results[0].mass +'kg';
      document.querySelector('.perso-gender').innerHTML = 'Gênero: ' + data.results[0].gender;

  }
  
}



let mover1 = document.querySelector('.mover:nth-child(1)')
let mover2 = document.querySelector('.mover:nth-child(2)')
let mover3 = document.querySelector('.mover:nth-child(3)')
let slider = document.querySelector('.slider-movies')
let page = 0;

mover1.addEventListener('click', () => {
  slider.style = 'margin-left: 10px';
  mover1.classList.add('selected'); 
  if(page > 0){
    mover2.classList.remove('selected');
    mover3.classList.remove('selected');

  }
  page = 0;
});
mover2.addEventListener('click', () => {
  slider.style.marginLeft = '-636px'
  if(page == 0 || page == 2){
    mover1.classList.remove('selected');
    mover3.classList.remove('selected');
  }
  mover2.classList.add('selected');
  page = 1;
});
mover3.addEventListener('click', () => {
  if(page == 0 || page == 1){
    mover1.classList.remove('selected');
    mover2.classList.remove('selected');
  }
  mover3.classList.add('selected');
  slider.style.marginLeft = '-1260px'
  page = 2;
});


document.querySelectorAll('.slider').forEach(slider => {
  slider.addEventListener('click', () => {
    if (slider === document.querySelector('.slider:nth-child(1)')) {
      url = 'https://swapi.py4e.com/api/films/4/';
      imgsrc = 'assets/star wars 1.jpg';
    } 
    if (slider === document.querySelector('.slider:nth-child(2)')) {
      url = 'https://swapi.py4e.com/api/films/5/';
      imgsrc = 'assets/star wars 2.jpg';
    } 
    if (slider === document.querySelector('.slider:nth-child(3)')) {
      url = 'https://swapi.py4e.com/api/films/6/';
      imgsrc = 'assets/star wars 3.jpg';
    } 
    if (slider === document.querySelector('.slider:nth-child(4)')) {
      imgsrc = 'assets/star wars 4.jpg';
    } 
    if (slider === document.querySelector('.slider:nth-child(5)')) {
      imgsrc = 'assets/star wars 5.jpg';
    } 
    if (slider === document.querySelector('.slider:nth-child(6)')) {
      imgsrc = 'assets/star wars 6.jpg';
      url = 'https://swapi.py4e.com/api/films/1/';
    } 
    if (slider === document.querySelector('.slider:nth-child(7)')) {
      imgsrc = 'assets/star wars 7.jpg';
      url = 'https://swapi.py4e.com/api/films/2/';
    } 
    if (slider === document.querySelector('.slider:nth-child(8)')) {
      imgsrc = 'assets/star wars 8.jpg';
      url = 'https://swapi.py4e.com/api/films/3/';
    } 
    if (slider === document.querySelector('.slider:nth-child(9)')) {
      imgsrc = 'assets/star wars 9.jpg';
      url = 'https://swapi.py4e.com/api/films/7/';
    } 
           
            fetch(url)
              .then(response => response.json())
              .then(data => movieupdate(data, imgsrc))
              
              .catch(error => console.error(error));
             
  });
});


function movieupdate(data, imgsrc){
  document.querySelector('.movie-picture img').src = imgsrc;
  if(data){
    document.querySelector('.movie-about h2').innerHTML = data.title;
    document.querySelector('.movie-about h4').innerHTML = data.release_date;
    document.querySelector('.opening').innerHTML = data.opening_crawl;
  }

}