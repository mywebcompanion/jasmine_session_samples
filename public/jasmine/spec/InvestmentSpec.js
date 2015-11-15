/**
 * Created by ARUN on 15/11/2015.
 */

describe('Investment',function(){
    var stock, investment, sharePrice;
    beforeEach(function(){
        stock = new Stock({
            symbol : 'AOUE',
            sharePrice : 0
        });
        investment = new Investment({
            stock : stock,
            shares:100,
            sharePrice : 20
        });
    });

    describe('when its stock share price valorizes', function(){
        beforeEach(function(){
            stock.sharePrice = 40;
            jasmine.addMatchers({
                toBeAGoodInvestment : function(){
                    return {
                        compare : function(actual, expected){
                            //matcher definition
                            var result = {};
                            if(actual.isGood()){
                                result.message = 'Expected investment to be a bad investment';
                            }
                            else{
                                result.message = 'Expected investment to be a Good investment';
                            }
                            result.pass = actual.isGood();
                            return result;
                        }
                    }
                }
            });
        });
        it('should return a position ROI', function(){
            expect(investment.roi()).toEqual(1);
        });
        it('should be a good investment', function(){
            expect(investment).toBeAGoodInvestment();
        });
    });

    it('should be of a stock', function(){ // Title of the spec
        expect(investment.stock).toBe(stock);
    });
    it('should have the invested shares quantity', function(){
        expect(investment.shares).toEqual(100);
    });

    it('should have a share paid price', function(){
        expect(investment.sharePrice).toEqual(20);
    });

    it('should have a cost', function(){
        expect(investment.cost).toEqual(2000);
    });
});

