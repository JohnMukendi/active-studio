export default function Iframe(props) {
    return (<div style={{ width:'120px' }} dangerouslySetInnerHTML={ {__html:  props.iframe ? props.iframe:""}} />);
  }