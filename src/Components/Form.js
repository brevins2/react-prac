import React, { useState } from "react";

const Form = ({onAdd}) => {
    const [ name, setName ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ favioret, setFavioret ] = useState('')

    const sendData = (e) => {
        e.preventDefault()

        if(!name) {
            alert('please enter name')
            return
        }

        onAdd({name, email, favioret})

        setName('')
        setEmail('')
        setFavioret('')
    }

    return(
        <>
            <form onSubmit={sendData}>
                <div className="form-group">
                    <label>Name</label>
                    <input type="text" className="form-control" value={name}/>
                </div>

                <div className="form-group">
                    <label>Email</label>
                    <input type="text" className="form-control" value={email}/>
                </div>

                <div className="form-group">
                    <label>Favioret</label>
                    <input type="text" className="form-control" value={favioret}/>
                </div>

                <button type="submit" className="btn btn-success">Save</button>
            </form>
        </>
    );
}

export default Form;