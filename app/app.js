angular
    .module('africalooks', [
        'ngStamplay',
        'ui.router',
        'app.routes',
        'app.admin',
        'app.authenticate',
        'app.checkout',
        'app.home',
        'app.product',
        'app.profile',
        'UserService'
       // 'app.shop'
    ])
    .controller('MainController',['User', '$rootScope', MainController]);

/**
 * The main controller for our application
 */
function MainController(User, $rootScope) {
    var main = this;
     $rootScope.currentUser = {}; // creating this object to hold our current users info

  // get the current user and bind their data to $rootScope.currentUser object
  User.getCurrent()
    .then(function(data) {
      if (data.get('_id')) {
        $rootScope.currentUser.id    = data.get('_id');
        $rootScope.currentUser.name  = data.get('displayName');
        $rootScope.currentUser.image = data.get('profileImg');
      } else {
        // clear the current user just to be sure
        $rootScope.currentUser = {};
      }
    });
    function logout() {
    User.logout();
    $rootScope.currentUser = {};
  }  
}    