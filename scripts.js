const BOUNTIES = [
  {
    "title": "RSA bounties",
    "link": "https://rsa.cash/bounties",
    "description": "For the Verifiable Delay Function (VDF) project, the RSA Low Order and Adaptive Root assumptions have come into spotlight as they are required for the two VDF proof construction. Several bounties are available for proving or disproving the assumptions.",
    "setter": "Ethereum Foundation",
    "amount": "$36,000 USD and 29 ETH",
  },
  {
    "title": "Legendre PRF Bounties",
    "link": "https://legendreprf.org/bounties",
    "description": "We are interested in how resistant the Legendre pseudo-random function is to key recovery attacks, as well as any other interesting results on the Legendre PRF.",
    "setter": "Ethereum Foundation",
    "amount": "$31,000 USD and 31 ETH",
  },
  {
    "title": "Ethereum Bounty Program",
    "link": "https://bounty.ethereum.org/",
    "description": "Bounties for finding vulnerabilities in core Ethereum infrastructure",
    "setter": "Ethereum Foundation",
    "amount": "Up to $25,000 USD per instance (critical bugs)",
  },
  {
    "title": "Eth2 Bug Bounty Program",
    "link": "https://ethereum.org/en/eth2/get-involved/bug-bounty/",
    "description": "Bounties for finding vulnerabilities in the Eth2 specs and clients",
    "setter": "Ethereum Foundation",
    "amount": "Up to $100,000 USD per instance (critical bugs)",
  }
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
