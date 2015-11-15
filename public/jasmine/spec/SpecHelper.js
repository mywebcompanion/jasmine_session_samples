beforeEach(function () {
  jasmine.addMatchers({
    toBeAGoodInvestment : function(){
      return {
        compare : function(actual, expected){
          //matcher definition
          var result = {};
          result.pass = actual.isGood();
          result.message = 'Expected investment to be a good investment';
          return result;
        }
      }
    }
  });
});
