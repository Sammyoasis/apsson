<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>APSSON 2024 Conference</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
        }
        header {
            background-color: #004d99;
            color: white;
            padding: 20px 0;
            text-align: center;
        }
        nav {
            background-color: #003366;
            display: flex;
            justify-content: space-around;
            align-items: center;
        }
        nav a {
            color: white;
            text-decoration: none;
            padding: 14px 20px;
            display: block;
        }
        .container {
            width: 80%;
            margin: auto;
            overflow: hidden;
        }
        .section {
            padding: 20px;
            background-color: white;
            margin-bottom: 20px;
            border-radius: 5px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        .section h2 {
            color: #004d99;
        }
        .section p, .section ul {
            line-height: 1.6;
        }
        .registration-form input, .registration-form textarea {
            width: 100%;
            padding: 10px;
            margin: 10px 0;
            border-radius: 5px;
            border: 1px solid #ccc;
        }
        .registration-form input[type="submit"] {
            background-color: #004d99;
            color: white;
            border: none;
            cursor: pointer;
        }
        footer {
            background-color: #003366;
            color: white;
            text-align: center;
            padding: 10px;
            position: fixed;
            width: 100%;
            bottom: 0;
        }
    </style>
</head>
<body>
    <header>
        <div class="container">
            <h1>APSSON 2024 Conference</h1>
            <p>November 4-5, 2024 | Ambrose Alli University, Ekpoma, Edo State, Nigeria</p>
        </div>
    </header>
    <nav>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#conference-details">Conference Details</a>
        <a href="#speakers">Speakers</a>
        <a href="#registration">Registration</a>
        <a href="#contact">Contact</a>
    </nav>
    <div class="container">
        <section id="home" class="section">
            <h2>Welcome to the APSSON 2024 Conference</h2>
            <p>Join us for a two-day event full of insightful talks, engaging workshops, and networking opportunities with fellow plant science students and professionals.</p>
        </section>

        <section id="about" class="section">
            <h2>About APSSON</h2>
            <p>The Association of Plant Science Students of Nigeria (APSSON) is dedicated to fostering a community for students and professionals in the field of plant science. We aim to promote education, research, and collaboration among our members.</p>
        </section>

        <section id="conference-details" class="section">
            <h2>Conference Details</h2>
            <p><strong>Date:</strong> November 4-5, 2024</p>
            <p><strong>Location:</strong> Ambrose Alli University, Ekpoma, Edo State, Nigeria</p>
            <p>The conference will feature keynote speeches, panel discussions, and workshops covering the latest trends and research in plant science.</p>
            <ul>
                <li>Day 1: Registration, Keynote Address, and Panel Discussions</li>
                <li>Day 2: Workshops, Poster Sessions, and Networking Events</li>
            </ul>
        </section>

        <section id="speakers" class="section">
            <h2>Meet Our Speakers</h2>
            <p>We are excited to host a lineup of distinguished speakers from academia and industry. Stay tuned for more details on our speakers and their sessions.</p>
        </section>

        <section id="registration" class="section">
            <h2>Register for the Conference</h2>
            <form class="registration-form" action="https://your-form-handler.com" method="post">
                <input type="text" name="name" placeholder="Full Name" required>
                <input type="email" name="email" placeholder="Email Address" required>
                <textarea name="comments" placeholder="Any comments or special requests" rows="5"></textarea>
                <input type="submit" value="Register">
            </form>
        </section>

        <section id="contact" class="section">
            <h2>Contact Us</h2>
            <p>If you have any questions or need more information, please reach out to us at <a href="mailto:info@apsson2024conference.com">info@apsson2024conference.com</a>.</p>
        </section>
    </div>
    <footer>
        <p>&copy; 2024 APSSON. All rights reserved.</p>
    </footer>
</body>
</html>
