import { useEffect, useState } from 'react';
import Router from 'next/router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

const Progress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const start = () => {
      setProgress(0);
      NProgress.start();
    };

    const progress = (url, { loaded, total }) => {
      const progressPercent = (loaded / total) * 100;
      setProgress(progressPercent);
    };

    const end = () => {
      setProgress(100);
      NProgress.done();
    };

    Router.events.on('routeChangeStart', start);
    Router.events.on('routeChangeComplete', end);
    Router.events.on('routeChangeError', end);
    Router.events.on('routeChangeProgress', progress);

    return () => {
      Router.events.off('routeChangeStart', start);
      Router.events.off('routeChangeComplete', end);
      Router.events.off('routeChangeError', end);
      Router.events.off('routeChangeProgress', progress);
    };
  }, []);

  useEffect(() => {
    NProgress.set(progress / 100);
  }, [progress]);

  return null;
};

export default Progress;
