import {useState} from 'react';



function SmartCounter() {
//retorna um vetor
// 1.variavel statefull
// 2.função amarrada a essa variavelque atualiza esse valor

        const [quantity, moodQuantity] = useState(18);


    return (
        <>

            <h1>{quantity}</h1>
            <button onClick ={()=> moodQuantity(quantity +1)}>Aumentar</button>
            <button onClick ={()=> moodQuantity(quantity -1)}>Diminuir</button>
        </>

    )

}

export default SmartCounter;