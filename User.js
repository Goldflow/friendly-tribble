//dit komt overeen met soort van Entiteit
//wordt soort van entiteit service
var app = angular.module('app');

//Person service wordt meegegeven
app.service('Teacher', function(Person){
   
    var Teacher = function Teacher(){
        this.teach = function(){
            console.log("teach...");
        }
    }
   Teacher.prototype = Person; //teacher zal nu overerven van Person
    return Teacher;
});

app.service('Person', function(){
   
    var Person = function Person()
    {
        this.firstName = 'Karim';
        this.lastName = 'Dehbi';
                
    }
});