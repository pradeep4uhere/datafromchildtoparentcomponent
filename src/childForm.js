import { useState } from "react";

const ChildForm = (props) =>{

    const [entertedTitle, setEnteredTitle] = useState('');
    const [entertedAge, setEnteredAge] = useState('');
    const [entertedEmail, setEnteredEmail] = useState('');


    const sendDataFromChild = (event)=>{
        event.preventDefault();
        const newEnterobject = {
            title:entertedTitle,
            age:entertedAge,
            email:entertedEmail
        }   
        console.log("Data after Submit Form");
        console.log(newEnterobject);

        props.setdataFromChildForm(newEnterobject);
        setEnteredTitle('');
        setEnteredAge('');
        setEnteredEmail('');
    }
    return (
        <form onSubmit={sendDataFromChild}>
            <legend>Title</legend>
            <input type="text" name="title" value={entertedTitle}  onChange={(e) => setEnteredTitle(e.target.value)}/>
            <legend>Age</legend>
            <input type="text" name="age" value={entertedAge} onChange={(e)=>setEnteredAge(e.target.value)}/>
            <legend>Email</legend>
            <input type="email" name="email" value={entertedEmail} onChange={(e)=>setEnteredEmail(e.target.value)} />
            <legend></legend>
            <button type="submit">Click Here</button>
        </form>
    );

}

export default ChildForm;