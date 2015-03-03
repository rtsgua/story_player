
angular.module('storyPage', [])

  .factory('CurrentPage', function () {
    return {
      name: '',
      media: {image: '', audio: '', video: '', metronome: ''},
      text: '',
      buttons: [],
      delay: null,
      setValues: {},
      unsetValues: {}
    };
  })

  .factory('Button', function () {
    return {
      caption: 'Continue',
      target: null
    };
  })

  .factory('Delay', function () {
    return {
      target: null,
      seconds: 0,
      style: 'normal'
    };
  })

  .factory('Target', function () {
    return {
      page: '',
      fromNumber: 0,
      toNumber: 0,
      prefix: '',
      suffix: ''
    };
  })

  .controller('storyPageCtrl', function ($scope) {

  })

;
