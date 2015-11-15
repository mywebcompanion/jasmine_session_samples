/**
 * Created by ARUN on 15/11/2015.
 */

describe("stock",function(){

    var stock;
    var originalSharePrice  = 0;

    beforeEach(function(){
        stock = new Stock({
            symbol : 'AOUE',
            sharePrice : originalSharePrice
        });
    });


    describe("when fetched", function() {
        var fetched = false;
        beforeEach(function(){
           stock.fetch();
        });

        it("should update its share price", function(){
            console.log("After fetch" + stock.sharePrice);
            expect(stock.sharePrice).toEqual(20.18);
        });
    });
});