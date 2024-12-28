**Hirrd - Job Portal**

Hirrd is a modern job portal application designed to connect job seekers with potential employers. Built with React for the frontend, Supabase as the backend database, and Clerk for user authentication, Hirrd provides a seamless experience for creating, managing, and applying for jobs.

**Features**

- **User Authentication**: Secure login and signup functionality powered by Clerk.
- **Job Listings**: Employers can post job openings, and seekers can browse them.
- **Profile Management**: Users can manage their profiles, including uploading resumes and updating details.
- **Search and Filter**: Advanced search and filtering options to find the right job or candidate.
- **Responsive Design**: Fully optimized for both desktop and mobile devices.

**Tech Stack**

- **Frontend**: React
- **Backend**: Supabase
- **Authentication**: Clerk
- **Styling**: Tailwind CSS

**Installation**

Follow these steps to run the project locally:

**Prerequisites**

Ensure you have the following installed on your system:

- Node.js (>= 14.x)
- npm or yarn

**Steps**

1. **Clone the Repository**:
2. git clone <https://github.com/vineet28sept/Hirrd.git>

cd Hirrd

1. **Install Dependencies**:
2. npm install
3. \# or

yarn install

1. **Environment Variables**: Create a .env file in the root directory and add the following variables:
2. REACT_APP_SUPABASE_URL=your-supabase-url
3. REACT_APP_SUPABASE_ANON_KEY=your-supabase-anon-key

REACT_APP_CLERK_FRONTEND_API=your-clerk-frontend-api

Replace your-supabase-url, your-supabase-anon-key, and your-clerk-frontend-api with your actual keys.

1. **Run the Development Server**:
2. npm start
3. \# or

yarn start

The application will be accessible at <http://localhost:3000>.

**Usage**

1. **Signup/Login**:
    - Use Clerk's authentication system to create an account or log in.
2. **Browse Jobs**:
    - Navigate through the available job listings using the search and filter options.
3. **Post a Job**:
    - If logged in as an employer, post new job opportunities.
4. **Apply for Jobs**:
    - Submit applications for jobs that match your profile.

**Contributing**

Contributions are welcome! Follow these steps:

1. Fork the repository.
2. Create a new branch:

git checkout -b feature/your-feature-name

1. Commit your changes:

git commit -m "Add your message"

1. Push to your branch:

git push origin feature/your-feature-name

1. Open a pull request.

**Acknowledgments**

- [React](https://reactjs.org/)
- [Supabase](https://supabase.io/)
- [Clerk](https://clerk.dev/)
- [Tailwind CSS](https://tailwindcss.com/)

**Contact**

For any questions or support, feel free to reach out:

- **Email**: <vineetsivastava2809@gmail.com>
- **GitHub**: vineet28sept

Thank you for checking out Hirrd! 🚀
