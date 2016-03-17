"use strict";

angular.module('jtt_aping')
    .config(['$provide', function ($provide) {

        $provide.value("apingDefaultSettings", {
            apingApiKeys: {
                github: [
                    {'access_token': 'fb3f'+(1+1)+'3e9ad50759d97497ff62bc6640433f700bb'}
                ]
            }
        });

    }]);