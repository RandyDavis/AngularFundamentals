/**
 * Created by randy on 5/23/16.
 */
eventsApp.factory('eventData', function () {
    return {
         event: {
             name: 'Angular Boot Camp',
             date: 1359781015626,
             time: '10:30am',
             location: {
                 address: 'Google Headquarters',
                 city: 'Mountain View',
                 state: 'CA'
             },
             imageUrl: '/img/angularjs-logo.png',
             sessions: [
                 {
                     name: 'Directives Masterclass',
                     creatorName: 'Bob Smith',
                     duration: 1,
                     level: 'Advanced',
                     abstract: 'In this session you will learn the ins and outs of directives!',
                     upVoteCount: 4
                 },
                 {
                     name: 'Scopes for fun and profit',
                     creatorName: 'John Doe',
                     duration: 2,
                     level: 'Introductory',
                     abstract: 'This session will take a closer look at scopes. Learn what they do, how they do it, and how to get them to do ir for you',
                     upVoteCount: 2
                 },
                 {
                     name: 'Well Behaved Controllers',
                     creatorName: 'Jane Doe',
                     duration: 4,
                     level: 'Intermediate',
                     abstract: 'Controllers are the beginning of everything Angular does.',
                     upVoteCount: 8
                 }
             ]
         }
    };
});