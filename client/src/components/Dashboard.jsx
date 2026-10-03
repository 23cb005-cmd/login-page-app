function Dashboard({ email, onLogout }) {
  return (
    <div className="dashboard-card">
      <h1 className="brand-name">Nimbus Access</h1>
      <h2>Welcome back!</h2>
      <p>
        You are signed in as <strong>{email}</strong>.
      </p>
      <p className="dashboard-note">This is a placeholder dashboard for the login demo.</p>
      <button type="button" className="logout-btn" onClick={onLogout}>
        Log Out
      </button>
    </div>
  );
}

export default Dashboard;
