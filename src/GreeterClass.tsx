//import React from 'react'
import React, {Component} from 'react'

interface GreeterProps {
    companyName: string;
}

//class Greeter extends React.Component {
class Greeter extends Component<GreeterProps> {
    render() {
        return (
            <p>Greetings from {this.props.companyName}!</p>
        );
    }

}

export default Greeter;