(function(){
angular.module('cardNumberApplication').filter('cardNumberFilter',[function(){
    return function (cardNumber) {

        if(!cardNumber){
            return "dafault";
        }


    };
}]);
})();