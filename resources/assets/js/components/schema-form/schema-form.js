
//
require("../../app.require");

//
angular
    .module("app.require")
    .component("schemaForm", {
        bindings: {},
        template: require("./schema-form.html"),
        controller: function($scope) {

            $scope.schema = {
                "type": "object",
                "title": "Comment",
                "properties": {
                    "name": {
                        "title": "Name",
                        "type": "string"
                    },
                    "email": {
                        "title": "Email",
                        "type": "string",
                        "pattern": "^\\S+@\\S+$",
                        "description": "Email will be used for evil."
                    },
                    "comment": {
                        "title": "Comment",
                        "type": "string",
                        "maxLength": 20,
                        "validationMessage": "Don't be greedy!"
                    }
                },
                "required": [
                    "name",
                    "email",
                    "comment"
                ]
            };

            $scope.form = [
                "name",
                "email",
                {
                    "key": "comment",
                    "type": "textarea",
                    "placeholder": "Make a comment"
                },
                {
                    "type": "submit",
                    "style": "btn-info",
                    "title": "OK"
                }
            ];

            $scope.model = {};

        }
    });
