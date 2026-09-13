// ==========================================
// BANKING DASHBOARD JAVASCRIPT
// ==========================================


// Current balance
let balance = 3567.37;


// ==========================================
// TRANSFER MONEY
// ==========================================

function transferMoney() {

    let amount = Number(
        document.getElementById("sendAmount").innerText
    );

    if (amount <= 0) {
        alert("Invalid amount");
        return;
    }

    if (amount > balance) {
        alert("Insufficient balance!");
        return;
    }

    balance -= amount;

    document.getElementById("balance").innerText =
        "$" + balance.toFixed(2);

    alert(
        "Transfer successful!\nAmount: $" +
        amount.toFixed(2)
    );

    addTransaction(
        "Family Transfer",
        amount,
        "expense"
    );
}


// ==========================================
// ADD TRANSACTION
// ==========================================

function addTransaction(name, amount, type) {

    const list =
        document.getElementById("transactionList");

    const transaction =
        document.createElement("div");

    transaction.className =
        "transaction " + type;

    let sign = type === "income" ? "+" : "-";

    transaction.innerHTML = `

        <div class="transaction-icon">
            ${type === "income" ? "↓" : "↑"}
        </div>

        <div>
            <strong>${name}</strong>
            <small>Just now</small>
        </div>

        <span>
            ${type === "income" ? "Income" : "Expense"}
        </span>

        <b class="${type === "income" ? "positive" : "negative"}">
            ${sign}$${amount.toFixed(2)}
        </b>
    `;

    list.prepend(transaction);
}


// ==========================================
// FILTER TRANSACTIONS
// ==========================================

function filterTransactions() {

    const filter =
        document.getElementById(
            "transactionFilter"
        ).value;

    const transactions =
        document.querySelectorAll(
            ".transaction"
        );

    transactions.forEach(transaction => {

        if (filter === "all") {

            transaction.style.display =
                "grid";

        }

        else if (
            transaction.classList.contains(filter)
        ) {

            transaction.style.display =
                "grid";

        }

        else {

            transaction.style.display =
                "none";

        }

    });
}


// ==========================================
// BALANCE DETAILS
// ==========================================

function showBalanceDetails() {

    alert(
        "Account Balance\n\n" +
        "Available Balance: $" +
        balance.toFixed(2) +
        "\n\nAccount Type: Savings\n" +
        "Status: Active"
    );
}


// ==========================================
// CARD SLIDER
// ==========================================

const cards = [

    {
        number: "4153 2415 3467 8764",
        expiry: "06/25"
    },

    {
        number: "5246 7832 1298 6542",
        expiry: "08/27"
    },

    {
        number: "6398 4512 7834 2219",
        expiry: "11/28"
    }

];

let currentCard = 0;


// Next card
function nextCard() {

    currentCard++;

    if (currentCard >= cards.length) {
        currentCard = 0;
    }

    updateCard();
}


// Previous card
function previousCard() {

    currentCard--;

    if (currentCard < 0) {
        currentCard = cards.length - 1;
    }

    updateCard();
}


// Update card UI
function updateCard() {

    const card =
        cards[currentCard];

    const bankCard =
        document.getElementById("bankCard");

    bankCard.innerHTML = `

        <div class="card-top">
            <span>VISA</span>
            <span>onebank</span>
        </div>

        <div class="card-number">
            ${card.number}
        </div>

        <div class="card-bottom">
            <span>${card.expiry}</span>
            <span>◉</span>
        </div>

    `;
}


// ==========================================
// NAVIGATION
// ==========================================

const navItems =
    document.querySelectorAll(".nav-item");

navItems.forEach(item => {

    item.addEventListener("click", function () {

        navItems.forEach(nav => {
            nav.classList.remove("active");
        });

        this.classList.add("active");

    });

});


// ==========================================
// SIDEBAR BUTTONS
// ==========================================

const sideButtons =
    document.querySelectorAll(".side-btn");

sideButtons.forEach(button => {

    button.addEventListener("click", function () {

        sideButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        this.classList.add("active");

    });

});


// ==========================================
// PAGE LOAD
// ==========================================

document.addEventListener(
    "DOMContentLoaded",
    function () {

        console.log(
            "Banking Dashboard Loaded Successfully"
        );

        console.log(
            "Current Balance:",
            balance
        );

    }
);

// for this profile open page
let profile=document.querySelector(".profile");
profile.addEventListener("click",function(){
    window.location.href="profile.html";
})