import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
//setInterval(()=>ReactDOM.render(<App />, document.getElementById('root')),1000);
/*function tick(){
	const elem = <div><span>{new Date().toLocaleString()}</span>
</div>;
return elem;
}
setInterval(()=>ReactDOM.render(tick(), document.getElementById('root')),1000);
*/
/*if (module.hot) {
	module.hot.accept();
}*/
registerServiceWorker();
