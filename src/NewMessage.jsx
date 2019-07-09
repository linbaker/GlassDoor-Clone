import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import NewMessageControl from './NewMessageControl';

function NewMessage(props){

        let _name = null;
        let _message = null;

    function handleNewMessageSubmission(event) {
        event.preventDefault();
        console.log(_name);
        console.log(_message);
        
        props.onNewMessageCreation({name: _name.value, message: _message.value, id: v4()});
        _name.value = '';
        _message.value = '';
        }

    return (
        <div>
            <form onSubmit={handleNewMessageSubmission}>
                <input type='text' id='name' placeholder='Your Name' ref={(input) => {_name = input;}}/>
                <textarea id='message' placeholder='Describe your message.' ref={(textarea) => {_message = textarea;}}/>
                <button type='submit'>Add Message</button>
            </form>
        </div>
      );
    }
    
    NewMessage.propTypes = {
      onNewMessageCreation: PropTypes.func
    };


export default NewMessage;