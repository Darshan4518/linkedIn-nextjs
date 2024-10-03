<h1>LinkedIn Clone</h1>

<p>
  A feature-rich LinkedIn clone built with <strong>Next.js</strong> that allows users to interact with posts, including posting, deleting, liking, and commenting. This project also integrates user authentication, image handling, and supports both dark mode and light mode.
</p>

<h2> Live Link <a href="https://darshan-linkedin-clone.vercel.app/" target="_blank" ></a> </h2>

<h2>Features</h2>
<ul>
  <li><strong>User Authentication:</strong> Implemented with <a href="https://clerk.dev" target="_blank">Clerk</a> for seamless sign-in and sign-up.</li>
  <li><strong>Post Creation & Deletion:</strong> Users can create new posts and delete their own posts.</li>
  <li><strong>Like & Comment on Posts:</strong> Engage with posts by liking and commenting.</li>
  <li><strong>Image Upload:</strong> Integrated with <a href="https://cloudinary.com" target="_blank">Cloudinary</a> for image storage and management.</li>
  <li><strong>Dark Mode/Light Mode Toggle:</strong> Users can switch between dark mode and light mode for better UI experience.</li>
  <li><strong>Responsive Design:</strong> The UI adapts to different screen sizes using <a href="https://tailwindcss.com" target="_blank">Tailwind CSS</a> and <a href="https://shadcn.dev" target="_blank">Shadcn UI</a>.</li>
  <li><strong>Server-Side Rendering:</strong> Utilizes <code>getServerSideProps</code> for optimized performance.</li>
  <li><strong>API Routes:</strong> Built-in API routes for handling post interactions and user actions.</li>
</ul>

<h2>Technologies Used</h2>
<ul>
  <li><strong>Next.js:</strong> React framework with server-side rendering capabilities.</li>
  <li><strong>Clerk:</strong> Authentication and user management.</li>
  <li><strong>Cloudinary:</strong> For image uploads and storage.</li>
  <li><strong>Shadcn UI:</strong> UI components library.</li>
  <li><strong>Tailwind CSS:</strong> Utility-first CSS framework for styling.</li>
  <li><strong>Dark Mode/Light Mode Toggle:</strong> Custom theme toggle for better user experience.</li>
  <li><strong>Server-side Props & API Routes:</strong> Efficient data fetching and server-side functionality.</li>
</ul>

<h2>How to Run the Project</h2>

<h3>Prerequisites</h3>
<ul>
  <li>Node.js</li>
  <li>npm or yarn</li>
  <li>Cloudinary account</li>
  <li>Clerk account</li>
</ul>

<h3>Installation</h3>
<ol>
  <li>Clone the repository:
    <pre><code>git clone https://github.com/your-username/linkedin-clone.git</code></pre>
  </li>
  <li>Navigate to the project directory:
    <pre><code>cd linkedin-clone</code></pre>
  </li>
  <li>Install dependencies:
    <pre><code>npm install</code></pre>
    or
    <pre><code>yarn install</code></pre>
  </li>
  <li>Set up environment variables:
    <p>Create a <code>.env.local</code> file in the root directory.</p>
    <p>Add the following environment variables:</p>
    <pre><code>NEXT_PUBLIC_CLERK_FRONTEND_API=your_clerk_frontend_api_key
CLERK_API_KEY=your_clerk_api_key
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
    </code></pre>
  </li>
  <li>Run the development server:
    <pre><code>npm run dev</code></pre>
    or
    <pre><code>yarn dev</code></pre>
  </li>
  <li>Open the application in your browser at <a href="http://localhost:3000" target="_blank">http://localhost:3000</a>.</li>
</ol>

<h2>Screenshots</h2>
<p>Add screenshots here showcasing the app's functionality.</p>

<h2>License</h2>
<p>This project is licensed under the MIT License. See the <a href="LICENSE">LICENSE</a> file for more details.</p>
