import React from 'react';
import './SpaceMobileLayout.css';
import WrappedText from "../components/wrappedText/wrappedText";
import styles from "../styles/stylesheet.module.css";

export class SpaceMobileLayout extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className="wrapper" id="tab_wrapper">
                <div className="container">
                    <div className="item content-image no--margin">
                        {this.props.slider_1}
                    </div>
                    <div className="item content-info">
                        {this.props.info_1}
                    </div>
                </div>


                <div className="container">
                    <div className="content-image">
                        {this.props.slider_2}
                    </div>
                    <div className="content-info">
                        {this.props.info_2}
                    </div>
                </div>


                <div className="container">
                    <div className="content-image">
                    {this.props.slider_3}
                    </div>
                    <div className="content-info">
                    {this.props.info_3}
                    </div>
                </div>


                <div className="container">
                    <div className="content-image">
                    {this.props.slider_4}
                    </div>
                    <div className="content-info">
                    {this.props.info_4}
                    </div>
                </div>


                <div className="container">
                    <div className="content-image">
                    {this.props.slider_5}
                    </div>
                    <div className="content-info">
                    {this.props.info_5}
                    </div>
                </div>
            </div>

        );
    }
}
export default SpaceMobileLayout;