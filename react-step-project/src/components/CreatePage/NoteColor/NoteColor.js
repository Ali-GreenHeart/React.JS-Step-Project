import React, {Component} from 'react';
import './NoteColor.css'

class NoteColor extends Component {
    render() {
        let colors = ["#a4eb34","#34a8eb", "#ebd634", "#eb346b"];
        return (
            <div className="colors-list">
                {
                    colors.map((el, i) => {
                        return (
                            <div key={i} style={{backgroundColor: el}}>
                                <input
                                    className="radio-custom"
                                    id={el}
                                    type="radio"
                                    name="color"
                                    onChange={(e)=>this.props.onColorChanged(e, el)}
                                />
                                <label className="radio-custom-label" htmlFor={el}/>
                            </div>
                        );
                    })
                }
            </div>
        );
    }
}

export default NoteColor;
