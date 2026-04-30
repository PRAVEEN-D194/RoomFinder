import { Fragment } from "react/jsx-runtime";

export default function Home() {
    return <Fragment>
        <header>
    <h1>RoomRent</h1>
    <nav>
        <a href="index.html">Home</a>
        <a href="#">Rooms</a>
    </nav>
</header>

<section className="room-details">

    <div className="room-image">
        <img src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688"/>
    </div>

    <div className="room-info">
        <h2>Single Room in Chennai</h2>
        <p><strong>📍 Location:</strong> Chennai</p>
        <p><strong>💰 Rent:</strong> ₹8000/month</p>
        <p><strong>📞 Contact:</strong> 9012345678</p>

        <h3>Description</h3>
        <p>Comfortable single room near beach with good ventilation and peaceful environment.</p>

        <h3>Conditions</h3>
        <ul>
            <li>Single person only</li>
            <li>No pets</li>
            <li>Advance required</li>
        </ul>

        <button>Contact Owner</button>
    </div>

</section>
<section className="reviews">

    <h2>Reviews</h2>

    <div className="review-card">
        <p><strong>Kiran</strong> ⭐⭐⭐⭐</p>
        <p>Nice environment near beach.</p>
    </div>

    <div className="review-card">
        <p><strong>Rahul</strong> ⭐⭐⭐⭐⭐</p>
        <p>Very clean and good owner.</p>
    </div>

</section>

<footer>
    <p>© 2026 RoomRent</p>
</footer>
    </Fragment>
}