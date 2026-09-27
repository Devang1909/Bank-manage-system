const transferForm = document.getElementById("transferForm");
const transferMessage = document.getElementById("message");
const availableBalance = document.querySelector(".balance-card h2");

let transferBalance = 85450;

function showTransferMessage(text, isError = false) {
    transferMessage.textContent = text;
    transferMessage.style.color = isError ? "#dc2626" : "#16a34a";
}

transferForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const beneficiary = document.getElementById("beneficiary").value.trim();
    const account = document.getElementById("account").value.trim();
    const ifsc = document.getElementById("ifsc").value.trim().toUpperCase();
    const amount = Number(document.getElementById("amount").value);
    const transferType = document.getElementById("transferType").value;

    if (!beneficiary || !/^\d{9,18}$/.test(account)) {
        showTransferMessage("Enter a valid beneficiary and account number.", true);
        return;
    }

    if (!/^[A-Z]{4}0[A-Z0-9]{6}$/.test(ifsc)) {
        showTransferMessage("Enter a valid IFSC code.", true);
        return;
    }

    if (!Number.isFinite(amount) || amount <= 0) {
        showTransferMessage("Enter a valid transfer amount.", true);
        return;
    }

    if (!transferType) {
        showTransferMessage("Select a transfer type.", true);
        return;
    }

    if (amount > transferBalance) {
        showTransferMessage("Insufficient balance for this transfer.", true);
        return;
    }

    transferBalance -= amount;
    availableBalance.textContent = "₹" + transferBalance.toFixed(2);
    showTransferMessage("Transfer request submitted successfully.");
    transferForm.reset();
});