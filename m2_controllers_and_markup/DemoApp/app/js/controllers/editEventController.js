/**
 * Created by randy on 5/22/16.
 */
eventsApp.controller('EditEventController',
    function EditEventController ($scope) {
        $scope.saveEvent = function (event, newEventForm) {
            console.log(newEventForm);
            if (newEventForm.$valid) {

                alert('event ' + event.name + ' saved!');
            }
        };

        $scope.cancelEdit = function () {
            window.location = "/EventDetails.html";
        }
    }
);