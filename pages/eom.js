import { Toolbar } from "../components/toolbar";
import styles from "../styles/EOM.module.css";

export const EOM = ({employee}) => {
    console.log(employee)
    return(
        <section className="page-container">
            
            <Toolbar />
            <div className={styles.main}>
                <h1>Employee of the month</h1>

                <div className={styles.employeeOfTheMonth}>
                    <h3>{employee.name}</h3>    
                    <h6>{employee.position}</h6>
                    <img src={employee.image} />
                    <p>{employee.description}</p>
                </div>
            </div>
        </section>
    )
}

export const getServerSideProps = async pageContext => {
    const apiResponse = await fetch("http://localhost:4000/employee");

    const employee = await apiResponse.json()

    return{
        props:{
            employee
        }
    }
}
export default EOM;