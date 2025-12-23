import Layout from '../../components/Layout';

export default function Customers() {
  return (
    <Layout breadcrumbs={[{ label: 'Customers' }, { label: 'Home' }, { label: 'List' }]}>
      <div className="p-6">
        {/* Header + footer only (no inner content yet) */}
      </div>
    </Layout>
  );
}
