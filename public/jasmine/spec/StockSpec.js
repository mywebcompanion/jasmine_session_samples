/**
 * Created by ARUN on 15/11/2015.
 */

describe("stock",function(){

    var stock;
    var originalSharePrice  = 0;
    var fetchSpy;

    beforeEach(function(){
        stock = new Stock({
            symbol : 'AOUE',
            sharePrice : originalSharePrice
        });
    });

    describe("when fetched", function() {
        var fetched = false;
        beforeEach(function(){
            jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
        });

        it("should update its share price", function(done){
            consgitole.log("After fetch" + stock.sharePrice);
            fetchSpy = spyOn(stock,'fetch').and.callThrough();
            stock.fetch({
                success : function(){
                    console.log("Success callback");
                    var spyCallBack = jasmine.createSpy('myspy');
                    expect(stock.sharePrice).toEqual(20.18);
                    stock.callBackMock(spyCallBack);
                    expect(spyCallBack).toHaveBeenCalled();
                    done();
                }
            });
            expect(stock.fetch).toHaveBeenCalled();
        });
        it('should spy on fetch',function(){
            expect(fetchSpy).toHaveBeenCalled();
        });
    });
});