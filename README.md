# JobShuru – Job Portal Web Application

JobShuru is a full-stack job portal that allows job seekers to apply for jobs, recruiters to post and manage listings, and admins to monitor the platform. It features secure authentication, role-based access, real-time job application tracking, and a sleek responsive UI.

##  Live Demo

[Check out the GitHub Repository](https://github.com/anirudh-2704/jobportal_JobShuru.git)

##  Features

-  **User Registration & Login** with JWT authentication
-  **Role-based access control** (Job Seekers, Recruiter)
-  **Resume Uploads** via Multer with Cloudinary integration
-  **Job Listings** – Create, Read, Update, Delete
-  **Job Applications** and recruiter shortlisting
-  **Real-time application tracking** for Job Seekers
-  **Responsive UI** using Tailwind CSS and ShadCN UI


##  Tech Stack

### Frontend
- **React.js**
- **Redux Toolkit** for state management
- **Tailwind CSS** & **ShadCN UI** for styling
- **Axios** for API requests

### Backend
- **Node.js**, **Express.js**
- **MongoDB** with Mongoose
- **JWT** for authentication
- **Multer** & **Cloudinary** for file uploads


##  Installation & Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/your-repository.git
   cd your-repository
   ```

2. Setup backend

  ```bash
  cd ../backend  
  npm install  
  npm run dev  
  ```

3. Setup frontend

  ```bash
  cd ../frontend  
  npm install  
  npm start  
  ```
4. Set up environment variables

   - Create a `.env` file in the backend/
   - add your credentials in `.env` file:
  ```
  PORT=5000
  MONGO_URI=your_mongodb_connection
  JWT_SECRET=your_jwt_secret
  CLOUDINARY_CLOUD_NAME=your_cloudinary_name
  CLOUDINARY_API_KEY=your_key
  CLOUDINARY_API_SECRET=your_secret
  ```

5. Run the application

    ```bash
    npm run dev
    ```
    
5. Testing

  - Ensure MongoDB is running.
  - Test user flow: Register → Login → Apply for a job.
  - Test recruiter flow: Register → Login → Post job → View applications.
  - Open your web browser and go to `http://localhost:5000` to view the application.

## Deployement

 Deployed on Render.
 View Website @ https://jobportal-jobshuru.onrender.com
