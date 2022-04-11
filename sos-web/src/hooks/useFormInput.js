import { useState } from "react";

export const useFormInput = (initialValue, validate = () => true) => {
    const [value, setValue] = useState(initialValue);
    const [isValid, setIsValid] = useState();
    const [touched, setTouched] = useState(false);

    const onChange = (event) => {
        const newValue = event.target.value;
        setValue(newValue);
        setIsValid(validate(newValue));
        setTouched(true);
    };

    return {isValid, touched, value, onChange};
};