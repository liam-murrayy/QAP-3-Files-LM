// Desc: JavaScript code for Mo's Lawncare Services Invoice
// Author: Liam Murray
// Date: 2025-07-27

// Constants for rates

var BORDER_RATE = 0.35;        // dollars per sq ft (border)
var BORDER_PERCENT = 0.04;     // 4% border area of lawn
var MOWING_RATE = 0.07;        // dollars per sq ft mowing
var FERTILIZER_RATE = 0.05;    // dollars per sq ft fertilizer
var SALES_TAX_RATE = 0.15;     // 15% HST sales tax
var ENV_TAX_RATE = 0.014;      // 1.4% environmental tax

// Format currency function

function formatCurrency(num) {
    return num.toLocaleString("en-CA", {style:"currency", currency:"CAD", minimumFractionDigits: 2});
}

// Event listener for form submission

document.getElementById("lawnForm").onsubmit = function(event) {
    event.preventDefault();

    var name = document.getElementById("customerName").value.trim();
    var street = document.getElementById("streetAddress").value.trim();
    var city = document.getElementById("city").value.trim();
    var phone = document.getElementById("phone").value.trim();
    var squareFeet = parseFloat(document.getElementById("squareFeet").value);

    // Calculate border area and cost

    var borderArea = squareFeet * BORDER_PERCENT;
    var borderCost = borderArea * BORDER_RATE;

    // Calculate mowing area and cost

    var mowingArea = squareFeet - borderArea;
    var mowingCost = mowingArea * MOWING_RATE;

    // Fertilizer cost (whole lawn)

    var fertilizerCost = squareFeet * FERTILIZER_RATE;

    // Total charges before tax

    var totalCharges = borderCost + mowingCost + fertilizerCost;

    // Calculate taxes

    var salesTax = totalCharges * SALES_TAX_RATE;
    var envTax = totalCharges * ENV_TAX_RATE;

    // Final invoice total

    var invoiceTotal = totalCharges + salesTax + envTax;

    // Show the invoice section

    document.getElementById("invoiceSection").style.display = "block";

    // Display customer details (name, street, city + phone)

    document.getElementById("custDetails").innerHTML = name + "<br>" + street + "<br>" + city + " " + phone;

    // Display calculated costs with formatting
    
    document.getElementById("size").textContent = squareFeet.toLocaleString();
    document.getElementById("borderCost").textContent = formatCurrency(borderCost);
    document.getElementById("mowingCost").textContent = formatCurrency(mowingCost);
    document.getElementById("fertilizerCost").textContent = formatCurrency(fertilizerCost);
    document.getElementById("totalCharges").textContent = formatCurrency(totalCharges);
    document.getElementById("salesTax").textContent = formatCurrency(salesTax);
    document.getElementById("envTax").textContent = formatCurrency(envTax);
    document.getElementById("invoiceTotal").textContent = formatCurrency(invoiceTotal);
};

