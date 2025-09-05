import { useState } from 'react';


export default function Square({value, onSquareClick }) {
    //const [value, setValue] = useState(null);


    // function handleClick() {
    //     console.log('clicked!');
    //     //setValue('x');
    // }
    return (
        <div>
            <button className="square"
                    onClick={onSquareClick}
            >{value}</button>
        </div>

    );
}