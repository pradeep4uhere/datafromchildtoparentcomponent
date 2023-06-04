import { useState } from "react";
import ChildForm from "./childForm";
const ChildComponent = (props) => {
    console.log("This is in Child Component");
    console.log(props.appObject)
    const [childData,setChildData] = useState('');

    const getDataFromChildForm = (enteredDhileFormData) =>{
        console.log("This is Data From Child Component");
        console.log(enteredDhileFormData);


        const newFormDataObject = {
            ...enteredDhileFormData,
            id: Math.random().toString()
        }

        console.log("Data From Child With Updated Object with new key id");
        console.log(newFormDataObject);
        setChildData(newFormDataObject);

        //Sending Data to App Component
        props.getDataToAppComponentFromChild(newFormDataObject);
    }
    return (
    <center>
       
        <center><div><strong>Data Comming From Child Form Component Into Parent Component</strong></div>
            <p>id: {childData.id}</p>
            <p>Title: {childData.title}</p>
            <p>Age: {childData.age}</p>
            <p>Email: {childData.email}</p>
        </center>
        <ChildForm setdataFromChildForm={getDataFromChildForm}/>
    </center>
    );
  }


  export default ChildComponent;