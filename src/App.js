import {SingleUser, Users} from "./components";
import React, {useState} from "react";
import {Form1} from "./components/Form1/Form1";
import {Form2} from "./components/Form2/Form2";



const App = () => {
    const [singleUser, setSingleUser] = useState(null);

    return(
        <div>
            {/*{singleUser && <SingleUser user={singleUser} />}*/}
            {/*<Users getUser={setSingleUser}/>*/}
            {/*<Form1/>*/}
            <Form2/>
        </div>
    );
};

export default App;