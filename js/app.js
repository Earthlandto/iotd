(function() {
  $.getJSON('insults.json', function(data) {
    var insults = data.insults;
    var insultSize = insults.default.length;
    var now = (new Date()).getTime();
    var fullDaysSinceEpoch = Math.floor(now/8.64e7);
    var selected = (insultSize % fullDaysSinceEpoch) -1;

    $('.js-insult-text').text(insults.default[selected]);
  });

  $('.js-time').text(moment().format('LL'));
})();
