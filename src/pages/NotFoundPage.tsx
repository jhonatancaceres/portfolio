
import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Page } from '../components/ui/Layout';
import { IoIosCloseCircleOutline } from 'react-icons/io';

const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Optional: redirect to home after delay
    const timer = setTimeout(() => {
      navigate('/');
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return <Page title="404 - Page Not Found" icon={<IoIosCloseCircleOutline size={24} />}>
    <p> The page you're looking for doesn't exist.</p>
    < p > Redirecting to home in 5 seconds...</p>
    < Link to="/" style={{ color: '#007bff', textDecoration: 'none' }}>
      Return to Home now
    </Link>

  </Page >

};

export default NotFoundPage;