import './PieChart.css';


export const PieChart = (props) => {


    return (
        <>
            <h4>Entertainment: ${props.entertainmentTotal}</h4>
            <h4>Groceries: ${props.groceriesTotal}</h4>
            <h4>Bills: ${props.billsTotal}</h4>
            <h4>Eating Out: ${props.eatingOutTotal}</h4>
            <h4>Fuel: ${props.fuelTotal}</h4>
            <h4>Pets: ${props.petsTotal}</h4>
            <h4>Savings: ${props.savingsTotal}</h4>
            <h4>Other: ${props.otherTotal}</h4>

           
            



        </>
    );
}
