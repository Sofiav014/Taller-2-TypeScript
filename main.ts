import { Serie } from './serie.js';
import { dataSeries } from './dataSeries.js';

const seriesTbody: HTMLElement = document.getElementById('series')!; // Nodo tbody que tiene el id="series"

renderCoursesInTable(dataSeries);
getAverageSeasons(dataSeries);

function renderCoursesInTable(series: Serie[]): void {
  series.forEach(s => {
    let trElement = document.createElement("tr");
    trElement.innerHTML = `<td>${s.id}</td>
                           <td style="color: #0051ff;"><a href="#" style="text-decoration: none">${s.name}</a></td>
                           <td>${s.channel}</td>
                           <td>${s.season}</td>`;
    seriesTbody.appendChild(trElement);
    
    // method 1: click row
    // trElement.addEventListener('click', () => renderCardInfo(s)); 

    // method 2: click name of the serie
    trElement.children[1].children[0].addEventListener('click', () => renderCardInfo(s));
  });  
}


function getAverageSeasons(series: Serie[]): void {
  let totalSeasons: number = 0;
  let averageSeasons: HTMLElement = document.getElementById("season-average")!;
  series.forEach((s) => {(totalSeasons += s.season)});
  averageSeasons.innerHTML = `${(totalSeasons / series.length)}`;
}

function renderCardInfo(serie: Serie): void {
  let c = serie;
  let cardBody: HTMLElement = document.getElementById("cards")!;
  cardBody.innerHTML = `<div class="card" style="text-align: justify; width: 30rem;">
                          <img src="${c.image}" alt="${c.name}">
                          <div class="card-body">
                            <h5 class="card-title"><strong>${c.name}</strong></h5>
                            <p class="card-text">${c.summary}</p>
                            <a href="${c.link}" target = "_blank" style="text-decoration: none"<span>${c.link}</span></a>
                          </div>
                        </div>`;
}