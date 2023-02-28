import React from 'react'
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import { TextInput,Icon } from "react-materialize";
import './Contract.css'
export default function Contract() {
    return (
        <div className='box-container'>
            <div className='form-summit'>
                <TextInput 
                    icon="account_box"
                    id="TextInput-54"
                    label="Name"
                   
                />
                <TextInput
                    icon="phone"
                    id="TextInput-54"
                    label="Phone"
                />
                <TextInput
                    icon="assignment"
                    id="TextInput-54"
                    label="Reason"
                />
                <TextInput
                    icon="email"
                    id="TextInput-54"
                    label="Email"
                />
            </div>
            <div className='rate' style={{margin:'50px 0px'}}>
                <form action="#" >
                    <span>
                        <label className='rating'>
                            <input name="group1" type="radio"  />
                            <span><Icon>sentiment_very_dissatisfied</Icon></span>
                        </label>
                    </span>
                    <span>
                        <label className='rating'>
                            <input name="group1" type="radio" />
                            <span><Icon>sentiment_dissatisfied</Icon></span>
                        </label>
                    </span>
                    <span>
                        <label className='rating'>
                            <input name="group1" type="radio" />
                            <span><Icon>sentiment_neutral</Icon></span>
                        </label>
                    </span>
                    <span>
                        <label className='rating'>
                            <input name="group1" type="radio"  />
                            <span><Icon>sentiment_satisfied</Icon></span>
                        </label >
                    </span>
                    <span>
                        <label className='rating'>
                            <input name="group1" type="radio"  />
                            <span><Icon>sentiment_very_satisfied</Icon></span>
                        </label>
                    </span>
                </form>
            </div>
            <div style={{marginBottom:'20px'}}>
                <button class="btn waves-effect waves-light" type="submit" name="action">Submit
                    <i class="material-icons right">send</i>
                </button>
            </div>

        </div>

    )
}
