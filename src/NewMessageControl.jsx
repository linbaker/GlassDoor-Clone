import React from 'react';
import PropTypes from "prop-types";
import NewMessage from './NewMessage';
import Job from './Job';

class NewMessageControl extends React.Component {

    constructor(props) {
        super(props);
            this.state = {
                formVisibleOnPage: false
            };
            this.handlePressButton = this.handlePressButton.bind(this);
        }

        handlePressButton(){
            this.setState({formVisibleOnPage: true});
            console.log(this.state.formVisibleOnPage);
            
        }

        render(){
            let formVisible = null;
            if(this.state.formVisibleOnPage){
                formVisible = <NewMessage onNewMessageCreation={this.props.onNewMessageCreation}/>;
            } else {
                formVisible = <Job pressButton={this.handlePressButton}/>;
            }
            return (
                <div>
                    {formVisible}
                </div>
            );
        }
    }
    NewMessageControl.propTypes = {
        onNewMessageCreation: PropTypes.func
    };
export default NewMessageControl