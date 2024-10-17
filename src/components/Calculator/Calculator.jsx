import classes from "./Calculator.module.scss"
import { Display } from "components"

const Calculator = ()=>{
    return (
        <div className={classes.calculator}>
            <Display />
        </div>
    )
}

export { Calculator }
export default Calculator