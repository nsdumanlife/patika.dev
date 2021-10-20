import { useState } from 'react'

function InputExample() {
    const [ form, setForm] = useState({ name: '', surname:'' })
    

    const onChangeInput = (e) => {
        console.log(e.target.value)
        setForm({ ...form, [e.target.name]: e.target.value})
    }
    return (
        <div>
            <br />
            <input name='name' value={form.name} onChange={onChangeInput} />
            <br /> <br />
            <input name='surname' value={form.surname} onChange={onChangeInput}  />
            <h3>{form.name} {form.surname}</h3>
        </div>
    )
}

export default InputExample
