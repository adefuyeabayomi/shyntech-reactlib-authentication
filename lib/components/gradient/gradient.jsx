import styles from './gradient.module.css'
import { Component } from 'react'
export class Gradient extends Component{
    constructor(props){
        super(props);
        let {color1,color2} = props;
        this.color1 = color1;
        this.color2 = color2;
        this.styleObj = {
            height : 150,
            borderRadius : 10,
            margin : 10,
            padding : 10,
            fontWeight : 600,
            background: `linear-gradient(45deg, ${color1}, ${color2})`
        }        
    }

    render () {
        return <div style={this.styleObj}>Awesome gradient color {this.color1} &amp; {this.color2}</div>
    }
} 