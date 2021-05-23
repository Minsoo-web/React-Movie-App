import React from "react";

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      // redirect to home
      history.push("/");
    }
  }
  render() {
    // url로 접근할 경우를 guard
    if (this.props.location.state === undefined) {
      return null;
    }

    const {
      location: {
        state: { year, title }
      }
    } = this.props;
    return <div>{title}</div>;
  }
}

export default Detail;
