(function() {
	var MILLISECOND_PER_DAY = 8.64e7;
	var NUM_EXTRA_INSULTS = 10;
	var insults = {};

  $.getJSON('insults.json', function(data) {
    insults = data.insults;

    var selected = getInsult(insults.default, insults.special);

    $('.js-insult-text').text(selected);
  });

  $('.js-time').text(moment().format('LL'));

  $('.js-extra-button').click(function () {
  	var $extraInsults = '';
  	var i = 0;
  	var extraInsult = '';

  	for (; i < NUM_EXTRA_INSULTS; i++) {
  		// extraList.push(insults.default[getRandomInt(0, insults.default.length)]);
  		extraInsult = insults.default[getRandomInt(0, insults.default.length)];
  		$extraInsults += `<li class="extra-list__item">${extraInsult}</li>`;
  	}
  	$('.js-extra-list').append($extraInsults);
  	$('.js-extra-list').removeClass('hide');
  });

  /**
   * Given the default and special list, returns the selected insult.
   * If it exists a special insult for the current day, this will be selected,
   * else, it returns a insult from default list by current date.
   */
  function getInsult(defaults, specials) {

    var currentDateStr = moment().format('DD/MM/YYYY');

    if (specials && specials[currentDateStr]) {
      return specials[currentDateStr];
    }

    var insultSize = defaults.length;
    var now = (new Date()).getTime();
    var fullDaysSinceEpoch = Math.floor(now/MILLISECOND_PER_DAY);
    return defaults[(fullDaysSinceEpoch % insultSize) -1];
  }


  /**
   * Returns a random integer between min (inclusive) and max (inclusive)
   * Using Math.round() will give you a non-uniform distribution!
   */
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }



})();
