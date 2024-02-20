import styles from './plain.module.css'
export function Plain (props) {
    let styleObj = {
        height : 150,
        borderRadius : 10,
        margin : 10,
        backgroundColor : props.color
    }
    return <div style={styleObj}>Awesome plain color {props.color}</div>
}