const SignUpForm = (props) => {
    const handleSubmit = () => {
        // send data
        console.log('data sent');
    }

    return (
        <form action={handleSubmit()}>
            <label>
                Nome:
                <input type='text' name='name' placeholder='Nome' autoFocus={true}/>
            </label>
            <label>
                Sobrenome:
                <input type='text' name='lastName' placeholder='Sobrenome'/>
            </label>
            <label>
                Data de nascimento:
                <input type='date' name='birthday'/>
            </label>
            <label>
                Senha:
                <input type='password' name='password' placeholder='Senha'/>
            </label>
            <label>
                Confirmar senha:
                <input type='password' name='confirmPassword' placeholder='Confirmar senha'/>
            </label>
            <input type='submit' />
        </form>
    )
}

export default SignUpForm;
