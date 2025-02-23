function login() {
    const usernameInput = document.getElementById('username').value;
    const passwordInput = document.getElementById('password').value;
    const users = [
        { username: 'admin', password: 'abc123' }
    ];
    const user = users.find(u => u.username === usernameInput && u.password === passwordInput);

    if (user) {
        document.body.innerHTML = `
            <div style="
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                align-items: center;
                width: 100%;
                height: 100%;
                margin: 0;
                padding: 0;
                background: linear-gradient(to bottom right, #4b7f7e, #f5e3b3);
                font-family: 'Roboto', sans-serif;
                color: #333333;
                overflow-y: auto;
            ">
                <h1 style="font-size: 2.8rem; margin: 20px 0; color: #333333;">About Me</h1>
                <div style="
                    width: 90%;
                    max-width: 1200px;
                    margin: 20px auto;
                ">
                    <!-- Personal Introduction -->
                    <div style="
                        margin-bottom: 30px;
                        padding: 20px;
                        background: rgba(255, 255, 255, 0.9);
                        border-radius: 15px;
                        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
                    ">
                        <h2 style="font-size: 2.2rem; margin-top: 20px; color: #4b7f7e;">Who I Am</h2>
                        <p style="
                            font-size: 1.1rem;
                            line-height: 1.8;
                            margin-bottom: 15px;
                            text-align: justify;
                        ">
                            Hello! I'm <b>Karunishiga</b>, a passionate student of AI and Data Science, fueled by a love for problem-solving 
                            and innovation. My academic journey has been centered around exploring the endless possibilities of machine learning, 
                            data analytics, and modern web technologies. With every project, I strive to bridge the gap between technology and 
                            real-world applications.
                        </p>
                        <p style="
                            font-size: 1.1rem;
                            line-height: 1.8;
                            margin-bottom: 15px;
                            text-align: justify;
                        ">
                            Apart from academics, I enjoy staying updated on emerging trends in AI, contributing to community-driven projects, 
                            and experimenting with coding challenges. My ultimate goal is to create meaningful impacts through my work in 
                            both professional and personal spheres.
                        </p>
                    </div>

                    <!-- Interests and Skills -->
                    <div style="
                        margin-bottom: 30px;
                        padding: 20px;
                        background: rgba(255, 255, 255, 0.9);
                        border-radius: 15px;
                        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
                    ">
                        <h2 style="font-size: 2.2rem; margin-top: 20px; color: #4b7f7e;">Technical Interests</h2>
                        <p style="
                            font-size: 1.1rem;
                            line-height: 1.8;
                            margin-bottom: 15px;
                            text-align: justify;
                        ">
                            My technical interests span a wide array of topics:
                            <ul>
                                <li>Designing user-friendly web applications using modern frameworks.</li>
                                <li>Exploring advancements in machine learning and deep learning.</li>
                                <li>Building data-driven solutions to optimize processes in various industries.</li>
                                <li>Developing AI tools that enhance education, healthcare, and accessibility.</li>
                            </ul>
                        </p>
                    </div>

                    <!-- Hobbies -->
                    <div style="
                        margin-bottom: 30px;
                        padding: 20px;
                        background: rgba(255, 255, 255, 0.9);
                        border-radius: 15px;
                        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
                    ">
                        <h2 style="font-size: 2.2rem; margin-top: 20px; color: #4b7f7e;">Beyond Work</h2>
                        <p style="
                            font-size: 1.1rem;
                            line-height: 1.8;
                            margin-bottom: 15px;
                            text-align: justify;
                        ">
                            Life isn't all about work! When I'm not diving into lines of code or analyzing datasets, you'll find me:
                            <ul>
                                <li>Indulging in creative writing to unwind and express my thoughts.</li>
                                <li>Trying out new recipes and experimenting in the kitchen.</li>
                                <li>Exploring nature, whether it's through hiking trails or photography.</li>
                                <li>Volunteering for tech education programs to empower others.</li>
                            </ul>
                        </p>
                    </div>

                    <!-- Goals -->
                    <div style="
                        margin-bottom: 30px;
                        padding: 20px;
                        background: rgba(255, 255, 255, 0.9);
                        border-radius: 15px;
                        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
                    ">
                        <h2 style="font-size: 2.2rem; margin-top: 20px; color: #4b7f7e;">Future Aspirations</h2>
                        <p style="
                            font-size: 1.1rem;
                            line-height: 1.8;
                            margin-bottom: 15px;
                            text-align: justify;
                        ">
                            As I look to the future, I envision myself as a part of groundbreaking AI innovations that shape a better tomorrow. 
                            My dream is to contribute to projects that drive inclusivity, efficiency, and sustainability. Whether it's through 
                            research or application, I want to leave a lasting mark in the field of technology.
                        </p>
                    </div>
                </div>

                <!-- Back Button -->
                <button style="
                    padding: 12px 25px;
                    font-size: 1rem;
                    font-weight: bold;
                    border: none;
                    border-radius: 8px;
                    cursor: pointer;
                    background: #333333;
                    color: white;
                    margin: 20px;
                    transition: background 0.3s ease;
                "
                onmouseover="this.style.background='#708090'"
                onmouseout="this.style.background='#333333'"
                onclick="location.reload()">Back to Login</button>
            </div>
        `;
    } else {
        alert('Invalid username or password!');
        document.getElementById('username').value = '';
        document.getElementById('password').value = '';
    }
}
