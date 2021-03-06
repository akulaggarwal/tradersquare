import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import {bindActionCreators} from 'redux';
import Header from './header'

class About extends Component {
/**
 * TODO:
 * Add hyperlinks for each team member, point to: blog/linkedin/personal-website/github/etc.
 * Add short description for ea. team member
 * Populate tech stack
 * Make mobile responsive: maybe using bootstrap cards?
 * Make text wrap to window width
 */
  render() {
    return (
      <div className="">
      <Header />
      <h1>About TraderSquare</h1>
        <div className="">
        <p>When it comes to investment strategies for the everyday user, it can quickly become very cumbersome to cut
        through the noise. Often, you need an investment advisor with years of experience, who will end up taking
        a hefty cut of your investment. For those more financially savvy, very complicated, custom excel spread-
        sheets become the norm to assess information based on real-time data.
        <br/>
        We've created a service which simplifies certain aspects of the process. TraderSquare gives the user the
        functionality to filter stocks based on their own preferences, and order stocks based on different financial
        criterea, all without even logging in. Currently, these two services are limited to stocks in the S&P 500, but
        users can also find current financial data for any stock provided by the Intrinio API and store that information
        in their TraderSquare account.
        Disclaimer: We are not making any investment recommendations, please invest at your own risk.
        <br/>
        </p>
        </div>
        
      <h1>The Team</h1>
      <br/><br/>
      <div className="row">

        <div className="col-md-3">
          <div className="col-md-12"><img src="https://scontent.fsnc1-4.fna.fbcdn.net/t31.0-8/1097031_10200347522719245_1948257329_o.jpg" className="photo"/></div>
          <h4 className="centertext col-md-12">Akul Aggarwal</h4>
        </div>

        <div className="col-md-3">
          <div className="col-md-12"><img src="https://scontent.fsnc1-4.fna.fbcdn.net/v/t1.0-0/p206x206/12004767_10205012077282135_8226365319641742061_n.jpg?oh=bcfd2da1cd903532720e0ad0ee41a29f&oe=58AD66C8" className="photo"/></div>
          <h4 className="centertext col-md-12">Angelina May</h4>

        </div>

        <div className="col-md-3">
          <div className="col-md-12"><img src="https://scontent.fsnc1-4.fna.fbcdn.net/v/t1.0-9/1004403_10151689873841068_1415876196_n.jpg?oh=b8f29232f90f96e00511c953e4e9a47e&oe=586CC0BB" className="photo" /></div>
          <h4 className="centertext col-md-12">Cindy Sun</h4>
        </div>

        <div className="col-md-3">
          <div className="col-md-12"><img src="https://scontent.fsnc1-4.fna.fbcdn.net/t31.0-8/10623510_10204591370197577_6605496669023337623_o.jpg" className="photo"/></div>
          <h4 className="centertext col-md-12">Chris Battenfield</h4>
        </div>

        <h1>Technologies Implemented</h1>
        <div className="row">
        <img className="react col-md-2" src="https://camo.githubusercontent.com/de1aee8ba4b47ab028766f2fd83b777715b88c3b/68747470733a2f2f73332d75732d776573742d312e616d617a6f6e6177732e636f6d2f7374616e6c65796379616e672d76322f72656163742d6f7074692e706e672d31373337633838616364656463643366623531336466623866333338623634656634356364313561" />
        <img className="redux col-md-2" src="https://raw.githubusercontent.com/reactjs/redux/master/logo/logo-title-dark.png"/>
        </div>

      </div>
      </div>
    )
  }
}

export default connect(null, {})(About);
