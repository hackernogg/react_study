export default function InputBoard({ currentValue, onChangeValue }) {

    function handleChange(event, index) {
        onChangeValue(index, event.target.value);
    }
    return (
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label>INITIAL INVESTMENT </label>
                    <input type="number" value={currentValue.initialInvestment} onChange={(e) => handleChange(e, "initialInvestment")} required/>
                </p>
                <p>
                    <label>ANNUAL INVESTMENT </label>
                    <input type="number" value={currentValue.annualInvestment} onChange={(e) => handleChange(e, "annualInvestment")} required/>
                </p>



            </div>
            <div className="input-group">
                <p>
                    <label>EXPECTED RETURN </label>
                    <input type="number" value={currentValue.expectedReturn} onChange={(e) => handleChange(e, "expectedReturn")} required/>
                </p>
                <p>
                    <label>DURATION</label>
                    <input type="number" value={currentValue.duration} onChange={(e) => handleChange(e, "duration")} required/>
                </p>
            </div>
        </section>
    );
}