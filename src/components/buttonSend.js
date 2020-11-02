import React from "react"
import {Button} from 'reactstrap';

class ButtonSend extends React.Component {
  render() {
    const { sent, sending } = this.props;

    let display = ( sent || sending ? "display" : "hidden");
    
    let iconClass = "default";
    if (sending) {
      iconClass = "fa fa-icon-refresh icon-spin";
    } else if (sent) {
      iconClass = "fa fa-done";
    }
    
    return (
       <Button  id="sendMessageButton" 
                class="btn btn-primary btn-xl text-uppercase" 
                type="submit">
          <i class={iconClass}
              ></i>
          {( sent ? 'SENT!' : 'Send')}
      </Button>
    )
    
  }
}
export default ButtonSend

