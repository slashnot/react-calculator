import { useState } from "react"
import classes from "./Calculator.module.scss"
import { Display, Keypad } from "components"
import { useEffect } from "react"

const calcStates = {
    LT_NUMBER: 'ltNumber',
    RT_NUMBER: 'rtNumber',
    OPERATION: 'operation',
    RESULT: 'result'
}

const calculate = (ltNum, rtNum, operation) => {
    if (!ltNum || !rtNum || !operation) return 0

    switch (operation) {
        case '+':
            return +ltNum + +rtNum
        case '-':
            return +ltNum - +rtNum

        case 'x':
            return +ltNum * +rtNum

        case '/':
            return +ltNum / +rtNum

        default:
            return 0
    }
}
// ---- X-------------------------

const Calculator = () => {
    const [ltNum, setLtNum] = useState('')
    const [rtNum, setRtNum] = useState('')
    const [operation, setOperation] = useState('')
    const [calcState, setCalcState] = useState(calcStates['LT_NUMBER'])
    const [resultDisplay, setResultDisplay] = useState('0')
    const [operationsDisplay, setOperationsDisplay] = useState('-')


    useEffect(() => {
        setResultDisplay(`${ltNum} ${operation} ${rtNum}`)
    }, [ltNum, operation, rtNum])
    // ---- X-------------------------

    const handleOperatorChange = (val) => {
        setCalcState(calcStates['OPERATION'])
        setOperation(val)
    }
    // ---- X-------------------------

    const handleNumberhange = (val) => {
        if (calcState === calcStates['LT_NUMBER']) {
            setLtNum(num => num + '' + val)
        }

        if (calcState === calcStates['RESULT']) {
            setCalcState(calcStates['LT_NUMBER'])
            setLtNum(val)
        }

        if (calcState === calcStates['RT_NUMBER'] || calcState === calcStates['OPERATION']) {
            setCalcState(calcStates['RT_NUMBER'])
            setRtNum(num => num + '' + val)
        }
    }
    // ---- X-------------------------

    const handleResult = () => {
        setOperationsDisplay(resultDisplay)
        setLtNum(calculate(ltNum, rtNum, operation))
        setOperation('')
        setRtNum('')
        setCalcState(calcStates['RESULT'])
    }
    // ---- X-------------------------

    const handleActions = (val) => {
        switch (val.toLowerCase()) {
            case 'c':
                clearDisplay()
                break;

            case 'ac':
                clearAll()
                break;

            case '<':
                clearDisplay()
                break;
        }
    }
    // ---- X-------------------------

    const clearDisplay = () => {
        setLtNum('')
        setOperation('')
        setRtNum('')
        setCalcState(calcStates['LT_NUMBER'])
    }
    // ---- X-------------------------

    const clearAll = () => {
        clearDisplay()
        setOperationsDisplay('')
    }
    // ---- X-------------------------

    return (
        <div className={classes.calculator}>
            <Display
                operation={operationsDisplay}
                result={resultDisplay}
            />
            <Keypad
                onOperatorChange={handleOperatorChange}
                onNumberChange={handleNumberhange}
                onResult={handleResult}
                onActions={handleActions}
            />
        </div>
    )
}

export { Calculator }
export default Calculator