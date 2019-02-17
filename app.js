(function (){
  angular.module("check",[]).controller("checkcontroller",function ($scope){
    $scope.name='';
    $scope.status='';
    $scope.checkstatus = function () {
      var result = Calculate($scope.name);
      $scope.status = result;
  }

  function Calculate(string) {
    if(string.length==0){
      return "Please enter data first";
    }
    else{
      var words = string.split(',');
      if (words.length <= 3) {
        return "Enjoy!";
      }
      else {
        return "Too much!";
      }
    }
  }
  });
})();
