
export const checkValidData =(email, password) =>{

    const isEmailVaild =/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);

    const isPasswordValid =/^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{8,})\S$/.test(password);

    if(!isEmailVaild) return "Email ID is not valid"
    if(!isPasswordValid) return "Password is not valid"

    return null;

}

