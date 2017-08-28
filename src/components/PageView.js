import React, {Component} from 'react';
import {connect} from 'react-redux';
import ImageItem from './ImageItem';

class PageView extends Component {
    render() {
        let imageItems;
        if(this.props.images) {
            imageItems = this.props.images.photos.map( (image, i) =>
                <ImageItem
                    name={ image.name}
                    url={image.image_url}
                    key={i}
                />
            );
        }

        return(
            <div className="row align-grid">{imageItems}</div>
        );
    }
}

function mapStateToProps(state){
    return {...state.images};
}

export default connect(mapStateToProps)(PageView);

