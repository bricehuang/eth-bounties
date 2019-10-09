const BOUNTIES = [
  {
    "title": "Legendre PRF Bounties",
    "link": "https://legendreprf.org/bounties",
    "description": "",
    "setter": "Ethereum Foundation",
    "amount": "$14,000 USD",
  },
];

$.each(BOUNTIES, function(i, bounty){
  $('.bounties-container').append(
    "<div class='bounty' onclick='location.href = \"" + bounty.link + "\" ;' >" +
      "<h3>" + bounty.title + "</h3>" +
      "<p>" + bounty.description + "</p>" +
      "<div class='bounty-metadata'><p>Posted By: " + bounty.setter + "<br>" +
      "Total Bounty: " + bounty.amount + "</p></div>" +
    "</div>"
  );
});

$(document).ready(function () {
  $('div.bounty').hover(
      function () {
        $('p', this).toggleClass('desc-active');
        $('h3', this).toggleClass('desc-active');
        $(this).toggleClass('bounty-active');
      });
});