import  React from 'react';
import "../stylesheet/Contador.css"
const Contador = ({numClics}) => {


    return (
        <div className='contador  '>
{numClics}
        </div>
    )
}

export default Contador; 