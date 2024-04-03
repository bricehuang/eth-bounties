const BOUNTIES = [
  {
    title: "Ethereum Bounty Program",
    link: "https://ethereum.org/en/bug-bounty/",
    description:
      "Bounties for finding vulnerabilities in core Ethereum infrastructure, including both execution and consensus layers.",
    setter: "Ethereum Foundation",
    amount: "Up to $250,000 USD per instance (critical bugs)",
  },
];

$.each(BOUNTIES, function (i, bounty) {
  $(".bounties-container").append(
    "<div class='bounty' onclick='location.href = \"" +
      bounty.link +
      "\" ;' >" +
      "<h3>" +
      bounty.title +
      "</h3>" +
      "<p>" +
      bounty.description +
      "</p>" +
      "<p><strong>Posted By:</strong> " +
      bounty.setter +
      "<br>" +
      "<strong>Total Bounty:</strong> " +
      bounty.amount +
      "</p>" +
      "</div>"
  );
});

$(document).ready(function () {
  $("div.bounty").hover(function () {
    $("p", this).toggleClass("desc-active");
    $("h3", this).toggleClass("desc-active");
    $(this).toggleClass("bounty-active");
  });
});
