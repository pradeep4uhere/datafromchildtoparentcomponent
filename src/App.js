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


const dataFromChildintoAppComponent = (fromChildComponentData) =>{
  console.log("Data In App Component");
  console.log(fromChildComponentData);

  const appComponentObject = {
    ...fromChildComponentData,
    id: 'appComponentId'+Math.random().toString()
  }

  console.log("Data From Child To App Component With Updated Object With New Id");
  console.log(appComponentObject);
}
  return (
    <div className="App">
      <ParentComponent />
      <ChildComponent appObject={appObject} getDataToAppComponentFromChild={dataFromChildintoAppComponent}/>
    </div>
  );
}

export default App;
