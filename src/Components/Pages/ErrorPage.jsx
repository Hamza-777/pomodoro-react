import React from 'react';
import '../Styles/EmptyPage.css';
import { useTheme } from '../Providers/ThemeProvider';
import { GiEagleHead } from 'react-icons/gi';

const ErrorPage = () => {
  const { theme } = useTheme();

  return (
    <div
      className='error-page flex-center flex-col'
      style={{ backgroundColor: theme === 'dark' ? '#000' : '#fff' }}
    >
      <GiEagleHead className='image' style={{ color: '#361500' }} />
      <h1
        style={{ color: theme === 'dark' ? '#fff' : '#000', fontSize: '10rem' }}
      >
        404
      </h1>
      <p style={{ color: theme === 'dark' ? '#fff' : '#000' }}>
        This is a forbidden zone please refrain from entering...
      </p>
    </div>
  );
};

export default ErrorPage;
