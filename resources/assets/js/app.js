
require("./bootstrap");
require("./app.require");
require("./components/layout/layout");
require("./components/page-home/page-home");

angular
    .module("app", ["app.require", "ui.router"])
    .config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/");
        $stateProvider
            .state("home", { url: "/", template: "<page-home/>" })
    });
