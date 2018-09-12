import React, { Component } from 'react';

class Timer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      days: 0,
      dayOrDays: "",
      hours: 0,
      hourOrHours: "",
      minutes: 0,
      minuteOrMinutes: "",
      seconds: 0,
      secondOrSeconds: "",
    }
    //console.log(this.props.time);
  }



  componentWillMount() {
    this.getTimeUntil(this.props.time)
    //console.log(`will mount`, this.props.time.selected);
  }

  componentDidMount() {
    setInterval(() => this.getTimeUntil(this.props.time), 1000)
  }

  getTimeUntil(date) {
    let time = Date.parse(new Date()) - Date.parse(date.date);
    let seconds = Math.floor((time / 1000) % 60);
    let minutes = Math.floor((time / 1000 / 60) % 60);
    let hours = Math.floor(time / (1000 * 60 * 60) % 24);
    let days = Math.floor(time / (1000 * 60 * 60 * 24));

    let dayOrDays = days === 1 ? `day` : `days`
    let hourOrHours = hours === 1 ? `hrs` : `hrs`
    let minuteOrMinutes = minutes === 1 ? `min` : `min`
    let secondOrSeconds = seconds === 1 ? `s` : `s`

    this.setState({
      days: days,
      dayOrDays: dayOrDays,
      hours: hours,
      hourOrHours: hourOrHours,
      minutes: minutes,
      minuteOrMinutes: minuteOrMinutes,
      seconds: seconds,
      secondOrSeconds: secondOrSeconds,
    })
  }

  render() {
    return (
      <div>
        <div className={this.props.time.selected ? "hide" : "clock-days"}>
          <div className={this.state.days > 0 ? "show" : "hide"} >{this.state.days} {this.state.dayOrDays}</div>
          <div className={this.state.hours > 0 ? "show" : "hide"}>{this.state.hours}{this.state.hourOrHours}</div>
          <div className={this.state.minutes > 0 ? "show" : "hide"}>{this.state.minutes}{this.state.minuteOrMinutes}</div>
          <div>{this.state.seconds}{this.state.secondOrSeconds}</div>
        </div>

      </div>
    )
  }
}
export default Timer;
