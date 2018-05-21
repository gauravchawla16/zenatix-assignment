(function(){
    app.controller('homeController', function($http,$scope,InstagramService,$stateParams,$window,instagramDetailsService,$rootScope) {
        var _this = this;
        _this.IgAccessToken = null;
        _this.igPostData = [];
        _this.instaDataFetched = false;
        _this.instagramLogin = function(){
            if(_this.IgAccessToken == null){
                InstagramService.login();
            }
        }
        _this.instaPosts = function(token){
            instagramDetailsService.latest_posts({igToken: token}).$promise.then(function(results){
                _this.instaDataFetched = true;
                _this.igPostData = [];
                _this.igPostData = results.data;
            })
        };
        $rootScope.$on("igAccessTokenObtained", function (evt, args) {
            _this.IgAccessToken = args.access_token.split('=')[1];
            _this.instaPosts(_this.IgAccessToken);
        });
    
        if($stateParams['#'] != null){
            var $parentScope = $window.opener.angular.element(window.opener.document).scope();
            if (angular.isDefined($stateParams["#"])) {
                $parentScope.$broadcast("igAccessTokenObtained", { access_token: $stateParams["#"] });
            }
            $window.close();
        }
    })
})();