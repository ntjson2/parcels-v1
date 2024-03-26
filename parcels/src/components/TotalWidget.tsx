import styles from "./TotalWidget.module.scss";

const TotalWidget = () =>{
    return(
        <div className={`py-3 text-center rounded-2 text-dark m-3 ${styles.gradientBackGround}`}>
            <p>General List of located</p>
            <h1>Minerals</h1>
        </div>
    );
};
export default TotalWidget;