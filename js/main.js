(function ($) {
    "use strict"; 
    const tahun = [2021,2020,2019,2018,2017,2016,2015]
    const sapi = [4267325,4407807,4511613,4637970,4705067,4823972,4928987]
    const kerbau =[27792,27304,26622,24364,23994,22975,21786]
    const kambing = [3178197,3279732,3376323,3476635,3524899,3645780,3741903]
    const babi = [44602,50243,57906,62470,58845,67574,54031];
    const barColor = [
        "rgba(255,0,0,1.0)",
        "rgba(255,0,0,0.9)",
        "rgba(255,0,0,0.8)",
        "rgba(255,0,0,0.6)",
        "rgba(255,0,0,0.5)",
        "rgba(255,0,0,0.4)",
        "rgba(255,0,0,0.2)"
    ];

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Sidebar Toggler
    $('.sidebar-toggler').click(function () {
        $('.sidebar, .content').toggleClass("open");
        return false;
    });


    // Progress Bar
    $('.pg-bar').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, {offset: '80%'});


    // Calender
    $('#calender').datetimepicker({
        inline: true,
        format: 'L'
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        dots: true,
        loop: true,
        nav : false
    });


    // Chart Global Color
    Chart.defaults.color = "#6C7293";
    Chart.defaults.borderColor = "#000000";

    

    // Worldwide Sales Chart
    var ctx1 = $("#worldwide-sales").get(0).getContext("2d");
    var myChart1 = new Chart(ctx1, {
        type: "bar",
        data: {
            labels: tahun,
            datasets: [{
                label:"Sapi",
                data: sapi,
                backgroundColor: "rgba(255,0,0,1.0)"
        },
        {
                label:"Kerbau",
                data: kerbau,
                backgroundColor: "rgba(255,0,0,.8)"
        },
        {
                label:"Babi",
                data: babi,
                backgroundColor: "rgba(255,0,0,.5)"
    },
        {
                label:"Kambing",
                data: kambing,
                backgroundColor: "rgba(255,0,0,0.3)"
        }
    ],
            },
        options: {
            responsive: true
        }
    });


    // Salse & Revenue Chart
    var ctx2 = $("#salse-revenue").get(0).getContext("2d");
    var myChart2 = new Chart(ctx2, {
        type: "line",
        data: {
            labels: tahun,
            datasets: [{
                    label: "Sapi",
                    data: sapi,
                    backgroundColor: "rgba(255,0,0,0.2)",
                    fill: true
                },
                {
                    label: "Kerbau",
                    data: kerbau,
                    backgroundColor: "rgba(255,0,0,0.3)",
                    fill: true
                },
                {
                    label: "Babi",
                    data: babi,
                    backgroundColor: "rgba(255,0,0,0.4)",
                    fill: true
                },
                {
                    label: "Kambing",
                    data: kambing,
                    backgroundColor: "rgba(255,0,0,0.1)",
                    fill: true
                },
            ]
            },
        options: {
            responsive: true
        }
    });
    


    // Single Line Chart
    var ctx3 = $("#line-chart").get(0).getContext("2d");
    var myChart3 = new Chart(ctx3, {
        type: "line",
        data: {
            labels: ["2021","2020","2019","2018","2017","2016","2015"],
            datasets: [{
                label: "Sapi",
                fill: false,
                backgroundColor:[    
                    "rgba(255,0,0,1.0)",
                    "rgba(255,0,0,0.9)",
                    "rgba(255,0,0,0.8)",
                    "rgba(255,0,0,0.6)",
                    "rgba(255,0,0,0.5)",
                    "rgba(255,0,0,0.4)",
                    "rgba(255,0,0,0.2)"
                ],
                data: [4267325,4407807,4511613,4637970,4705067,4823972,4928987]
            }]
        },
        options: {
            responsive: true
        }
    });


    // Single Bar Chart
    var ctx4 = $("#bar-chart").get(0).getContext("2d");
    var myChart4 = new Chart(ctx4, {
        type: "bar",
        data: {
            labels: ["2021","2020","2019","2018","2017","2016","2015"],
            datasets: [{
                label:"Babi",
                backgroundColor:[    
                    "rgba(255,0,0,1.0)",
                    "rgba(255,0,0,0.9)",
                    "rgba(255,0,0,0.8)",
                    "rgba(255,0,0,0.6)",
                    "rgba(255,0,0,0.5)",
                    "rgba(255,0,0,0.4)",
                    "rgba(255,0,0,0.2)"
                ],
                data: [44602,50243,57906,62470,58845,67574,54031]
            }]
        },
        options: {
            responsive: true
        }
    });


    // Pie Chart
    var ctx5 = $("#pie-chart").get(0).getContext("2d");
    var myChart5 = new Chart(ctx5, {
        type: "pie",
        data: {
            labels: ["2021","2020","2019","2018","2017","2016","2015"],
            datasets: [{
                label:"Kambing",
                backgroundColor: [
                    "rgba(235, 22, 22, .6)",
                    "rgba(235, 22, 22, .5)",
                    "rgba(235, 22, 22, .4)",
                    "rgba(235, 22, 22, .3)"
                ],
                data: [3178197,3279732,3376323,3476635,3524899,3645780,3741903]
            }]
        },
        options: {
            responsive: true
        }
    });
    
})(jQuery);

