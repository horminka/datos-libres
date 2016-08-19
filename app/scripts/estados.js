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

        // Distribución Presupuesto
        $scope.labelsdp = ["Infraestructura", "Cultura", "Seguridad", "Educación", "Salud", "Deuda"];
        $scope.datadp = [300, 400, 200, 100, 500, 3000 ];
        $scope.coloursdp = ['#eee528', '#570ee7', '#07e971', '#d4cb45', '#097900', '#2659a0'];
        $scope.itemsdp = []
        for (var i=0; i<$scope.labelsdp.length; i++) {
          $scope.itemsdp.push(
            {
              label: $scope.labelsdp[i],
              data: $scope.datadp[i],
              color: $scope.coloursdp[i],
            }
          );
        }

        // Histórico Presupuesto
        $scope.labelshp = ["2010", "2011", "2012", "2013", "2014", "2015", "2016"];
        $scope.datahp = [
          [28, 48, 40, 19, 86, 27, 90]
        ];

        // Gastos Ingresos
        $scope.labels = ["2010", "2011", "2012", "2013", "2014", "2015", "2016"];
        $scope.series = ['Gastos', 'Ingresos'];
        $scope.data = [
          [28, 48, 40, 19, 86, 27, 90],
          [65, 59, 80, 81, 56, 55, 40],
        ];
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
      }
     ]
   })

  $urlRouterProvider.otherwise('/')
});
