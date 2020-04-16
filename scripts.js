const BOUNTIES = [
  {
    "title": "RSA bounties",
    "link": "https://rsa.cash/bounties",
    "description": "For the Verifiable Delay Function (VDF) project, the RSA Low Order and Adaptive Root assumptions have come into spotlight as they are required for the two VDF proof construction. Several bounties are available for proving or disproving the assumptions.",
    "setter": "Ethereum Foundation",
    "amount": "$28,000 USD",
  },
  {
    "title": "Legendre PRF Bounties",
    "link": "https://legendreprf.org/bounties",
    "description": "We are interested in how resistant the Legendre pseudo-random function is to key recovery attacks, as well as any other interesting results on the Legendre PRF.",
    "setter": "Ethereum Foundation",
    "amount": "$14,000 USD and 31 ETH",
  },
  {
    "title": "MiMC Hash Challenge",
    "link": "https://mimchash.org/",
    "description": "Rewards for finding collisions in the MiMCSponge hash function.",
    "setter": "Ethereum Foundation, Protocol Labs",
    "amount": "$30,000 USD",
  },
  {
    "title": "VDF FPGA competition",
    "link": "https://supranational.atlassian.net/wiki/spaces/VA/pages/36569208/FPGA+Competition",
    "description": "In order to build a good VDF ASIC, we need to try and have the fastest algorithm for modular squaring. To this end, we are currently running a series of competitions to improve the state of the art.",
    "setter": "Supranational LLC on behalf of the VDF Alliance (Ethereum Foundation, Protocol Labs, Interchain Foundation, Tezos, Supranational)",
    "amount": "$110,000 USD",
  },
  {
    "title": "Ethereum Bounty Program",
    "link": "https://bounty.ethereum.org/",
    "description": "Bounties for finding vulnerabilities in core Ethereum infrastructure",
    "setter": "Ethereum Foundation",
    "amount": "Up to $25,000 USD per instance (critical bugs)",
  },
  {
    "title": "Eth2 Phase 0 Pre-Launch Bounty Program",
    "link": "https://notes.ethereum.org/@djrtwo/phase0-bounty",
    "description": "Bounties for finding vulnerabilities in the Eth2 Phase 0 specs",
    "setter": "Ethereum Foundation",
    "amount": "Up to $10,000 USD per instance (critical bugs)",
  },
  {
    "title": "Starkware Hash Challenge",
    "link": "https://starkware.co/hash-challenge",
    "description": "Win bounties for finding collisions in new STARK-friendly hash functions",
    "setter": "Starkware",
    "amount": "227 ETH",
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
