
var spouse = ["Michelle", "Brooks", "Gordon", "Levi", "Marcy"];
var city = ["Dallas", "New York", "San Francisco", "Miami", "Las Vegas", "Boston"];
var job = ["teacher", "programmer", "carpenter", "plumber", "accountant"];
var kids = [0, 1, 2, 3, 4];

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}


function tellFortune(spouse, city, job, kids){
    document.write("You will be married to " + spouse + " living in " + city + " while working as a " + job + " and having " + kids + " kid(s).")
}

tellFortune (spouse[getRandomInt(spouse.length)], city[getRandomInt(city.length)], job[getRandomInt(job.length)], kids[getRandomInt(kids.length)]);