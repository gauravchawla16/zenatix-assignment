(function(){
    app.factory("InstagramService", function ($rootScope, $location, $http) {
        var client_id = "c01ecc8e4c6e4668a789b0df8c684789";
        var service = {
            _access_token: null,
            access_token: function(newToken) {
                if(angular.isDefined(newToken)) {
                    this._access_token = newToken;
                }
                return this._access_token;
            },
            login: function () {
                var igPopup = window.open("https://instagram.com/oauth/authorize/?client_id=" + client_id +
                    "&redirect_uri=" + $location.absUrl().split('#')[0] + 
                    "&response_type=token&scope=public_content", "igPopup");
            }
        };
        return service;
    })
})();