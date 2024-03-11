import styles from "./TotalWidget.module.scss";

const TotalWidget = () =>{
    return(
        <div className={`py-3 text-center rounded-2 text-dark m-3 ${styles.gradientBackGround}`}>
            <p>Total prospected</p>
            <h1>43 oz</h1>
        </div>
    );
};
export default TotalWidget;