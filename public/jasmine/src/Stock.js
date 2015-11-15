/**
 * Created by ARUN on 15/11/2015.
 */

function Stock(params){
    this.symbol = params.symbol;
    this.sharePrice = params.sharePrice;
};

Stock.prototype.fetch = function(){
    var that = this;
    var url = 'http://localhost:8000/stocks/' + that.symbol;

    $.getJSON(url, function(data){
        console.log("Fetched JSON " + data.sharePrice);
        that.sharePrice = data.sharePrice;
    });
};