import { AppShell } from '@/components/AppShell'
import { PageHeader, WhiteLabelPreview, card } from '@/components/ModuleUI'

export default function Page() {
  const fields = ['Logo Upload', 'Favicon Upload', 'Primary Color', 'Secondary Color', 'Brand Name', 'Custom Domain']
  return (
    <AppShell role='admin' title='White Label Settings'>
      <PageHeader title='White Label Settings' subtitle='Manage logo, colors, domain, and branded templates.' />
      <div className='grid gap-4 xl:grid-cols-2'>
        <div className={card}>
          <div className='grid gap-2 md:grid-cols-2'>
            {fields.map((f) => (
              <input key={f} className='rounded border p-2' placeholder={f} defaultValue={f === 'Primary Color' ? '#0B4EDB' : ''} />
            ))}
          </div>
          <h4 className='mt-3 font-medium'>Email Branding Preview</h4>
          <div className='rounded border p-2 text-sm'>Header logo + accent button colors applied.</div>
          <h4 className='mt-3 font-medium'>Report Branding Preview</h4>
          <div className='rounded border p-2 text-sm'>PDF footer with brand + custom domain.</div>
          <div className='mt-3 flex gap-2'>
            <button className='rounded border px-3 py-2'>Preview</button><button className='rounded border px-3 py-2'>Save</button>
            <button className='rounded bg-[#0B4EDB] px-3 py-2 text-white'>Publish</button><button className='rounded border px-3 py-2'>Revert</button>
          </div>
        </div>
        <WhiteLabelPreview />
      </div>
    </AppShell>
  )
}
