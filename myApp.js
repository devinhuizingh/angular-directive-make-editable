angular.module('myApp', []).
	directive('makeEditable', function($sce) {
		return {
			restrict: 'E',
			templateUrl: 'template.html',
			//scope: true,
			transclude: true,
			link: function(scope, element, attrs) {
				//alert("yep")
				
				scope.click= {
					makeEditable: function() {
						//alert("working fine");
						attrs.$set("contenteditable", true);
						scope.hello=true;
						
					},
					save: function() {
						attrs.$set("contenteditable", false);
						scope.hello=false
					}
				}
			}
		}
	})