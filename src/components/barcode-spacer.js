import React from 'react';

class BarcodeSpacer extends React.Component {

    render() {
        const {componentId = 'barcode-spacer'} = this.props;     

        return (
            <div className='barcode-spacer' id={componentId}>
                <span className='barcode'>Hello, it seems youve found a hidden message!, What do you think about my portofolio website?</span>
            </div>
        )
    }
}

export default BarcodeSpacer;
