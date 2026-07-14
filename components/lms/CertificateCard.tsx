'use client';

import { Award, Download, Printer } from 'lucide-react';
import { formatDate } from '../../lib/lms/utils';
import type { Certificate } from '../../lib/lms/types';

type CertificateCardProps = {
  certificate: Certificate;
};

export default function CertificateCard({ certificate }: CertificateCardProps) {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="mx-auto max-w-2xl">
      {/* Certificate */}
      <div
        className="relative overflow-hidden rounded-[2rem] border-2 border-violet-500/30 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-10 shadow-[0_32px_100px_rgba(139,92,246,0.15)] print:shadow-none"
        id="certificate-print"
      >
        {/* Decorative corners */}
        <div className="absolute left-0 top-0 h-32 w-32 rounded-br-full bg-gradient-to-br from-violet-500/10 to-transparent" />
        <div className="absolute bottom-0 right-0 h-32 w-32 rounded-tl-full bg-gradient-to-tl from-fuchsia-500/10 to-transparent" />

        <div className="relative text-center">
          {/* Icon */}
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 ring-2 ring-violet-500/30">
            <Award className="h-10 w-10 text-violet-300" />
          </div>

          {/* Title */}
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-violet-400">
            Certificate of Completion
          </p>
          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
            ShikshaSetu
          </h2>

          {/* Divider */}
          <div className="mx-auto my-6 h-px w-48 bg-gradient-to-r from-transparent via-violet-500/50 to-transparent" />

          {/* Recipient */}
          <p className="text-sm text-slate-400">This is to certify that</p>
          <p className="mt-2 text-2xl font-bold text-white">{certificate.userName}</p>

          <p className="mt-4 text-sm text-slate-400">has successfully completed the course</p>
          <p className="mt-2 text-xl font-semibold text-violet-200">{certificate.courseName}</p>

          {/* Date & Number */}
          <div className="mt-8 flex items-center justify-center gap-6 text-sm text-slate-400">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Date</p>
              <p className="mt-1 font-medium text-slate-300">{formatDate(certificate.earnedAt)}</p>
            </div>
            <div className="h-8 w-px bg-slate-800" />
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Certificate No.</p>
              <p className="mt-1 font-mono text-sm font-medium text-slate-300">{certificate.certificateNumber}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="mt-6 flex items-center justify-center gap-3 print:hidden">
        <button
          onClick={handlePrint}
          className="inline-flex items-center gap-2 rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-violet-400 hover:text-white"
        >
          <Printer className="h-4 w-4" />
          Print
        </button>
      </div>
    </div>
  );
}
