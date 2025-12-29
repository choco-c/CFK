// this code uses objects instead of arrays for the buy function

let valuesobject1 = {
    amount: amount1,
    cost: cost1,
    amountdiv: amountdiv1,
    costdiv: costdiv1
}

let valuesobject2 = {
    amount: amount2,
    cost: cost2,
    amountdiv: amountdiv2,
    costdiv: costdiv2
}

let valuesobject3 = {
    amount: amount3,
    cost: cost3,
    amountdiv: amountdiv3,
    costdiv: costdiv3
}

// buy function but using objects instead of arrays

function buy(valuesobject) {
    console.log("testFuncStart")
    console.log(valuesobject.amount)
    console.log(valuesobject.cost)
    if (score >= valuesobject.cost) {
        score -= valuesobject.cost

        valuesobject.amount++
        valuesobject.amountdiv.innerHTML = `Amount: ${valuesobject.amount}`
        
        valuesobject.cost = Math.floor(1.5 * valuesobject.cost)
        valuesobject.costdiv.innerHTML = `Buy: $${valuesobject.cost}`
        console.log("testBuy")
    } else {
        valuesobject.costdiv.innerHTML = "Can't afford"
        valuesobject.costdiv.style.color = "red"
        setTimeout(() => {
            valuesobject.costdiv.innerHTML = `Buy: $${valuesobject.cost}`
            valuesobject.costdiv.style.color = "white"
        }, 500);
        console.log("testCantAfford")
    }

    // 
    if (valuesobject1.amount > 2) {
        upgrade2.style.display = "block"
    }
    
    if (valuesobject2.amount > 10) {
        upgrade3.style.display = "block"
    }

    // 
    cash.innerHTML = `Cash:${score}`
    cpscounter.innerHTML = `Cps:${cps}`
    console.log("testFuncEnd")
    console.log(valuesobject.amount)
    console.log(valuesobject.cost)
}

function buyUpgrade1() {
    if (score >= valuesobject1.cost) { 
        clickpower++
    }

    buy(valuesobject1)
}

    
function buyUpgrade2() {
    if (score >= valuesobject2.cost) { 
        cps++
    }

    buy(valuesobject2)
}

function buyUpgrade3() {
    if (score >= valuesobject3.cost) { 
        cps += 5
    }

    buy(valuesobject3)
}

// version of mipicaught function that can also increase your cps
function mipicaught() {
    let oneortwo = Math.floor(Math.random() * 2)
    mipi.style.display = "none"

    if (oneortwo == 1) {
        mipiperc = (Math.floor(Math.random() * 35) + 10)
        score = score + (Math.ceil(score * (mipiperc / 100)))
        console.log(`%cYou catched a mipi! Score increased by ${(Math.ceil(score * (mipiperc / 100)))}`, "color: gold")
        console.log(mipiperc)
        cash.innerHTML = `Cash:${score}`
    } else {
        mipicps = (Math.floor(Math.random() * cps / 2) + 1)
        cps += mipicps
        console.log(`%cYou catched a mipi! Cps increased by ${mipicps}`, "color: gold")
        console.log(mipicps)
        cpscounter.innerHTML = `Cps:${cps}`
    }
}