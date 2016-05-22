/**
 * Created by randy on 5/22/16.
 */
eventsApp.controller('EditEventController',
    function EditEventController ($scope) {
        $scope.saveEvent = function (event) {
            alert('event ' + event.name + ' saved!');
        };

        $scope.cancelEdit = function () {
            window.location = "/EventDetails.html";
        }
    }
);