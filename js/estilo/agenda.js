var ctx = document.getElementById('myChart').getContext('2d');
var StatusOS = document.getElementById('statusOS').getContext('2d');

var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
        datasets: [{
            label: 'Receita Líquida',
            data: [0,
                0,
                31050,
                49.8,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0],

            backgroundColor: 'rgba(75, 192, 192, 1)',
            borderRadius: 15,
        },

        {
            label: 'Receita Bruta',
            data: [,
                ,
                31200,
                604,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
            ],

            backgroundColor: 'rgba(255, 206, 86, 1)',
            borderRadius: 15,
        },

        {
            label: 'Despesas',
            data: [,
                ,
                150,
                554.2,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
            ],

            backgroundColor: 'rgba(255, 99, 132, 1)',
            borderRadius: 15,
        },

        {
            label: 'Inadimplência',
            data: [,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
            ],

            backgroundColor: 'rgba(54, 162, 235, 1)',
            borderRadius: 15,
        }
        ]

    },
    options: {
        plugins: {
            legend: {
                position: "bottom",
                labels: {
                    usePointStyle: true,
                    font: {
                        size: 9
                    },
                }
            },
            scales: {
                xAxes: [{
                    display: true,
                    acaleLabel: {
                        display: true,
                        labelString: 'Meses',
                        fontColor: '#000000',
                        fontSize: 10
                    },
                    ticks: {
                        fontColor: "red",
                        fontSize: 20
                    }
                }],
                yAxes: [{
                    display: true,
                    scaleLabel: {
                        display: true,
                        labelString: 'Reais',
                        fontColor: '#000000',
                        fontSize: 10
                    },
                    ticks: {
                        fontColor: "red",
                        fontSize: 20
                    }
                }]
            }

        }
    }
});


var myChart = new Chart(statusOS, {
    type: 'polarArea',
    data: {
        labels: [
            'Receita total', 'Receita pendente',
            'Previsto em caixa', 'Despesa total',
            'Despesa pendente', 'Previsto a entrar'
        ],
        datasets: [{
            label: 'Total',
            data: [
                31804,
                508,
                31099.8,
                704.2,
                0.00,
                508],

            backgroundColor: [
                'rgba(75, 192, 192, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(153, 102, 255, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        plugins: {
            legend: {
                position: "bottom",
                labels: {
                    usePointStyle: true,
                    font: {
                        size: 9
                    },
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }

                }
            }
        }
    }
});