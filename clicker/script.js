// stats
const cash = document.getElementById("cash")
const clickpowercounter = document.getElementById("clickpower")
const cpscounter = document.getElementById("cps")
const totalclickscounter = document.getElementById("totalclicks")
const button = document.getElementById("circle")
let score = 0
let clickpower = 1
let cps = 0
let totalclicks = 0

// all upgrade and building elements
const upgrade1 = document.getElementById("upgrade1")
const upgrade2 = document.getElementById("upgrade2")
const upgrade3 = document.getElementById("upgrade3")
const upgrade4 = document.getElementById("upgrade4")
const upgrade5 = document.getElementById("upgrade5")

const building1 = document.getElementById("building1")
const building2 = document.getElementById("building2")
const building3 = document.getElementById("building3")
const building4 = document.getElementById("building4")
const building5 = document.getElementById("building5")

// this function can be found at the bottom
everysecond()

// menu

const menudiv = document.getElementById("menu")
menudiv.style.display = "none"
const menubtn = document.getElementById("menubtn")

function openmenu() {
    if (menudiv.style.display == "none") {
        menudiv.style.display = "block"
        menubtn.style.display = "none"
    } else {
        menudiv.style.display = "none"
        menubtn.style.display = "block"
    }
}

// cheats for testing

// anyone could just find this password or change the css in inspect
let cheatspassword = "zark42"
let cheatsallowed = false

const password = document.getElementById("password")
const passwordbtn = document.getElementById("passwordbutton")
const cheatsmenu = document.getElementById("cheats")

function allowcheats() {
    let passwordinput = password.value

    if (passwordinput == cheatspassword) {
        cheatsallowed = true
        cheatsmenu.style.display = "block"
        password.style.display = "none"
    } else {
        console.log(`%cWrong Password!`, "color: red")
    }
}

// opens/closes cheats
function cheats() {
    cheatsmenu.style.display = "none"
}

// gives money
function cashcheat1() {
    score += 100
    cash.innerHTML = `Cash:${score}`
}
function cashcheat2() {
    score += 1000
    cash.innerHTML = `Cash:${score}`
}
function cashcheat3() {
    score += 10000
    cash.innerHTML = `Cash:${score}`
}

// unlocks certain upgrades/buildings
function unlockcheat1() {
    upgrade2.style.display = "block"
}

function unlockcheat2() {
    upgrade3.style.display = "block"
}

function unlockcheat3() {
    building2.style.display = "block"
    buildingsbg2.style.display = "block"
}

function unlockcheat4() {
    building3.style.display = "block"
    buildingsbg3.style.display = "block"
}


// audio
const paysound = new Audio('applepay.mp3')



// click

function circleclick() {
    // console.log("test")

    if (crithit1) {
        critchance = Math.floor(Math.random() * 20)

        if (critchance == 1) {

            console.log(`%cCritical hit!`, "color: red")
            score+= clickpower * 2
            crittxt.style.display = "block"
            setTimeout(() => {
                crittxt.style.display = "none"
            }, 250);
        } else {
            score += clickpower
        }
        
    } else {
        score += clickpower
    }
    
    totalclicks++
    cash.innerHTML = `Cash:${score}`
    totalclickscounter.innerHTML = `Tot:${totalclicks}`
}





// defines the cost and amount variables/constants for every upgrade/building, and an array/object for the main buy function
// theres 2 types of things you can buy, upgrades and buildings, and 2 ways theyre bought, normal and one-time purchases
// the numbers after the variables are the order which you would normally get them when playing, not numbers corresponding to the upgrade/building number

// upgrade 1 (normal) (kitten wing)
const amountdiv1 = document.getElementById("amount1")
const costdiv1 = document.getElementById("cost1")

let amount1 = 0
let cost1 = 30
const basecost1 = 30

let valuesarray1 = [amount1, cost1, amountdiv1, costdiv1, basecost1]

// upgrade 2 (one-time) (cheesepurrger)
const amountdiv4 = document.getElementById("amount4")
const costdiv4 = document.getElementById("cost4")

let amount4 = 0
let cost4 = 3000
let purchased4 = false

let valuesarray4 = [amount4, cost4, amountdiv4, costdiv4, purchased4]

// upgrade 3 (normal) (drink a kitshake)
const amountdiv6 = document.getElementById("amount6")
const costdiv6 = document.getElementById("cost6")

let amount6 = 0
let cost6 = 400
let basecost6 = 400

let valuesarray6 = [amount6, cost6, amountdiv6, costdiv6, basecost6]

// upgrade 4 (one-time) (mipi)
const amountdiv7 = document.getElementById("amount7")
const costdiv7 = document.getElementById("cost7")

let amount7 = 0
let cost7 = 10000
let purchased7 = false

let valuesarray7 = [amount7, cost7, amountdiv7, costdiv7, purchased7]

// upgrade 5 (one-time) (cat chef steroids)
const amountdiv9 = document.getElementById("amount9")
const costdiv9 = document.getElementById("cost9")

let amount9 = 0
let cost9 = 25000
let purchased9 = false

let valuesarray9 = [amount9, cost9, amountdiv9, costdiv9, purchased9]

// building 1 (normal) (cat chef)
const amountdiv2 = document.getElementById("amount2")
const costdiv2 = document.getElementById("cost2")

let amount2 = 0
let cost2 = 50
const basecost2 = 50

let valuesarray2 = [amount2, cost2, amountdiv2, costdiv2, basecost2]

// building 2 (normal) (cat collector horse)
const amountdiv3 = document.getElementById("amount3")
const costdiv3 = document.getElementById("cost3")

let amount3 = 0
let cost3 = 250
const basecost3 = 250

let valuesarray3 = [amount3, cost3, amountdiv3, costdiv3, basecost3]

// building 3 (normal) (customer service)
const amountdiv5 = document.getElementById("amount5")
const costdiv5 = document.getElementById("cost5")

let amount5 = 0
let cost5 = 1000
const basecost5 = 1000

let valuesarray5 = [amount5, cost5, amountdiv5, costdiv5, basecost5]

// building 4 (normal) (restaurant building)
const amountdiv8 = document.getElementById("amount8")
const costdiv8 = document.getElementById("cost8")

let amount8 = 0
let cost8 = 5000
let basecost8 = 8000

let valuesarray8 = [amount8, cost8, amountdiv8, costdiv8, basecost8]

// building 5 (one-time) (the sahara dessert)
const amountdiv10 = document.getElementById("amount10")
const costdiv10 = document.getElementById("cost10")

let amount10 = 0
let cost10 = 120000
let purchased10 = false

let valuesarray10 = [amount10, cost10, amountdiv10, costdiv10, purchased10]



// does all the repetitive code for every upgrade, like increasing cost/amount and taking your points or telling you youre too poor
function buy(valuesarray) {
    console.log(`%cBuyFuncStart`, "color: pink")
    // console.log(valuesarray[0])
    // console.log(valuesarray[1])
    if (score >= valuesarray[1]) {

        score -= valuesarray[1]

        console.log(`%cBought for ${valuesarray[1]} cash, ${score} cash remaining`, "color: green")

        valuesarray[0]++
        valuesarray[2].innerHTML = `Amount: ${valuesarray[0]}`
        
        valuesarray[1] = Math.floor((1.15 ** valuesarray[0]) * valuesarray[4])
        valuesarray[3].innerHTML = `Buy: $${valuesarray[1]}`

        // if (valuesarray[0] > 5) {
        //     Array.from(buildingimages).forEach(element => {
        //         element.style.height = "45px"
        //     });
        // }
    } else {
        valuesarray[3].innerHTML = "Can't afford"
        valuesarray[3].style.color = "red"
        setTimeout(() => {
            valuesarray[3].innerHTML = `Buy: $${valuesarray[1]}`
            valuesarray[3].style.color = "white"
        }, 500);
        console.log(`%cCantAfford`, "color: red")
    }

    // unlock upgrades
    if (valuesarray1[0] > 14) {
        upgrade2.style.display = "block"
    }

    if (valuesarray6[0] > 14) {
        upgrade4.style.display = "block"
    }

    // unlock buildings
    if (valuesarray2[0] > 9) {
        building2.style.display = "block"
        buildingsbg2.style.display = "block"
    }

    if (valuesarray3[0] > 9) {
        building3.style.display = "block"
        buildingsbg3.style.display = "block"

    }
    if (valuesarray5[0] > 14) {
        building4.style.display = "block"
        buildingsbg4.style.display = "block"
    }

    if (valuesarray8[0] > 14) {
        building5.style.display = "block"
        buildingsbg5.style.display = "block"
    }

    // 
    cash.innerHTML = `Cash:${score}`
    clickpowercounter.innerHTML = `Pow:${clickpower}`
    cpscounter.innerHTML = `Cps:${cps}`
    console.log(`%cCash per second is ${cps}`, "color: yellow")
    console.log(`%cClickpower is ${clickpower}`, "color: yellow")
    console.log(`%cBuyFuncEnd`, "color: pink")
    // console.log(valuesarray[0])
    // console.log(valuesarray[1])
}

// same as buy function but for 1-time purchases
function onetimebuy(valuesarray) {
    console.log(`%c1TimeBuyFuncStart`, "color: pink")
    // console.log(valuesarray[0])
    // console.log(valuesarray[1])
    if (score >= valuesarray[1] && valuesarray[4] == false) {

        score -= valuesarray[1]

        console.log(`%cBought for ${valuesarray[1]} cash, ${score} cash remaining`, "color: green")

        valuesarray[2].innerHTML = `Purchased`
        valuesarray[2].style.color = "grey"
        valuesarray[2].style.backgroundColor = "limegreen"

        valuesarray[3].style.display = "none"

        valuesarray[4] = true
    } else {
        valuesarray[3].innerHTML = "Can't afford"
        valuesarray[3].style.color = "red"
        setTimeout(() => {
            valuesarray[3].innerHTML = `Buy: $${valuesarray[1]}`
            valuesarray[3].style.color = "white"
        }, 500);
        console.log(`%cCantAfford`, "color: red")
    }

    // unlocks upgrades
    if (valuesarray4[4]) {
        upgrade3.style.display = "block"
    }
    
    if (valuesarray7[4]) {
        upgrade5.style.display = "block"
    }

    // 
    cash.innerHTML = `Cash:${score}`
    cpscounter.innerHTML = `Cps:${cps}`
    console.log(valuesarray[4])
    console.log(`%cCash per second is ${cps}`, "color: yellow")
    console.log(`%cClickpower is ${clickpower}`, "color: yellow")
    console.log(`%c1TimeBuyFuncEnd`, "color: pink")
}

// upgrades

// buy kitten wing
function buyUpgrade1() {
    if (score >= valuesarray1[1]) {
        clickpower++
    }

    buy(valuesarray1)
}

// buy cheesepurrger
let crithit1 = false
const crittxt = document.getElementById("crithit")

function buyUpgrade2() {
    if (score >= valuesarray4[1]) {
        crithit1 = true
    }

    onetimebuy(valuesarray4)
}

// buy kitshake
function buyUpgrade3() {
    if (score >= valuesarray6[1]) {
        clickpower += 5
    }

    buy(valuesarray6)
}

// buy mipi infection
let mipipurchased = false
const mipi = document.getElementById("mipi")
let mipispawnchance

function buyUpgrade4() {
    if (score >= valuesarray7[1]) {
        mipipurchased = true
        mipispawnchance = 25
    }

    onetimebuy(valuesarray7)
}

// buy steroids
const building1power = document.getElementById("power1")
let cccps = 2

function buyUpgrade5() {
    if (score >= valuesarray9[1]) {
        console.log(cccps)

        cps += (valuesarray2[0] * 4)
        cccps = cccps * 3

        console.log(cps)
        console.log(cccps)

        power1.innerHTML = "Hire Cat Chef (+6 Cash Per Second)"
    }

    onetimebuy(valuesarray9)
}

// buildings
const buildingimages = document.getElementsByClassName("buildingimg")

// buy cat chef (kitten cooker)
const buildingsbg1 = document.getElementById("buildingsbg1")
const catchef = document.getElementById("buildingimg1")
let bought1 = false

function buyBuilding1() {
    if (score >= valuesarray2[1] && bought1 == false) {
        cps += cccps
        catchef.style.display = "inline"
        bought1 = true
    } else if (score >= valuesarray2[1] && bought1 == true) {
        cps += cccps
        catchefclone = catchef.cloneNode(true)
        buildingsbg1.insertBefore(catchefclone, catchef)
    }

    buy(valuesarray2)
}

// buy horse (cat collector)
const buildingsbg2 = document.getElementById("buildingsbg2")
const horse = document.getElementById("buildingimg2")
let bought2 = false

function buyBuilding2() {
    if (score >= valuesarray3[1] && bought2 == false) { 
        cps += 6
        horse.style.display = "inline"
        bought2 = true
    } else if (score >= valuesarray3[1] && bought2 == true) {
        cps += 6
        horseclone = horse.cloneNode(true)
        buildingsbg2.insertBefore(horseclone, horse)
    }
    
    buy(valuesarray3)
}

// buy notadog (customer service)
const buildingsbg3 = document.getElementById("buildingsbg3")
const notadog = document.getElementById("buildingimg3")
let bought3 = false

function buyBuilding3() {
    if (score >= valuesarray5[1] && bought3 == false) { 
        cps += 18
        notadog.style.display = "inline"
        bought3 = true
    } else if (score >= valuesarray5[1] && bought3 == true) {
        cps += 18
        notadogclone = notadog.cloneNode(true)
        buildingsbg3.insertBefore(notadogclone, notadog)
    }
    
    buy(valuesarray5)
}

// buy restaurant
const buildingsbg4 = document.getElementById("buildingsbg4")
const restaurant = document.getElementById("buildingimg4")
let bought4 = false

function buyBuilding4() {
    if (score >= valuesarray8[1] && bought4 == false) {
        cps += 60
        restaurant.style.display = "inline"
        bought4 = true
    } else if (score >= valuesarray8[1] && bought4 == true) {
        cps += 60
        restaurantclone = restaurant.cloneNode(true)
        buildingsbg4.insertBefore(restaurantclone, restaurant)
    }

    buy(valuesarray8)
}

// buy the sahara dessert
const buildingsbg5 = document.getElementById("buildingsbg5")
let bought5 = false

function buyBuilding5() {
    if (score >= valuesarray10[1] && bought5 == false) {
        cps += 600
        buildingsbg5.style.backgroundImage = "url(images/cfkdesert.png)"

        bought5 = true
    }

    onetimebuy(valuesarray10)
}

function mipicaught() {
    mipi.style.display = "none"

    mipiperc = (Math.floor(Math.random() * 35) + 10)
    score = score + (Math.ceil(score * (mipiperc / 100)))

    console.log(`%cYou catched a mipi! Score increased by ${(Math.ceil(score * (mipiperc / 100)))}`, "color: gold")
    cash.innerHTML = `Cash:${score}`
}

function everysecond() {
    // console.log("test2")

    setInterval(() => {
        // console.log("test3")
        score = (score + cps)
        cash.innerHTML = `Cash:${score}`
        cpscounter.innerHTML = `Cps:${cps}`

        if (mipipurchased) {
            mipichance = Math.floor(Math.random() * mipispawnchance)
            if (mipichance == 1) {
                console.log(`%cA mipi spawned!`, "color: purple")
                mipix = Math.floor(Math.random() * 100)
                mipiy = Math.floor(Math.random() * 100)

                mipi.style.left = `${mipix}%`
                mipi.style.top = `${mipiy}%`
                mipi.style.display = "block"

                mipipurchased = false

                setTimeout(() => {
                    mipi.style.display = "none"

                    mipi1 = true
                }, 3000);
            }
        }
        
    }, 1000);
}