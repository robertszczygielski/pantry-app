import React from "react";
import { useField } from "formik";

export const CategorySelect = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <>
            <label htmlFor={props.id || props.name}>{label}</label>
            <select {...field} {...props} />
            {meta.touched && meta.error ? (
                <div>{meta.error}</div>
            ) : null}
        </>
    );
}

