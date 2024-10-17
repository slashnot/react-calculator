import classes from "./Display.module.scss"

const Display = ({ operation, result }) => {
    return (
        <div className={classes.display}>
            <div className={classes.operation}>12 x 12</div>
            <div className={classes.result}>1234</div>
        </div>
    )
}

export { Display }
export default Display