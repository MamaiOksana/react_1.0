import  React from 'react'
// const Actors = (props) =>{
//     console.log(props);
//     return (
//         <div>
//             <h1>{props.name}</h1>
//             <img src={props.img} alt={props.name} />
//         </div>
//     );
// }
//
// export default Actors;


const Actors = (props) =>{
    const {name, img} = props;
    return (
        <div>
            <h1>{name}</h1>
            <img src={img} alt={props.name} />
        </div>
    );
}

export default Actors;