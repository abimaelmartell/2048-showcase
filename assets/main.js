window.App = window.App || {};
(function() {

    var ShowCase = function() {

        var _this = this;

        this.template = _.template($('#game-template').html());

        this.$el = $("#games-list");

        this.render = function() {
            _.each(App.Data.Games, function(game) {
                _this.$el.append(_this.template({ "game": game }));
            });

            this.$el.mixitup();
        }


        this.init = function() {
            this.render();
        }

        return this.init();
    };


    App.ShowCase = new ShowCase;
})();
