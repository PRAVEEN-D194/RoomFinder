const { Fragment } = require("react/jsx-runtime")

export default function Home(){
    return <Fragment>
        

        <section className="hero">
            <h2>Find Your Perfect Room</h2>
        </section>

        <div className="search-box">
            <input type="text" placeholder="Search location..."/>
            <button>Search</button>
        </div>

        <section className="rooms">

            <div className="room-card">
                <img src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688"/>
                <h3>Single Room</h3>
                <p>📍 Chennai</p>
                <p>₹8000/month</p>
                <button>View Details</button>
            </div>

            <div className="room-card">
                <img src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267"/>
                <h3>Shared Room</h3>
                <p>📍 Chennai</p>
                <p>₹5000/month</p>
                <button>View Details</button>
            </div>

            <div className="room-card">
                <img src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"/>
                <h3>Studio Room</h3>
                <p>📍 Chennai</p>
                <p>₹12000/month</p>
                <button>View Details</button>
            </div>

            <div className="room-card">
                <img src="https://images.unsplash.com/photo-1493809842364-78817add7ffb"/>
                <h3>1BHK</h3>
                <p>📍 Chennai</p>
                <p>₹15000/month</p>
                <button>View Details</button>
            </div>

        </section>

        
        </Fragment>
    
}