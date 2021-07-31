import React from 'react';
import './app/App.css';


export default function Home(props) {

    const { time, /* onTimeChange, */ calories, onCaloriesChange, diet, onDietChange, allergies, onAllergiesChange, onSubmitForm } = props

    return (
        <>
            <div className='page-body'>
                <h1 className='home'>Welcome! I'm Your Recipe Assistant! { time }</h1>
                <form onSubmit={onSubmitForm} className='form' id='userNutritionInfoForm' autoComplete='off'>
                    {/*Meals for Day or Week*/}
                    <label>Select your recipe plan info for the day!</label><br/>
                    {/* <input type='radio' id='time-frame-input-day' value='day' onChange={ onTimeChange } />
                    <label htmlFor='day'>Day</label> */}
                    {/* <input type='radio' id='time-frame-input-week' value='week' onChange={ onTimeChange } />
                    <label htmlFor='week'>Week</label><br /> */}
                    <div className='inputs'>
                        {/*Calorie Take */}
                        <label htmlFor='calories-input'/><br/>
                        <input type='text' id='calories-input' placeholder='Target Calories' onChange={ onCaloriesChange } value={ calories } /><br/>
                        {/*Diet*/}
                        <label htmlFor='diet-input' /><br/>
                        <input type='text' id='diet-input' placeholder='Diet: e.g. "Vegan"' onChange={ onDietChange } value={ diet } /><br/>
                        {/*Allergies*/}
                        <label htmlFor='allergies-input' /><br/>
                        <input type='text' id='allergies-input' placeholder='Allergies: e.g. "Gluten"' onChange={ onAllergiesChange } value={ allergies } /><br /><br />
                        {/*Form Submit*/}
                        <input type='submit' id='form-submit' value='Submit'/>
                    </div>
                </form>
            </div>
        </>
    );
    
}