const BOUNTIES = [
  {
    "title":"Legendre PRF Bounties",
    "link":"https://legendreprf.org/bounties",
    "description":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    "setter":"Ethereum Foundation",
    "amount":"$14,000 USD",
  },
];

$.each(BOUNTIES, function(i, bounty){
  $('.bounties-container').append(
    "<div class='bounty' onclick='location.href =" + bounty.link + " ;' >" +
      "<h3>" + bounty.title + "</h3>" +
      "<p>" + bounty.description + "</p>" +
      "<p class='bounty-setter'>Posted By: " + bounty.setter + "</p>" +
      "<p class='bounty-amount'>Total Bounty: " + bounty.amount + "</p>" +
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