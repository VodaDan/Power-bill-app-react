const Home = () => {
    console.log(localStorage.getItem("email"));
    return (
        <div className="home-page">
            <h1>Welcome to our page!</h1>
            <h2>- Power bill management -</h2>
        </div>
    );
};

export default Home;