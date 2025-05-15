const Home = () => {
    console.log(localStorage.getItem("email"));
    return (
        <h1 className="home-page">Welcome to our page!</h1>
    );
};

export default Home;