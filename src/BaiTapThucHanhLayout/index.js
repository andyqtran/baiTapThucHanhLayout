import React, { Component } from "react";
import Navbar from "./navbar";
import Body from "./body";
import Footer from "./footer";

export default class Main extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Body />
                <Footer />
            </div>
        );
    }
}
