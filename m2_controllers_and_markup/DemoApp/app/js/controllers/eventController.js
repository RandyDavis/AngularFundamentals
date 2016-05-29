/**
 * Created by randy on 5/16/16.
 */
'use strict';

eventsApp.controller('EventController',
    function EventController($scope, eventData, $log) {

        $scope.myStyle = {color: 'red'};
        $scope.snippet = '<span style="color: red">hi there</span>';
        $scope.boolValue = false;
        $scope.myClass = "blue";
        $scope.buttonDisabled = true;
        $scope.sortOrder = "name";
        eventData.getEvent()
            .success(function(event) { $scope.event = event; })
            .error(function (data, status, headers, config) {
                $log.warn(data, status, headers, config);
        });

        $scope.upVoteSession = function (session) {
            session.upVoteCount++;
        }

        $scope.downVoteSession = function (session) {
            session.upVoteCount--;
        }
    });