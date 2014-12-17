'use strict';

angular.module('events').controller('EventsController', ['$scope', 'Events',
	function($scope, Events) {

        $scope.event = undefined;
        Events.getNextEvent().success(function(data) {
            $scope.event = data;
        });


//        $scope.event = {
//            'name': 'Developing Offline Applications" and "HTML 5 Animations',
//            'time': 1411430400000,
//            'event_url': 'http://www.meetup.com/HTML5-Denver-Users-Group/events/160326502/',
//            'description': '<p><b>6 pm : "Developing Offline Applications with HTML 5" by Venkat Subramaniam</b></p>',
//            'venue': {
//                'name': 'Rally Software',
//                'address_1': '1550 Wynkoop',
//                'city': 'Denver',
//                'state': 'CO'
//            }
//        }

   	}
]);