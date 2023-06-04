import { useState } from 'react';
import ChildComponent from './Child';
import ParentComponent from './ParentComponent';

function App() {
  const appObject = [
    {
        title:"Pradeep",
        age: "32",
        email: "Pradeep@gmail.com"
    },
    {
      title:"Pradeep",
      age: "32",
      email: "Pradeep@gmail.com"
  },
    {
      title:"Pradeep",
      age: "32",
      email: "Pradeep@gmail.com"
  },
  {
    title:"Pradeep",
    age: "32",
    email: "Pradeep@gmail.com"
  }
];

const [childData,setChildData] = useState('');


const dataFromChildintoAppComponent = (fromChildComponentData) =>{
  console.log("Data In App Component");
  console.log(fromChildComponentData);

  const appComponentObject = {
    ...fromChildComponentData,
    id: 'appComponentId'+Math.random().toString()
  }

  console.log("Data From Child To App Component With Updated Object With New Id");
  console.log(appComponentObject);
  setChildData(appComponentObject);
}
  return (
    <div className="App">
      <center><div><strong>Data Comming From Child Component Into App Component</strong></div>
        <p>Title: {childData.title}</p>
        <p>Age: {childData.age}</p>
        <p>Email: {childData.email}</p>
      </center>
      <ChildComponent appObject={appObject} getDataToAppComponentFromChild={dataFromChildintoAppComponent}/>
    </div>
  );
}

export default App;
