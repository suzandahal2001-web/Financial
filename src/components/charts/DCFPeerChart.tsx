import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend,
} from 'recharts';
import { projectDCF } from '../../data';

export default function DCFPeerChart() {
  const data = projectDCF.peerComps.map((c) => ({
    name: c.name,
    'Levered Beta': c.leveredBeta,
    'Unlevered Beta': c.unleveredBeta,
  }));

  return (
    <div className="bg-white border border-navy-100 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300">
      <h4 className="text-navy-900 font-semibold mb-1">Peer Comparable Beta Analysis</h4>
      <p className="text-navy-400 text-xs mb-4">5 Indian retail sector peers — Levered vs Unlevered Beta</p>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} margin={{ top: 20, right: 20, bottom: 10, left: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e0eaff" />
          <XAxis dataKey="name" stroke="#6173e8" fontSize={11} tickLine={false} axisLine={{ stroke: '#c7d8fe' }} angle={-15} textAnchor="end" height={60} />
          <YAxis stroke="#6173e8" fontSize={12} tickLine={false} axisLine={false} />
          <Tooltip
            contentStyle={{ backgroundColor: '#fff', border: '1px solid #dbeafe', borderRadius: '8px', fontSize: '13px' }}
            formatter={(v: any) => v.toFixed(4)}
          />
          <Legend wrapperStyle={{ fontSize: '12px', paddingTop: '10px' }} />
          <Bar dataKey="Levered Beta" fill="#2563eb" radius={[4, 4, 0, 0]} barSize={18} />
          <Bar dataKey="Unlevered Beta" fill="#93c5fd" radius={[4, 4, 0, 0]} barSize={18} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
