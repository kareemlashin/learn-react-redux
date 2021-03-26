import React from 'react'
class Complex extends React.Component {

    constructor() {
        super()
    }
   
    render() {
        let z=5;
        if(z=5){
            z=10;
        }
        let users=[
            {name:'ddd2',age:20},
            {name:'dd3d',age:33},
            {name:'dd4d',age:22},
            {name:'dd5d',age:44},
            {name:'d6dd',age:12},
        ]
        return (
            <>
                Complex Complex Complex {z}
                <div >
                    <ul>
                        {users.map(user=>(
                            <li key={user.name} style={{'color':user.age>20?'red':'blue'}}>{user.name}</li>
                        ))}
                    </ul>
                </div>
            </>
        )
    }
}
export default Complex