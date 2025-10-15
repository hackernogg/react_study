import { calculateInvestmentResults, formatter } from '../util/investment.js'

export default function Result({ currentValue }) {
    console.log(currentValue)
    const result = calculateInvestmentResults({ ...currentValue })
    console.log(result)
    return (
        <table id="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest (Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>

                {result.map((record) => (
                    <tr key={record.year}>
                        <td>{record.year}</td>
                        <td>{formatter.format(record.valueEndOfYear)}</td>
                        <td>{formatter.format(record.interest)}</td>
                        <td>{formatter.format(record.valueEndOfYear-(currentValue.annualInvestment * record.year + currentValue.initialInvestment))}</td>
                        <td>{formatter.format(currentValue.annualInvestment * record.year + currentValue.initialInvestment)}</td>
                    </tr>
                ))}

            </tbody>
        </table>
    );
};