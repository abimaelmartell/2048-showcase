window.App = window.App || {};
(function() {

    var ShowCase = function() {

        var _this = this;

        this.template = _.template($('#element-template').html());

        this.$el = $("#list");

        this.render = function() {
            _.each(App.Data, function(el) {
                _this.$el.append(_this.template(el));
            });
        }


        this.init = function() {
            this.render();
        }

        return this.init();
    };


    App.ShowCase = new ShowCase;
})();
