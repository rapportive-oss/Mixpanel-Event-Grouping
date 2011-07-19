// ==UserScript==
// @name          Mixpanel Event Grouping
// @namespace     http://mixpanel.com
// @description	  Group Mixpanel events by topic
// @include       http://mixpanel.com/report/*/events*
// @include       http://www.mixpanel.com/report/*/events*
// ==/UserScript==

document.onkeypress = function (key) {
    // Listen for the 'g' key to be pressed:
    if (key.keyCode !== 103) {
        return;
    }

    // Ask the user what group of events they'd like to view
    var group = prompt('Display events with the following phrase:', '').toLowerCase();

    // Do nothing if the prompt was cancelled
    if (group === null) {
        return;
    }

    // Iterate through all the event rows on the page and hide the ones that aren't
    // part of the currently-viewed group
    var events = document.getElementsByClassName('event_table_row');
    for (var i = 0; i < events.length; i++) {
        var event_name = events[i].getElementsByTagName('td')[1].innerText.toLowerCase();
        
        // Show a row if it's topic matches the group we want to show. Otherwise hide it.
        if (event_name.indexOf(group) > -1 || group === '') {
            events[i].style.display = 'table-row';
        } else {
            events[i].style.display = 'none';
        }
    }

};
