const BOUNTIES = [
  {
    "title": "Legendre PRF Bounties",
    "link": "https://legendreprf.org/bounties",
    "description": "We are interested in how resistant the Legendre pseudo-random function is to key recovery attacks, as well as any other interesting results on the Legendre PRF.",
    "setter": "Ethereum Foundation",
    "amount": "$14,000 USD",
  },
  {
    "title": "A Conjecture of Bernhard Riemann",
    "link": "https://www.claymath.org/millennium-problems/riemann-hypothesis",
    "description": "It is widely believed that the zeroes of the Riemann zeta function lie on the line Re(z) = 1/2. Prove or disprove this conjecture.",
    "setter": "Clay Mathematics Institute",
    "amount": "$1,000,000 USD",
  },
  {
    "title": "P ?= NP",
    "link": "http://www.claymath.org/millennium-problems/p-vs-np-problem",
    "description": "P is the set of languages that are decidable by a Turing Machine in polynomial time, and NP is the set of languages that are decidable by a non-deterministic Turing Machine in polynomial time. Do these complexity classes coincide?",
    "setter": "Clay Mathematics Institute",
    "amount": "$1,000,000 USD",
  },
  {
    "title": "A Very Simple Function Applied to Positive Integers Sequentially",
    "link": "https://en.wikipedia.org/wiki/Collatz_conjecture",
    "description": "Take any positive integer n. If it is even, divide it by two. If it is odd, multiply it by three and add one. Repeat this procedure ad infinitum. Is it true for all n that you arrive at 1 in finitely many steps?",
    "setter": "Paul Erdos",
    "amount": "$500 USD",
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