import userRed from '../assets/netflix-profile-pictures.jpg';
import Layout from '../components/Layout';

function MyAccount() {
  return (
    <Layout>
      <>
        <div className="account">
          <h2>You're watching</h2>
          <img className="imgSize" src={userRed} />
          <p>NILA</p>
        </div>
      </>
    </Layout>
  );
}

export default MyAccount;
