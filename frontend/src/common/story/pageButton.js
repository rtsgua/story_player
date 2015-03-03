angular.module('pageButton', [])

  .directive('spButton', function () {
    return {
      restrict: 'AEC',
      template: '<button class="btn btn-primary">{{caption}}</button>',
      scope: {
        caption: '@',
        target: '='
      },
      link: function ($scope, elem, attrs) {

      }
    };
  })

;
