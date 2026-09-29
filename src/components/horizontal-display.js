import React from 'react';
import '../styles/components/horizontal-display-decorator.css';

class HorizontalDisplay extends React.Component {
    render() {
        const {order = 1, image, title} = this.props;

        return (
            <div className='horizontal-display'>
                <div className='horizontal-display-container'>
                    <div className="display-order">
                        <span className="display-order-text"># {order}</span>
                    </div>

                    <div className="display-image">
                        <img src={image} alt={title + " Icon"} />
                    </div>

                    <div className="display-title">
                        <span className="display-title-text">{title}</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default HorizontalDisplay;
