
var skills = [{
    id: 1, en: 'FOOD DELIVERY', gr: 'DELIVERY'
},
{
    id: 2, en: 'CHEF AND COOK', gr: 'ΜΑΓΕΙΡΕΣ'
},
{
    id: 3, en: 'COOK FAST FOOD', gr: 'ΨΗΣΤΕΣ - ΠΑΡΑΣΚΕΥΑΣΤΕΣ'
},
{
    id: 4, en: 'BARISTA', gr: 'BARISTA - ΜΠΟΥΦΕ'
},
{
    id: 5, en: 'KITCHEN PORTER', gr: 'ΛΑΝΤΖΑ'
},
{
    id: 6, en: 'WAITER - WAITRESS', gr: 'ΣΕΡΒΙΤΟΡΟΙ'
},
{
    id: 7, en: 'BAKERS', gr: 'ΑΡΤΟΠΟΙΟΙ'
},
{
    id: 8, en: 'HOST - MAITRE', gr: 'ΥΠΟΔΟΧΗ - ΜΕΤΡ'
},
{
    id: 9, en: 'SALES CASHIERS', gr: 'ΠΩΛΗΤΕΣ - ΤΑΜΙΕΣ'
},
{
    id: 10, en: 'CALL CENTER', gr: 'ΤΗΛΕΦΩΝΙΚΟ ΚΕΝΤΡΟ'
},
{
    id: 11, en: 'HOUSEKEEPING', gr: 'ΚΑΜΑΡΙΕΡΑ'
},
{
    id: 12, en: 'RECEPTIONIST', gr: 'ΡΕΣΕΨΙΟΝ'
},
{
    id: 13, en: 'HAIRDRESSING', gr: 'ΚΟΜΜΩΤΙΚΗ'
},
{
    id: 14, en: 'BEAUTY', gr: 'ΑΙΣΘΗΤΙΚΗ'
},
{
    id: 15, en: 'BARTENDER', gr: 'BARTENDER'
},
{
    id: 16, en: 'OTHER SKILL', gr: 'ΑΛΛΟ'
},
{
    id: 18, en: 'OFFICE ADMIN', gr: 'ΥΠΑΛΛΗΛΟΙ ΓΡΑΦΕΙΟΥ'
},
{
    id: 19, en: 'CLEANING', gr: 'ΚΑΘΑΡΙΣΜΟΣ'
},
{
    id: 20, en: 'LOGISTICS', gr: 'ΑΠΟΘΗΚΑΡΙΟΙ'
},
{
    id: 21, en: 'DRIVER', gr: 'ΟΔΗΓΟΙ'
}
];

var locations = [
    {
        id:80, en: "ATTIKI", gr: "ΑΤΤΙΚΗ"
    },
    {
        id:103, en: "THESSALONIKI", gr: "ΘΕΣΣΑΛΟΝΙΚΗ"
    },
    {
        id:56, en: "PIERIA", gr: "ΠΙΕΡΙΑ"
    },
    {
        id:58, en: "IOANNINA", gr: "ΙΩΑΝΝΙΝΑ"
    },
    {
        id:59, en: "PELLA", gr: "ΠΕΛΛΑ"
    },
    {
        id:60, en: "EVRITANIA", gr: "ΕΥΡΥΤΑΝΙΑ"
    },
    {
        id:61, en: "FOKIDA", gr: "ΦΩΚΙΔΑ"
    },
    {
        id:62, en: "AITOLOKARNANIA", gr: "ΑΙΤΟΛΟΚΑΡΝΑΝΙΑ"
    },
    {
        id:63, en: "LARISA", gr: "ΛΑΡΙΣΑ"
    },
    {
        id:64, en: "LAKONIA", gr: "ΛΑΚΩΝΙΑ"
    },
    {
        id:65, en: "HRAKLEIO", gr: "ΗΡΑΚΛΕΙΟ"
    },
    {
        id:66, en: "EVROS", gr: "ΕΒΡΟΣ"
    },
    {
        id:67, en: "SAMOS", gr: "ΣΑΜΟΣ"
    },
    {
        id:68, en: "PEIRAIAS", gr: "ΠΕΙΡΑΙΑΣ"
    },
    {
        id:69, en: "XALKIDIKI", gr: "ΧΑΛΚΙΔΙΚΗ"
    },
    {
        id:70, en: "SERRES", gr: "ΣΕΡΡΕΣ"
    },
    {
        id:71, en: "KOZANI", gr: "ΚΟΖΑΝΗ"
    },
    {
        id:72, en: "IMATHIA", gr: "ΗΜΑΘΙΑ"
    },
    {
        id:73, en: "FTHIOTIDA", gr: "ΦΘΙΩΤΙΔΑ"
    },
    {
        id:74, en: "CHIOS", gr: "ΧΙΟΣ"
    },
    {
        id:75, en: "AXAIA", gr: "ΑΧΑΙΑ"
    },
    {
        id:76, en: "FLORINA", gr: "ΦΛΩΡΙΝΑ"
    },
    {
        id:77, en: "PREVEZA", gr: "ΠΡΕΒΕΖΑ"
    },
    {
        id:78, en: "EVIA", gr: "ΕΥΒΟΙΑ"
    },
    {
        id:79, en: "GREVENA", gr: "ΓΡΕΒΕΝΑ"
    },
    {
        id:82, en: "KEFALONIA", gr: "ΚΕΦΑΛΛΟΝΙΑ"
    },
    {
        id:83, en: "RODOPI", gr: "ΡΟΔΟΠΗ"
    },
    {
        id:84, en: "KORINTHOS", gr: "ΚΟΡΙΝΘΟΣ"
    },
    {
        id:85, en: "CHANIA", gr: "ΧΑΝΙΑ"
    },
    {
        id:86, en: "LESVOS", gr: "ΛΕΣΒΟΣ"
    },
    {
        id:87, en: "ARKADIA", gr: "ΑΡΚΑΔΙΑ"
    },
    {
        id:88, en: "KASTORIA", gr: "ΚΑΣΤΟΡΙΑ"
    },
    {
        id:89, en: "ZAKINTHOS", gr: "ΖΑΚΥΝΘΟΣ"
    },
    {
        id:90, en: "DRAMA", gr: "ΔΡΑΜΑ"
    },
    {
        id:91, en: "KYKLADES", gr: "ΚΥΚΛΑΔΕΣ"
    },
    {
        id:93, en: "VIOTIA", gr: "ΒΟΙΩΤΙΑ"
    },
    {
        id:94, en: "LASITHI", gr: "ΛΑΣΙΘΙ"
    },
    {
        id:95, en: "RETHIMNO", gr: "ΡΕΘΥΜΝΟ"
    },
    {
        id:96, en: "MAGNISIA", gr: "ΜΑΓΝΗΣΙΑ"
    },
    {
        id:97, en: "ARGOLIDA", gr: "ΑΡΓΟΛΙΔΑ"
    },
    {
        id:98, en: "KAVALA", gr: "ΚΑΒΑΛΑ"
    },
    {
        id:99, en: "ILIA", gr: "ΗΛΕΙΑ"
    },
    {
        id:100, en: "KARDITSA", gr: "ΚΑΡΔΙΤΣΑ"
    },
    {
        id:101, en: "ARTA", gr: "ΑΡΤΑ"
    },
    {
        id:104, en: "XANTHI", gr: "ΞΑΝΘΗ"
    },
    {
        id:105, en: "DODEKANISA", gr: "ΔΩΔΕΚΑΝΗΣΑ"
    },
    {
        id:106, en: "KILKIS", gr: "ΚΙΛΚΙΣ"
    },
    {
        id:107, en: "MESSINIA", gr: "ΜΕΣΣΗΝΙΑ"
    },
    {
        id:108, en: "THESPROTIA", gr: "ΘΕΣΠΡΩΤΙΑ"
    },
    {
        id:109, en: "TRIKALA", gr: "ΤΡΙΚΑΛΑ"
    },
    {
        id:110, en: "KERKYRA", gr: "ΚΕΡΚΥΡΑ"
    }
]

console.log(skills);

var skill = document.getElementById('skill');
skills.forEach(element => {
    skill.innerHTML += `<option value="${element.id}">${element.en}</option>`
});

var loc = document.getElementById('location');
locations.forEach(element => {
    loc.innerHTML += `<option value="${element.id}">${element.en}</option>`
});

function formSub(first) {
    if (!first) {
        var loaders = document.querySelectorAll('.loader');
        loaders[0].style.display = 'block';
        loaders[1].style.display = 'block';
        setTimeout(function () {
            loaders[0].style.display = 'none';
            loaders[1].style.display = 'none';
        }, 3500);
    }

    var skill = document.getElementById('skill').value;
    var location = document.getElementById('location').value;
    console.log(skill);
    console.log(location);

    function getStats() {
        fetch(`https://we9eqn7xfi.execute-api.eu-west-1.amazonaws.com/default/emp_stats?skill_id=${skill}&location_id=${location}`)
            .then(function (res) {
                return res.json();
            })
            .then(function (stats) {
                console.log(stats);
                if (!stats.found_js_pop) {
                    document.getElementById("message").innerHTML = "Sufficient data for this location are not available. We display location independent data.";
                    labels = stats.age_dist.labels;
                    data = stats.age_dist.values;

                    x = stats.xp_dist.labels;
                    y = stats.xp_dist.values;

                    js = stats.js_number;
                    charts();
                    chart2();
                    document.getElementById("js").innerHTML = js
                } else {
                    document.getElementById("message").innerHTML = "";
                    labels = stats.age_dist.labels;
                    data = stats.age_dist.values;
                    x = stats.xp_dist.labels;
                    y = stats.xp_dist.values;
                    js = stats.js_number;
                    charts();
                    chart2();
                    document.getElementById("js").innerHTML = js
                }
            })
    }

    getStats();


    function charts() {
        document.getElementById("canvas1").innerHTML = '<canvas id="myChart" width="400" height="400" style="max-width: 400px; max-height: 400px;"></canvas>';
        var ctx = document.getElementById('myChart').getContext('2d');
        var temp = data.map(function (element) {
            return Math.round(element * 100, 2);
        });
        data = temp;
        var myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [{
                    data: data,
                    backgroundColor: '#26a2f0',
                    borderColor: '#26a2f0',
                    borderWidth: 1
                }]
            },
            options: {
                legend: {
                    display: false
                },
                tooltips: {
                    callbacks: {
                        label: function (tooltipItem) {
                            return tooltipItem.yLabel;
                        }
                    }
                },
                title: {
                    display: true,
                    text: 'Users Age Distribution',
                    fontColor: '#26a2f0'
                },
                labels: {
                    fontColor: '#ff0000'
                },
                scales: {
                    xAxes: [{
                        gridLines: {
                            display: false
                        },
                        ticks: {
                            beginAtZero: true,
                            fontColor: '#26a2f0',
                            fontFamily: 'Ubuntu'
                        },
                        scaleLabel: {
                            display: true,
                            labelString: 'age',
                            fontColor: '#26a2f0'
                        }
                    }],
                    yAxes: [{
                        gridLines: {
                            display: false
                        },
                        ticks: {
                            beginAtZero: true,
                            stepSize: 10,
                            callback: function (value, index, values) {
                                return value + '%';
                            },
                            fontColor: '#26a2f0'
                        },
                        scaleLabel: {
                            display: true,
                            labelString: '% of user',
                            fontColor: '#26a2f0'
                        }
                    }]
                }
            }
        });
    }

    function chart2() {
        document.getElementById("canvas2").innerHTML = '<canvas id="myChart2" width="400" height="400" style="max-width: 400px; max-height: 400px;"></canvas>';
        var ctx = document.getElementById('myChart2').getContext('2d');
        var temp = y.map(function (element) {
            return Math.round(element * 1000) / 10;
        });
        y = temp;
        var myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: x,
                datasets: [{
                    label: 'Job Seeker Years of Experience',
                    data: y,
                    backgroundColor: '#26a2f0',
                    borderColor: '#26a2f0',
                    borderWidth: 1
                }]
            },
            options: {
                legend: {
                    display: false
                },
                tooltips: {
                    callbacks: {
                        label: function (tooltipItem) {
                            return tooltipItem.yLabel;
                        }
                    }
                },
                title: {
                    display: true,
                    text: 'Users Experience Distribution',
                    fontColor: '#26a2f0'
                },
                labels: {
                    fontColor: '#ff0000'
                },
                scales: {
                    xAxes: [{
                        gridLines: {
                            display: false
                        },
                        ticks: {
                            beginAtZero: true,
                            fontColor: '#26a2f0',
                            fontFamily: 'Ubuntu'
                        },
                        scaleLabel: {
                            display: true,
                            labelString: 'experience',
                            fontColor: '#26a2f0'
                        }
                    }],
                    yAxes: [{
                        gridLines: {
                            display: false
                        },
                        ticks: {
                            beginAtZero: true,
                            stepSize: 10,
                            callback: function (value, index, values) {
                                return value + '%';
                            },
                            fontColor: '#26a2f0'
                        },
                        scaleLabel: {
                            display: true,
                            labelString: '% of user',
                            fontColor: '#26a2f0'
                        }
                    }]
                }
            }
        });
    }


}

formSub(first = true);

var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 4000); // Change image every 2 seconds
}