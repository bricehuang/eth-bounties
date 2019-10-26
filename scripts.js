const BOUNTIES = [
  {
    "title": "Legendre PRF Bounties",
    "link": "https://legendreprf.org/bounties",
    "description": "We are interested in how resistant the Legendre pseudo-random function is to key recovery attacks, as well as any other interesting results on the Legendre PRF.",
    "setter": "Ethereum Foundation",
    "amount": "$14,000 USD",
  },
  {
    "title": "MiMC Hash Challenge",
    "link": "http://mimchash.org/",
    "description": "Rewards for finding collisions in the MiMCSponge hash function.",
    "setter": "Ethereum Foundation, Protocol Labs",
    "amount": "$30,000 USD",
  },
  {
    "title": "Lorem ipsum dolor...",
    "link": "https://loremipsum.io",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget arcu dictum varius duis at consectetur lorem donec. A iaculis at erat pellentesque. Et tortor at risus viverra adipiscing at in.",
    "setter": "Lorem ipsum",
    "amount": "$12 USD",
  },
];

$.each(BOUNTIES, function(i, bounty){
  $('.bounties-container').append(
    "<div class='bounty' onclick='location.href = \"" + bounty.link + "\" ;' >" +
      "<h3>" + bounty.title + "</h3>" +
      "<p>" + bounty.description + "</p>" +
      "<p><strong>Posted By:</strong> " + bounty.setter + "<br>" +
      "<strong>Total Bounty:</strong> " + bounty.amount + "</p>" +
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