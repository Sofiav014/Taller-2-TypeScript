import { dataSeries } from './dataSeries.js';
var seriesTbody = document.getElementById('series'); // Nodo tbody que tiene el id="series"
renderCoursesInTable(dataSeries);
getAverageSeasons(dataSeries);
function renderCoursesInTable(series) {
    series.forEach(function (s) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(s.id, "</td>\n                           <td style=\"color: #0051ff;\"><a href=\"#\" style=\"text-decoration: none\">").concat(s.name, "</a></td>\n                           <td>").concat(s.channel, "</td>\n                           <td>").concat(s.season, "</td>");
        seriesTbody.appendChild(trElement);
        // trElement.addEventListener('click', () => renderCardInfo(s));
        trElement.children[1].children[0].addEventListener('click', function () { return renderCardInfo(s); });
    });
}
function getAverageSeasons(series) {
    var totalSeasons = 0;
    var averageSeasons = document.getElementById("season-average");
    series.forEach(function (s) { (totalSeasons += s.season); });
    averageSeasons.innerHTML = "".concat((totalSeasons / series.length));
}
function renderCardInfo(serie) {
    var c = serie;
    var cardBody = document.getElementById("cards");
    cardBody.innerHTML = "<div class=\"card\" style=\"text-align: justify; width: 30rem;\">\n                          <img src=\"".concat(c.image, "\" alt=\"").concat(c.name, "\">\n                          <div class=\"card-body\">\n                            <h5 class=\"card-title\"><strong>").concat(c.name, "</strong></h5>\n                            <p class=\"card-text\">").concat(c.summary, "</p>\n                            <a href=\"").concat(c.link, "\" target = \"_blank\" style=\"text-decoration: none\"<span>").concat(c.link, "</span></a>\n                          </div>\n                        </div>");
}
