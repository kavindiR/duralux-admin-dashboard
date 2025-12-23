import Layout from '../../components/Layout';

export default function CustomersCreate() {
  return (
    <Layout breadcrumbs={[{ label: 'Customers' }, { label: 'Home' }, { label: 'Create' }]}>
      <div className="p-6">
        {/* Header + footer only (no inner content yet) */}
      </div>
    </Layout>
  );
}
