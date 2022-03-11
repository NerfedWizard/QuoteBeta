import PropTypes from "prop-types";
import React, { Component } from "react";
import { connect } from "react-redux";
import { getQuotes } from "../Actions/QuoteAction";
import FloatingActionButtons from "./FloatingActionButtons";

class Dashboard extends Component {
    componentDidMount() {
        this.props.getQuotes();
        // this.props.getAuthorQuotes();
    }
    render() {
        const { quotes } = this.props.quotes;
        return (
            <div className="quotes">
                <container>
                    <row>
                        <col md="12 m-auto" style={{ margin: 0 }}>
                            <br />
                            <FloatingActionButtons />
                            <br />
                            {quotes.map((quote) => (
                                <quote key={quotes.id} project={quotes} />
                            ))}
                        </col>
                    </row>
                </container>
            </div>
        );
    }
}

Dashboard.propTypes = {
    quote: PropTypes.object.isRequired,
    getQuotes: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
    quote: state.project,
});

export default connect(mapStateToProps, { getQuotes })(Dashboard);
