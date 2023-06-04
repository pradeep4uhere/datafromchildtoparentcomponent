import ChildForm from "./childForm";
const ChildComponent = (props) => {
    console.log("This is in Child Component");
    console.log(props.appObject)

    const getDataFromChildForm = (enteredDhileFormData) =>{
        console.log("This is Data From Child Component");
        console.log(enteredDhileFormData);


        const newFormDataObject = {
            ...enteredDhileFormData,
            id: Math.random().toString()
        }

        console.log("Data From Child With Updated Object with new key id");
        console.log(newFormDataObject);

        //Sending Data to App Component
        props.getDataToAppComponentFromChild(newFormDataObject);
    }
    return (
    <center>
        <h1>Hello this is Child Component</h1>
        <ChildForm setdataFromChildForm={getDataFromChildForm}/>
    </center>
    );
  }


  export default ChildComponent;