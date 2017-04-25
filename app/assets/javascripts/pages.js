/* global Vue */
document.addEventListener("DOMContentLoaded", function(event) { 
  var app = new Vue({
    el: '#app',
    data: {
      people: [
      { name: 'Richard Branson', bio: 'Entrepreneur Richard Branson launched Virgin Records in 1973. Today Virgin Group holds more than 200 companies in more than 30 countries.', bioVisible: false },
      { name: 'Charles Boyle from Brooklyn 99', bio: 'Yeah, thats why I never tried to develop an edge. You cant lose what you dont have.', bioVisible: false },
      { name: 'Alec Baldwin', bio: 'Raven-haired, suavely handsome and prolific actor Alec Baldwin was born on April 3, 1958 in Massapequa, New York, and is the oldest, and easily the second-best-known, of the four Baldwin brothers in the acting business ', bioVisible: false },
      { name: 'Steve Whitt', bio: 'Im super hot and I am a future doctor, so' },
      { name: 'Winston (the cat)', bio: 'I really like sleeping, eating anything I can find, and ruining everything that Laurie holds dear.', bioVisible: false },
      ],
      newPersonName: '',
      newPersonBio: '',
      bioVisible: false
    },
  });
});
