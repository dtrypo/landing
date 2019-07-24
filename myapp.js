// $.scrollify({
//     section: ".example-classname",
//     sectionName: "section-name",
//     interstitialSection: "",
//     easing: "easeOutExpo",
//     scrollSpeed: 1100,
//     offset: 0,
//     scrollbars: true,
//     standardScrollElements: "",
//     setHeights: true,
//     overflowScroll: true,
//     updateHash: true,
//     touchScroll: true,
//     before: function () { },
//     after: function () { },
//     afterResize: function () { },
//     afterRender: function () { }
// });

var data = [];
var labels = [];
var skills=[{
    id:1,en:'FOOD DELIVERY', gr:'DELIVERY'
},
{
    id:2,en:'CHEF AND COOK', gr:'ΜΑΓΕΙΡΕΣ'
},
{
    id:3,en:'COOK FAST FOOD', gr:'ΨΗΣΤΕΣ - ΠΑΡΑΣΚΕΥΑΣΤΕΣ'
},
{
    id:4,en:'BARISTA', gr:'BARISTA - ΜΠΟΥΦΕ'
},
{
    id:5,en:'KITCHEN PORTER', gr:'ΛΑΝΤΖΑ'
},
{
    id:6,en:'WAITER - WAITRESS', gr:'ΣΕΡΒΙΤΟΡΟΙ'
},
{
    id:7,en:'BAKERS', gr:'ΑΡΤΟΠΟΙΟΙ'
},
{
    id:8,en:'HOST - MAITRE', gr:'ΥΠΟΔΟΧΗ - ΜΕΤΡ'
},
{
    id:9,en:'SALES CASHIERS', gr:'ΠΩΛΗΤΕΣ - ΤΑΜΙΕΣ'
},
{
    id:10,en:'CALL CENTER', gr:'ΤΗΛΕΦΩΝΙΚΟ ΚΕΝΤΡΟ'
},
{
    id:11,en:'HOUSEKEEPING', gr:'ΚΑΜΑΡΙΕΡΑ'
},
{
    id:12,en:'RECEPTIONIST', gr:'ΡΕΣΕΨΙΟΝ'
},
{
    id:13,en:'HAIRDRESSING', gr:'ΚΟΜΜΩΤΙΚΗ'
},
{
    id:14, en:'BEAUTY', gr:'ΑΙΣΘΗΤΙΚΗ'
},
{
    id:15, en:'BARTENDER', gr:'BARTENDER'
},
{
    id:16, en:'OTHER SKILL', gr:'ΑΛΛΟ'
},
{
    id:18, en:'OFFICE ADMIN', gr:'ΥΠΑΛΛΗΛΟΙ ΓΡΑΦΕΙΟΥ'
},
{
    id:19, en:'CLEANING', gr:'ΚΑΘΑΡΙΣΜΟΣ'
},
{
    id:20, en:'LOGISTICS', gr:'ΑΠΟΘΗΚΑΡΙΟΙ'
},
{
    id:21, en:'DRIVER', gr:'ΟΔΗΓΟΙ'
}
];

console.log(skills);

var skill = document.getElementById('skill');
skills.forEach(element => {
    skill.innerHTML += `<option value="${element.id}">${element.en}</option>`
});


function formSub() {
    var loaders = document.querySelectorAll('.loader');
    loaders[0].style.display = 'block';
    loaders[1].style.display = 'block';
    setTimeout(function () {
        loaders[0].style.display = 'none';
        loaders[1].style.display = 'none';
    }, 3500);
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
                    var temp = data.map(function (element) {
                        return element * 100;
                    });
                    data = temp;
                    x = stats.xp_dist.labels;
                    y = stats.xp_dist.values;
                    var temp = y.map(function (element) {
                        return element * 100;
                    });
                    y = temp;
                    js = stats.js_number;
                    charts();
                    chart2();
                    var elem = document.getElementById("myBar");
                    var width = 20;
                    var id = setInterval(frame, 10);
                    function frame() {
                        if (width >= 100) {
                            clearInterval(id);
                        } else {
                            width++;
                            data = js / 100;
                            elem.style.width = width + '%';
                            elem.innerHTML = (data * width * 1).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                        }
                    }
                } else {
                    document.getElementById("message").innerHTML = "";
                    labels = stats.age_dist.labels;
                    data = stats.age_dist.values;
                    x = stats.xp_dist.labels;
                    y = stats.xp_dist.values;
                    js = stats.js_number;
                    charts();
                    chart2();
                    var elem = document.getElementById("myBar");
                    var width = 20;
                    var id = setInterval(frame, 30);
                    function frame() {
                        if (width >= 100) {
                            clearInterval(id);
                        } else {
                            width++;
                            data = js / 100;
                            elem.style.width = width + '%';
                            elem.innerHTML = (data * width * 1).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                        }
                    }
                }
            })
    }

    getStats();


    function charts() {
        var ctx = document.getElementById('myChart').getContext('2d');

        var myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Job Seeker age Distribution',
                    data: data,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        });
    }

    function chart2() {
        var ctx = document.getElementById('myChart2').getContext('2d');

        var myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: x,
                datasets: [{
                    label: 'Job Seeker Years of Experience',
                    data: y,
                    backgroundColor: [
                        'rgba(38, 162, 240, .2)'
                    ],
                    borderColor: [
                        'rgba(38, 162, 240, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        });
    }
}