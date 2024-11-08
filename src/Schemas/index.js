import * as yup from 'yup';

 export const basicSchema=yup.object().shape({
    email:yup.string().email("Please enter the valid email address").required("This field is required"),
    password:yup.string().min(5,"Minimum 5 characters required").required("This field is required"),
})
