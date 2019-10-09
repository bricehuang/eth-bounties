$('div.bounty').hover(
    function() {
        $('p', this).toggleClass('desc-active');
        $(this).toggleClass('bounty-active');
    });