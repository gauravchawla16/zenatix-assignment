(function(){
    app.factory('instagramDetailsService', function ($resource) {
        return $resource('https://api.instagram.com/v1', {}, {
            latest_posts: {
                method: 'GET',
                url: 'https://api.instagram.com/v1/users/self/media/recent/?access_token=:igToken&count=5',
                params: {igToken: '@igToken'}
            }
        });
    })
})();
