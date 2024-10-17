import classes from "./Calculator.module.scss"
import { Display, Keypad } from "components"

const Calculator = () => {

    const handleOperatorChange = (val) => {
        console.log(val)
    }

    const handleNumberhange = (val) => {
        console.log(val)
    }


    return (
        <div className={classes.calculator}>
            <Display />
            <Keypad onOperatorChange={handleOperatorChange} onNumberChange={handleNumberhange} />
        </div>
    )
}

export { Calculator }
export default Calculator