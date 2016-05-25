/**
 * Created by randy on 5/23/16.
 */
eventsApp.factory('eventData', function ($http, $log) {
    return {
         getEvent: function (success) {
            $http({method: 'GET', url: '/data/event/1'})
                .success(function (data, status, headers, config) {
                    success(data);
                })
                .error(function (data, status, headers, config) {
                    $log.warn(data, status, headers, config);
                })
         }


    };
});