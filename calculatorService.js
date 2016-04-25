var app = angular.module('app');

app.service('calculatorService', function(){
   
    return {
        calculate : function(f1,f2){
            return f1+f2;
        }
    }
});