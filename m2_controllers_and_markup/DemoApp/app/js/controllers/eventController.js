/**
 * Created by randy on 5/16/16.
 */
'use strict';

eventsApp.controller('EventController',
    function EventController($scope, eventData) {

        $scope.myStyle = {color: 'red'};
        $scope.snippet = '<span style="color: red">hi there</span>';
        $scope.boolValue = false;
        $scope.myClass = "blue";
        $scope.buttonDisabled = true;
        $scope.sortOrder = "name";
        $scope.event = eventData.event;

        $scope.upVoteSession = function (session) {
            session.upVoteCount++;
        }

        $scope.downVoteSession = function (session) {
            session.upVoteCount--;
        }
    }
);