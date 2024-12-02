const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calculateNetSalary() {
    rl.question("Enter the basic salary: ", (basicSalary) => {
        rl.question("Enter total benefits: ", (benefits) => {
            basicSalary = parseFloat(basicSalary);
            benefits = parseFloat(benefits);

            // Calculate gross salary
            const grossSalary = basicSalary + benefits;

            // Calculate PAYE
            let payee = 0;
            if (grossSalary <= 24000) {
                payee = grossSalary * 0.10;
            } else if (grossSalary <= 32333) {
                payee = grossSalary * 0.25;
            } else if (grossSalary <= 500000) {
                payee = grossSalary * 0.30;
            } else if (grossSalary <= 800000) {
                payee = grossSalary * 0.325;
            } else {
                payee = grossSalary * 0.35;
            }

            // Calculate NHIF (based on salary)
            let nhif = 0;
            if (grossSalary <= 5999) nhif = 150;
            else if (grossSalary <= 7999) nhif = 300;
            else if (grossSalary <= 11999) nhif = 400;
            else if (grossSalary <= 14999) nhif = 500;
            else if (grossSalary <= 19999) nhif = 600;
            else if (grossSalary <= 24999) nhif = 750;
            else if (grossSalary <= 29999) nhif = 850;
            else if (grossSalary <= 34999) nhif = 900;
            else if (grossSalary <= 39999) nhif = 950;
            else if (grossSalary <= 43999) nhif = 1000;
            else if (grossSalary <= 49999) nhif = 1100;
            else if (grossSalary <= 59999) nhif = 1200;
            else if (grossSalary <= 69999) nhif = 1300;
            else if (grossSalary <= 79999) nhif = 1400;
            else if (grossSalary <= 89999) nhif = 1500;
            else if (grossSalary <= 99999) nhif = 1600;
            else nhif = 1700;

            // Calculate NSSF (Tier I and Tier II)
            let nssf = 0;
            if (grossSalary <= 7000) {
                nssf = grossSalary * 0.06; // Tier I
            } else if (grossSalary <= 36000) {
                nssf = grossSalary * 0.12; // Tier I + Tier II
            } else {
                nssf = grossSalary * 0.12; // Only Tier II
            }

            // Calculate net salary
            const netSalary = grossSalary - payee - nhif - nssf;

            // Display results
            console.log(`Gross Salary: Ksh ${grossSalary}`);
            console.log(`PAYE: Ksh ${payee}`);
            console.log(`NHIF Deduction: Ksh ${nhif}`);
            console.log(`NSSF Deduction: Ksh ${nssf}`);
            console.log(`Net Salary: Ksh ${netSalary}`);

            rl.close();
        });
    });
}

// Call the function to calculate salary
calculateNetSalary();
