app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('inicio', {
    url: '/',
    templateUrl: 'views/inicio.html',
    controller: ['$scope',
      function($scope) {
        $scope.inicio = "Acá va un descripción del proyecto"

      }
     ]
   })

  .state('datos', {
    url: '/datos',
    templateUrl: 'views/datos.html',
    controller: ['$scope',
      function($scope) {
        $scope.datos = "Acá se describen y enlazan los datos utilizados"

      }
     ]
   })

  .state('graficos', {
    url: '/graficos',
    templateUrl: 'views/graficos.html',
    controller: ['$scope',
      function($scope) {
        $scope.graficos = "Acá se muestran los gráficos"

      }
     ]
   })
  .state('info', {
    url: '/info',
    templateUrl: 'views/info.html',
    controller: ['$scope',
      function($scope) {
        $scope.info = "Acá va información adicional sobre el proyecto, formas de colaborar"

      }
     ]
   })

  $urlRouterProvider.otherwise('/')
});
