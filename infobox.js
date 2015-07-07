angular.module('angular-info-box', [])
.directive('infoBox', function () {
    return {
      template: '&nbsp;<span ng-if="right"><span  tabindex="-1" class="glyphicon glyphicon-info-sign blue" data-toggle="popover" data-content="{{displaytext}}" ng-show="displaytext" data-placement="right" data-container="body"></span></span>   <span ng-if="!right"><span  tabindex="-1" class="glyphicon glyphicon-info-sign blue" data-toggle="popover" data-content="{{displaytext}}" ng-show="displaytext" data-placement="left" data-container="body"></span></span>',
      restrict: 'AEC',
      transclude: true,
      /*link: function postLink(scope, element, attrs) {
        element.text('this is the infoBox directive');
      }*/
      controller: ['$scope', function($scope) {
        //$scope.tooltext = "test here";
        

        $('[data-toggle="popover"]').popover( {trigger: 'focus'} );
        //always default to freetext if both it and lookup are present
        if($scope.freetext) {
          $scope.displaytext = $scope.freetext;
        }
        else {
          //check that lookup items have been supplied
          if(!$scope.lookupitems) {
            //we can't look anything up - return empty string
            console.log("InfoBox Error for " + $scope.lookup + " - lookups object is empty, supply some or use freetext attribute");
            $scope.displaytext = "";
          }
          //if it's not null, we need to check it is an object (not str, array etc)
          else if(!angular.isObject($scope.lookupitems)){

          }
          else {
            $scope.displaytext = $scope.lookupitems[$scope.lookup];
          }
        }

        
        
      }],
      scope: {
        //use lookup if you are using the MessageFactory service
        lookup:'@',
        //use direct if you want to enter ad hoc text
        freetext:'@',
        //if you are using a set of things to lookup with, include them here. should probably be a scoped object,
        lookupitems: '=',
        right:'=',

      },
    };
  });