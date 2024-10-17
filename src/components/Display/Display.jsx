import classes from "./Display.module.scss"

const Display = ({ operation, result }) => {
    return (
        <div className={classes.display}>
            <div className={classes.operation}>{operation || '-'}</div>
            <div className={classes.result}>{result.trim() ? result : 0}</div>
        </div>
    )
}

export { Display }
export default Display