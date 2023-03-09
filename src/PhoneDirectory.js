import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import AddSubscriber from './AddSubscriber';
import ShowSubscribers from './ShowSubscribers';

class PhoneDirectory extends Component {
  
  constructor() {
    super();
    this.state = {
      subscribersList:
        [
          {
            id: 1,
            name: 'Harsh Naidu',
            phone: '9503451801'
          },
          {
            id: 2,
            name: 'Sasha Sloan',
            phone: '8888888888'
          },
        ]
    }
  }

  deleteSubscriberHandler = (subscriberId) => {
    let subscribersList = this.state.subscribersList;
    let subscriberIndex = 0;
    subscribersList.forEach(function (subscriber, index){
      if(subscriber.id === subscriberId){
        subscriberIndex = index;
      }
    }, this);
    let newSubscriber = subscribersList;
    newSubscriber.splice(subscriberIndex, 1);
    this.setState({subscribers: newSubscriber})
  };

  addSubscriberHandler = (newSubscriber) => {
    let subscribersList = this.state.subscribersList;
    if (subscribersList.length > 0) {
      newSubscriber.id = subscribersList[subscribersList.length - 1].id + 1;
    }
    else {
      newSubscriber.id = 1;
    }
    subscribersList.push(newSubscriber);
    this.setState({ subscribersList: subscribersList });
  }

  render() {
    return (
      <Router>
        <div className='main-container'>
          <Routes>
            <Route exact path='/' element={<ShowSubscribers subscribersList={this.state.subscribersList} deleteSubscriberHandler={this.deleteSubscriberHandler}/>} />
            <Route exact path='/add' element={<AddSubscriber addSubscriberHandler={this.addSubscriberHandler} />} />
            <Route exact path='/navigate' element={<Navigate to='/add' />} />
          </Routes>
        </div>
      </Router>
    )
  }
}

export default PhoneDirectory;
