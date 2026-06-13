import type { TuitionAccountResponse } from '@/entities/tuition/model/types';

interface StudentInfoCardProps {
  accountData: TuitionAccountResponse;
  studentName?: string;
  studentDocument?: string;
}

const formatCurrency = (amount: number) =>
  new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0,
  }).format(amount);

export const StudentInfoCard = ({
  accountData,
  studentName,
  studentDocument,
}: StudentInfoCardProps) => (
  <div className="card student-info">
    <div className="info-item">
      <span className="info-label">Estudiante</span>
      <span className="info-value">
        {studentName ? studentName : `ID: ${accountData.estudiante_id}`}
        {studentDocument && (
          <span style={{ display: 'block', fontSize: '0.85em', color: 'var(--text-muted)' }}>
            C.C. {studentDocument}
          </span>
        )}
      </span>
    </div>
    <div className="info-item">
      <span className="info-label">Estado Global</span>
      <span className="info-value">
        {accountData.estado_pension_general ? 'Paz y Salvo' : 'Pendiente'}
      </span>
    </div>
    <div className="info-item">
      <span className="info-label">Valor de la Mensualidad</span>
      <span className="info-value">{formatCurrency(accountData.valor_total_anual)}</span>
    </div>
  </div>
);
