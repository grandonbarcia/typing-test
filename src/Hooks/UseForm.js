import { useState } from 'react';



const UseForm = (form) => {


    let [loginInput, setLoginInput] = useState({
        username: '',
        password: '',
    });


    let [isFilled, isFormFilled] = useState(true)


    const [errors, setErrors] = useState({});

    const handleChange = e => {
        const { name, value } = e.target;

        setLoginInput({
            ...loginInput,
            [name]: value,
        });
        isFormFilled(checkFormPopulation(loginInput))

    }

    const clearForm = () => {

        setLoginInput({});
    }

    const checkFormPopulation = (form) => {
        let count = 0;
        let arr = Object.entries(form);
        for (let [key, value] of arr) {
            if (value.length > 4) {
                count++;
            }
        }
        if (count == arr.length) {
            return false
        }

        return true

    }

    return { handleChange, clearForm, loginInput, isFilled };
}

export default UseForm; 
