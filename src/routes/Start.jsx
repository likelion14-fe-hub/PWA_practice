import { useNavigate } from 'react-router-dom';
import { logout, isLoggedIn } from '@utils/auth';
import { useEffect, useState } from 'react';

function Start() {
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    setLoggedIn(isLoggedIn());
  }, []);

  const handleAuthClick = () => {
    if (loggedIn) {
      logout();
      setLoggedIn(false);
      alert('로그아웃 되었어요!');
    } else {
      navigate('/login');
    }
  };

  return (
    <main className="page-wrapper">
      <section className="auth-card">
        <h1 className="auth-title">🦁 2026 연합 세션 🦁</h1>
        <p className="auth-subtitle">
          {loggedIn ? '로그인된 상태예요. 로그아웃하시겠어요?' : '로그인하고 시작해볼까요?'}
        </p>
        <button className="auth-button" type="button" onClick={handleAuthClick}>
          {loggedIn ? '로그아웃 😴' : '로그인하러 가기 🚀'}
        </button>
      </section>
    </main>
  );
}

export default Start;
