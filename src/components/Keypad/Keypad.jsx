import { Key } from "components"
import classes from "./Keypad.module.scss"


const actions = ['C', 'AC', '<']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '.']
const operators = ['+', '-', 'x', '/']

const Keypad = ({ onNumberChange, onOperatorChange, onResult, onActions }) => {
    return (
        <div className={classes.Keypad}>
            <div className={classes.mainKeys}>
                {actions.map(act => (
                    <Key
                        key={act}
                        className={classes.actions}
                        value={act}
                        onClick={onActions}
                    />))}
                {numbers.map(num => (
                    <Key
                        key={num}
                        onClick={onNumberChange}
                        className={num === 0 ? classes.zero : ''}
                        value={num}
                    />))}
            </div>
            <div className={classes.operators}>
                {operators.map(operation => (
                    <Key
                        key={operation}
                        onClick={onOperatorChange}
                        className={classes.operation}
                        value={operation}
                    />
                ))}
                <Key
                    value="="
                    className={`${classes.operation} ${classes.equals}`}
                    onClick={onResult}
                />
            </div>
        </div >
    )
}

export { Keypad }
export default Keypad