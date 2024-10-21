
import './App.css'
import { User } from './components/User';

// если мы экпортуем как экспорт сверху а не экспорт дефолт снизу то импортуируется с {} 

function App() {
  const users = [{
    name: 'oksana',
    age: 34
  },
  {
    name: 'olga',
    age: 6
  },
  {
    name: 'alex',
    age: 36
  },
]
  ;
  let x = 2000;

  function showSalary() {
    console.log('oksana');
  }

  return (
    <>
    <h1>Function Component</h1>
    {/* < User obj={user} /> */}
    {/* <User {...user}/> */}
    {/* другой вариант передачи тогда уже не обьект в пропс а сразу властивости */}
    {/* так мы передаем данные в Юзер */}
   {users.map((user, idx) => < User key={idx} obj={user}/>)}
   <User salary={x} func={showSalary}/>
   {/* это если массив то передаем через мэр */}
    </>
  )
}

export default App
