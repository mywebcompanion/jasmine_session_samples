/**
 * Created by ARUN on 15/11/2015.
 */

function Stock(params){
    this.symbol = params.symbol;
    this.sharePrice = params.sharePrice;
};

Stock.prototype.fetch = function(params){
    console.log("About to fetch stocks from server");
    var that = this;
    var url = 'http://localhost:8000/stocks/' + that.symbol;
    var success = params.success || function(){};

    $.getJSON(url, function(data){
        console.log("Fetched JSON " + data.sharePrice);
        that.sharePrice = data.sharePrice;
        success(that);
    });
};

Stock.prototype.callBackMock = function(callback){
    console.log("Just a dummy print before calling callback");
    var success = true;
    if(success){
        callback();
    }
};

Stock.prototype.fakeFetch = function(){
    console.log("AM being called fakeFetch()");
    return 10;
};