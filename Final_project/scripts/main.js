const url = "https://swapi.dev/api/";


// debugger;

function website (url, id) {
    fetch(url)
    .then((response) => {
    if(response.ok) {
    return response;
    }
    throw Error(response.statusText);
    })
    .then( response => response.json())
    .then(jsObject => {

        console.table(jsObject.next);
        console.log(`url = ${id}`);
		console.log(`test ${url.includes(`vehicles/\d/`)}`);
				
		if (id === 'data') {
			console.log('DATA');
			if (url.includes(`vehicles`)) {
				console.log('vehicles');	
				viewIndiv(jsObject, 'vehicles')			
			} else if (url.includes(`films`)) {
				console.log('films');
				viewIndiv(jsObject, 'films')
			} else if (url.includes(`people`)) {
				console.log('people');
				viewIndiv(jsObject, 'people')
			} else if (url.includes(`starships`)) {
				console.log('starships');
				viewIndiv(jsObject, 'starships')
			} else if (url.includes(`species`)) {
				console.log('species');
				viewIndiv(jsObject, 'species')
			}
	 	// } else if (id === 'recursive') { 
		// 	console.log('Next page');
		// 	return jsObject.results
		} else {
			console.log('ELSE');
			console.log(url);
			viewPage(jsObject.results, id, jsObject.next);
		}
    })
    .catch( error => console.log('There was an error!', error) );
}

function viewIndiv(obj, id) {
	let div = document.getElementById('swapi');
	div.innerHTML = '';
	let list = '';
	let span = document.createElement('span');
	let ul = document.createElement('ul');

	let count = 0;
  
	div.appendChild(span);
	span.appendChild(ul);
  
	// console.log('id', id);
	list += `<li><h4>${id.toUpperCase()}</h4></li>`;
	// name, model, vehicle_class, manufacturer, length, cost_in_credits, crew, passengers, max_atmoshpere_speed, cargo_capacity
	Object.keys(obj).forEach((key/*:string*/) => {
		if (obj[key] != undefined) {
			if (key != 'created' && key != 'edited' & key != 'url') {
				let value = obj[key]
				list += `<li>${key.toLocaleUpperCase()}: </li><li>${value.toString().replace('_', ' ')}</li><br>`
			} else {
				console.log(key,obj[key])
			}
		}
	})
	ul.innerHTML = list;
	// paginations()
}

let pagecount = 1
let list = '';
let count = 0;
let div = document.getElementById('swapi');
let span = document.createElement('span');
let ul = document.createElement('ul');
div.innerHTML = '';



// Functional for the main viewPage list
function viewPage(obj, id, r2d2) {

	div.appendChild(span);
	span.appendChild(ul);
	if (r2d2 != undefined) {
		// console.log('id', id);
		list += `<li><h4>${id.toUpperCase()}</h4></li>`;

		obj.forEach((x) => {
			let chewy = (id =='films') ? x.title : x.name;
			console.log('chewy', chewy, id, x.url);
			let https = insertSecure(x.url)
			
			list += `
			<li id='${count}' class='data' data-site='${https}'>${chewy}</li>
			`;
			count++;
		});
		console.log(r2d2.next);
		obj,r2d2 = website(r2d2, id)
	}

		ul.innerHTML = list;
		// paginations(r2d2);
		refreshData();
}
// DONE
function insertSecure(url) {
  return url.slice(0, 4) + 's' + url.slice(4 + Math.abs(0));
}




// NEED TO FINISH
/*
  Fix calling the previous and next page

  Optional Idea:
    If the previous is null then don't show the left button
*/
function paginations(r2d2)  {
  let arrows = document.getElementById('pagination');
  console.log(r2d2.previous, r2d2.next);
  let directions = `
    <a href="${r2d2.previous}">
    <input class="btn btn-page" type="button" id="left" value="left"></input></a>
    <a href="${r2d2.next}">
    <input class="btn btn-page" type="button" id="right" value="right"></input></a>
  `;
  arrows.innerHTML = directions;
  let addRemoveFavorite = `
    <a href=""><input class="btn btn-page" type="button" id="addFav" value="+"></input></a>
    <a href=""><input class="btn btn-page" type="button" id="removeFav" value="-"></input></a>
  `
  arrows.innerHTML += addRemoveFavorite;
}


//setting and calling adaptive menu for app

document.querySelector(".menu_icon").addEventListener("touchend", adaptiveMenu);
// DONE
function adaptiveMenu() {
    let links = document.getElementById('navigation')
    if(links.className === "navigation") {
        links.className +=".responsive"
    } else {
        links.className ="navigation"
    } 
}

// Setting the temp url for the main page view
document.querySelectorAll('.links').forEach(item => {
    item.addEventListener('touchend', event => { 
        let temp_url = url + item.id + "/";
        console.log(temp_url);
        website(temp_url, item.id);
        adaptiveMenu();
    }
    )}); 


// Adding the data-site tag to the data and adding the event listener
function refreshData(){
document.querySelectorAll('.data').forEach(item => {
  item.addEventListener('touchend', event => { 
      console.log(item.getAttribute('data-site'))
	  let temp_url = item.getAttribute('data-site')
    //   console.log(item);
      website(temp_url, 'data');
  }
  )}); 

}