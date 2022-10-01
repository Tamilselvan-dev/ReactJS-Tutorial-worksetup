import React, { Component } from 'react';
import axios from 'axios';

class ApiClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      error: false,
      errorMsg: 'APi error',
      userId: '',
      title: '',
      body: '',
    };
  }

  async componentDidMount() {
    try {
      await fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => {
          response.json().then((data) => this.setState({ posts: data }));
        })
        .catch((err) => {
          console.log(err);
          return this.setState({ error: true });
        });
    } catch (err) {
      console.log(err);
      return this.setState({ error: true });
    }
  }

  changeHadler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submit = (e) => {
    e.preventDefault();
    axios
      .post('https://jsonplaceholder.typicode.com/posts', this.state)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  render() {
    const { posts, error, errorMsg, userId, title, body } = this.state;
    return (
      <div>
        List of Post
        <form onSubmit={this.submit}>
          <input type="text" name="userId" onChange={this.changeHadler} />
          <input type="text" name="title" onChange={this.changeHadler} />
          <input type="text" name="body" onChange={this.changeHadler} />
          <button type="submit">Submit</button>
        </form>
        {posts.length
          ? posts.map((data) => {
              return (
                <div key={data.id}>
                  <h1>
                    {data.id} {data.title}
                  </h1>
                  <h2>{data.body}</h2>
                </div>
              );
            })
          : null}
        {error ? <div>{errorMsg}</div> : null}
      </div>
    );
  }
}

export default ApiClass;
