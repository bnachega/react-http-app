//import React from 'react'
import React, {Component} from 'react'

interface GreeterProps {
    companyName: string;
}

//class Greeter extends React.Component {
class Greeter extends Component<GreeterProps> {
    render() {
        return (
            <h1>Greetings... {this.props.companyName}!</h1>
        );
    }

}

export default Greeter;