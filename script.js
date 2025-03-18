document.getElementById("calculateBtn").addEventListener("click", function () {
    const salary = parseFloat(document.getElementById("salary").value);
    if (isNaN(salary) || salary <= 0) {
        alert("Please enter a valid salary amount.");
        return;
    }

    const budgetBreakdown = {
        Needs: {
            Rent: 0.3,
            Utilities: 0.1,
            Groceries: 0.1,
        },
        Wants: {
            Entertainment: 0.15,
            Dining: 0.1,
            Shopping: 0.05,
        },
        Savings: {
            Investments: 0.1,
            EmergencyFund: 0.1,
        }
    };

    let resultsHTML = "";
    for (const [category, subcategories] of Object.entries(budgetBreakdown)) {
        resultsHTML += `<tr><td><strong>${category}</strong></td><td></td></tr>`;
        for (const [subCategory, percentage] of Object.entries(subcategories)) {
            resultsHTML += `<tr><td>${subCategory}</td><td>Ksh ${(salary * percentage).toFixed(2)}</td></tr>`;
        }
    }

    document.getElementById("budgetDetails").innerHTML = resultsHTML;
    document.getElementById("results").classList.remove("hidden");
});
