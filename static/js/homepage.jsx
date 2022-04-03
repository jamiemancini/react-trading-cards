'use strict';

function Homepage() {
  return (
    <div>
      <h1>Hello, user! Check out our tading cards.</h1>
      <a href="/cards">Go to cards</a>
      <img src="/static/img/balloonicorn.jpg"></img>
    </div>
  );
}

ReactDOM.render(<Homepage />, document.querySelector('#app'));
