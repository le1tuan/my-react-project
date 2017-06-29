import React from 'react'
import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react'
class Loading extends React.Component {
    constructor(props){
        super(props);
    };

    render(){
        const loading = this.props.load;
        const s = {
            display: 'block',
            position: 'absolute',
            width: '100%',
            height: '100%',
            margin: 0,
        }
        return(
           <div> 
               {loading === true &&<Segment style={s}>
            <Dimmer active inverted>
                <Loader inverted content='Loading' />
            </Dimmer>
                <Image src='/assets/images/wireframe/short-paragraph.png' />
            </Segment>
               }
            </div>
        )
    }
}
export default Loading;