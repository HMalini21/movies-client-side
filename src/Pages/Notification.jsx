import Layout from '../components/Layout';

export default function Notification({ message, onClose }) {
  if (!message) return null;

  return (
    <Layout>
      <div>
        <h1>heko</h1>
      </div>
    </Layout>
  );
}
