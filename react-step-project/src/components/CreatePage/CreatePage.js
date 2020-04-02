import React, {Component} from 'react';
import NoteColor from './NoteColor/NoteColor'

class CreatePage extends Component{
    style={
        main:{
          display:'flex',
          justifyContent:'center',
          alignItems:'center',
          flexDirection:'column'
        },
      header:{
            fontSize:'30px',
          fontWeight:"700"

      },
        smallText:{
            margin:'10px',
            width:'300px',
            height:'20px',
            borderColor:'#494c52',
            borderRadius: "4px"
        },
        bigText:{
            margin:'10px',
            width: '400px',
            height: '300px',
            borderRadius:'30px',
            borderColor:'#494c52',
        },
        NoteColor: {

        }
    };
    state={
        color:'yellow',
        checked:false
    };
    render() {
        return (
            <>
            {/*<Navbar/>*/}
            <div style={this.style.main}>
            <h1 style={this.style.header}>Fill Data</h1>
                <input style={this.style.smallText} type={'text'} placeholder={'Title'}/>
                <input style={this.style.bigText} type={'textarea'}  placeholder={'Note Text'}/>
                <NoteColor style={this.style.NoteColor}/>
            </div>
            </>
        );
    }
}

export default CreatePage;