import './Sidebar.css'
import data from '../../data/data.json'
import Topics from '../../components/Topics'

const Sidebar = () => {
    return(
        <div className="Sidebar">
          <nav>
            <ul>
              <Topics data ={data}/>
            </ul>
          </nav>
        </div>
    )
}

export default Sidebar