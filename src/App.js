
import React, { createContext } from "react";
import ComA from './Componenta';


const FirstName=createContext();
const LastName=createContext();



const App=()=>{
return (
<>
<FirstName.Provider value={'Mayank Awasthi'}>
 <LastName.Provider value={'Uttar Pradesh'} >
<ComA/>
</LastName.Provider>
</FirstName.Provider>

</>


)


}
export default App;
export {FirstName,LastName};
