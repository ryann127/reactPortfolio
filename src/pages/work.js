function Work() {
    return (
        <article id="Work">    
            <div className="container projects">
                <section className="project-card1" id="weather">
                    <a href="https://ryann127.github.io/weather-APIdashboard/" className="project-link">Weather Dashboard</a>
                    <a href="https://github.com/ryann127/weather-APIdashboard" className="project-link">Github Repo</a>
                </section>
                <section className="project-card" id="password">
                        <a href="https://ryann127.github.io/random-password-generator/" className="project-link">Password Generator</a>
                        {/* <a href="https://github.com/ryann127/random-password-generator" className="project-link">Github Repo</a> */}
                </section>
                <section className="project-card" id="quiz">
                        <a href="https://ryann127.github.io/javascript-Quiz/" className="project-link">JavaScript Quiz</a>
                </section>
                <section className="project-card" id="daily">
                    <a href="https://ryann127.github.io/daily-planner/" className="project-link">Daily Planner</a>
                </section>
                <section className="project-card" id="movie">
                    <a href="https://walkerjezek.github.io/Project1/" className="project-link">MyMDb</a>
                </section>
                <section className="project-card2" id="project2">
                    <a href="https://glacial-earth-08692.herokuapp.com/" className="project-link">Carbon Calculator</a>
                    <a href="https://github.com/gokublue007/Carbon-Calculator" className="project-link">Github Repo</a>
                </section>
            </div>
        </article>
    )
}

export default Work