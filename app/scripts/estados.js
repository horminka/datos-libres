app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('inicio', {
    url: '/',
    templateUrl: 'views/inicio.html',
    controller: ['$scope',
      function($scope) {
        $scope.titulo = "Presupuestos Públicos";
        $scope.descripcion = "Alcaldía de Neiva";
      }
     ]
   })

  .state('datos', {
    url: '/datos',
    templateUrl: 'views/datos.html',
    controller: ['$scope',
      function($scope) {
        $scope.datos = [
          { nombre: 'Ejecución de gastos a 31 de julio de 2016 (archivo xls)', ruta: 'docs/EJECUCION-DE-GASTOS-A-31-DE-JULIO-2016.xls' },
          { nombre: 'Ejecución de ingresos a 31 de julio de 2016 (archivo xls)', ruta: 'docs/EJECUCION-DE-INGRESOS-A-21-DE-JULIO-2016.xls' }
        ];
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
        $scope.sitios = [
          { nombre: 'GitHub', enlace: 'https://github.com/horminka/datos-libres'},
          { nombre: 'PAD', enlace: 'https://public.etherpad-mozilla.org/p/horminka-data'}
        ];

        $scope.colaboradores = [
          { nombre: 'HorMinka', imagen: ''},
          { nombre: 'Alcaldía de Neiva', imagen: ''}
        ];
      }
     ]
   })

  $urlRouterProvider.otherwise('/')
});
