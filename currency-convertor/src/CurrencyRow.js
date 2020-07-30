import React from 'react'

export default function CurrencyRow({currencyOptions}) {
// const {currencyOptions} = props

    return (
        <div>
            <input type='number' className='input' />
            <select>
                {currencyOptions.map(options =>(
                    <option key={options} value={options}>
                    {options}
                    </option>
                ))}
            </select>
        </div>
    )
}
