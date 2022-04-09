import ReactDOM from "react-dom/client";
import { App } from 'components/App';
import '../node_modules/modern-normalize/modern-normalize.css';
import './index.css';


const elem = (
  <>
    <div>
      <App />
    </div>
  </>);

console.log(elem);
const container = document.getElementById('root');
ReactDOM.createRoot(container).render(elem);



// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
