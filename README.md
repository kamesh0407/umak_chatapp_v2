<div align="center">
  <h1>🌟 Umak Chatapp 🌟</h1>
</div>
<p>Welcome to <strong>Umak Chatapp</strong>! This project showcases a robust and efficient chat application built using the MERN stack. You can check out the live demo here <a href="https://umak-chatapp.onrender.com/"><strong>🔗 <em><span style="color: #FF5733;">Umak Chatapp</span></em> 🚀</strong></a>!</p>

<h2>📅 Project Duration</h2>
<p><strong>06/07/2024 - 10/07/2024</strong></p>

<h2>🛠 Tech Stack</h2>
<ul>
  <li><strong><img src="https://www.mongodb.com/assets/images/global/leaf.png" alt="MongoDB" height="20"> MongoDB</strong>: Database</li>
  <li><strong><img src="https://expressjs.com/images/express-facebook-share.png" alt="ExpressJS" height="20"> ExpressJS</strong>: Backend framework</li>
  <li><strong><img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="ReactJS" height="20"> ReactJS</strong>: Frontend library</li>
  <li><strong><img src="https://nodejs.org/static/images/logo.svg" alt="NodeJS" height="20"> NodeJS</strong>: Server environment</li>
</ul>

<h3>Tech Stack Details</h3>
<ul>
  <li><strong>MongoDB</strong>: Database to store user data.</li>
  <li><strong>ReactJS</strong>: Front end hooks (Login page, signup page).</li>
  <li><strong>Tailwind CSS</strong>: CSS framework for modern web design without leaving HTML.</li>
  <li><strong>Daisy UI</strong>: Component library for Tailwind CSS.</li>
  <li><strong>Socket.IO</strong>: Real-time communication.</li>
  <li><strong>JWT (JSON Web Tokens)</strong>: Authentication and authorization.</li>
  <li><strong>Postman</strong>: API testing.</li>
  <li><strong>Render</strong>: Deployment platform.</li>
</ul>

<h2>🚀 Features</h2>
<ul>
  <li><strong>Authentication & Authorization</strong>: Secure login system using JSON Web Tokens.</li>
  <li><strong>Real-time Communication</strong>: Instant messaging with Socket.IO.</li>
  <li><strong>Modern UI</strong>: Built with Tailwind CSS and Daisy UI for a sleek design.</li>
  <li><strong>API Testing</strong>: Using Postman for reliable API testing.</li>
  <li><strong>Middleware</strong>: Efficient handling of authorization.</li>
</ul>

<h2>📦 Installation</h2>

<h3>Terminal Commands to Install Packages:</h3>
<ol>
  <li>Create a Vite project:
    <pre><code>npm create vite@latest .</code></pre>
    <ul>
      <li>Choose React framework</li>
      <li>Choose JavaScript variant</li>
    </ul>
  </li>

  <li>Install dependencies:
    <pre><code>npm install
npm run dev</code></pre>
  </li>

  <li>Initialize and install backend packages in the root folder:
    <pre><code>npm init -y
npm install express dotenv cookie-parser bcryptjs mongoose socket.io jsonwebtoken</code></pre>
    <ul>
      <li><strong>express</strong>: To initialize the express server.</li>
      <li><strong>dotenv</strong>: To read environment variables.</li>
      <li><strong>cookie-parser</strong>: To parse cookies.</li>
      <li><strong>bcryptjs</strong>: To hash passwords.</li>
      <li><strong>mongoose</strong>: To interact with the database.</li>
      <li><strong>socket.io</strong>: For real-time communication.</li>
      <li><strong>jsonwebtoken</strong>: To create tokens.</li>
    </ul>
  </li>

  <li>Start the server:
    <pre><code>npm run server</code></pre>
  </li>

  <li>Optional: Install <code>nodemon</code> for automatic server restarts:
    <pre><code>npm install nodemon --save-dev</code></pre>
  </li>
</ol>

<h3>Tailwind CSS Installation:</h3>
<pre><code>npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p</code></pre>
<ul>
  <li><strong>Tailwind Glassmorphism Generator</strong>: <a href="https://tailwindcss-glassmorphism.vercel.app/">Tailwind CSS Glassmorphism</a></li>
</ul>

<h3>Additional Libraries:</h3>
<ul>
  <li><strong>Daisy UI</strong>: Component library for Tailwind CSS.</li>
  <li><strong>React Icons</strong>: <a href="https://react-icons.github.io/react-icons/">React Icons</a></li>
  <li><strong>React Hot Toast</strong>: <a href="https://react-hot-toast.com/">React Hot Toast</a> for error messages.</li>
  <li><strong>Zustand</strong>: <a href="https://zustand-demo.pmnd.rs/">Zustand</a> for global state management.</li>
</ul>

<h2>🌐 Deployment</h2>
<ul>
  <li>Deployed using Render: <a href="https://dashboard.render.com/">Render Dashboard</a></li>
</ul>

<h2>💡 Application Insights</h2>
<ul>
  <li><strong>Postman</strong>: To test and interact with APIs through a user-friendly interface.</li>
  <li><strong>MongoDB</strong>: For managing large amounts of data quickly.</li>
  <li><strong>JWT</strong>: For secure data transmission and authorization.</li>
</ul>

<h2>📖 How It Works</h2>

<h3>Before Socket.IO Implementation</h3>
<ul>
  <li><strong>Not Real-Time</strong>: User 1 sends a message which is stored in the DB. User 2 sees the message only after refreshing the page.</li>
</ul>

<h3>After Socket.IO Implementation</h3>
<ul>
  <li><strong>Real-Time Communication</strong>: Instant message delivery and reflection in the DB.</li>
</ul>
