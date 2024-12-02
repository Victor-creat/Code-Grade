//Write a program whose major task is to calculate an individual's net salary by getting the inputs of the basic salary and benefits.Calculate the payee(Tax), NHIF Deductions,NSSF Deductions,gross salary,net salary


// net salary = grossSalary - nhifDeduction - nssfDeduction - tax
//gross salary = basicSalary + Benefits
//NHIF Deductions = grossSalary*NHIF RATE
//NSSF Deductions = grossSalary*NSSF RATE
//Taxable Income = Gross Salary - NHIF Deductions - NSSF Deductions
//input numbers in grossSalary()
//input numbers in nhifDeductions()
//input numbers in nssfDeductions()
//input numbers in tax()
//input numbers in netSalary()


const grossSalary = (basicSalary, Benefits) => {
    console.log(`gross Salary ${basicSalary + Benefits}`);
   
}
const nhifDeductions = (grossSalary, NHIF_RATES) => {
    console.log(`nhifDeductions ${grossSalary * NHIF_RATES}`);
   
}
const nssfDeductions = (grossSalary, NSSF_RATES) => {
    console.log(`nssfDeductions ${grossSalary * NSSF_RATES}`);
   
}
const tax = (grossSalary, nhifDeductions,nssfDeductions) => {
    console.log(`tax ${grossSalary - nhifDeductions - nssfDeductions}`);

}
const netSalary = (grossSalary, NHIFDeduction, NSSFDeduction,tax) => {
    console.log(`Net Salary ${grossSalary - NHIFDeduction - NSSFDeduction-tax}`);

}
grossSalary(,);

nhifDeductions(,);

nssfDeductions(,);

tax(,);

netSalary(,);

