import classes from "./Key.module.scss"


const Key = ({ value, className, onClick }) => {
    return (
        <div onClick={()=>onClick(value)} className={`${classes.Key} ${className}`}>
            {value}
        </div>
    )
}

export { Key }
export default Key